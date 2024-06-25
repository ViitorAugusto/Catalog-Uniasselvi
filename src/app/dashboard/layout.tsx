import { auth, isAuthenticated, isAuthenticatedAndAdmin } from "@/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await !isAuthenticatedAndAdmin()) {
    redirect("/");
  }
  return <div>{children}</div>;
}
