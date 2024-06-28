'use client';
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    
  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams
    const searchString = event.currentTarget.value;
    if(searchString){
        params.set('search', searchString);
    } else {
        params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="ml-auto flex-1 sm:flex-initial">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search orders..."
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] "
          onChange={handleChage}
        />
      </div>
    </form>
  );
};
