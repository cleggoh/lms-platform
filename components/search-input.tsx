"use client";
import qs from "query-string";
import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname]);

  return (
    <div>
      <div className="relative">
        <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      </div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="md-full md:w-[300px] pl-9 rounded-full bg-slate-200 focus-visible:ring-slate-300"
        placeholder="Search for a course"
      />
    </div>
  );
};

export default SearchInput;
