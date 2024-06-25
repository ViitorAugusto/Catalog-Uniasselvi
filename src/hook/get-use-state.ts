import { useState, useTransition, useEffect } from "react";

interface FetchState<T> {
  success: boolean;
  message: string | null;
  data: T | null;
  errors: Record<string, string[]> | null;
}

export function useFetch<T>(
  fetchFunction: () => Promise<T>,
  onSuccess?: (data: T) => Promise<void> | void
) {
  const [isPending, startTransition] = useTransition();
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    success: false,
    message: null,
    data: null,
    errors: null,
  });

  useEffect(() => {
    startTransition(async () => {
      try {
        const data = await fetchFunction();
        setFetchState({
          success: true,
          message: "Data fetched successfully",
          data,
          errors: null,
        });
        if (onSuccess) {
          await onSuccess(data);
        }
      } catch (error: any) {
        setFetchState({
          success: false,
          message: error.message,
          data: null,
          errors: error.errors ?? null,
        });
      }
    });
  }, []);

  return [fetchState, isPending] as const;
}
