"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
  const searchParams = useSearchParams();
  const getSearch = searchParams.get("search");
  const { replace } = useRouter();
  const [search, setSearch] = useState(getSearch?.toString() || "");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [getSearch, searchParams]);

  return (
    <Input
      type="search"
      placeholder="find a property..."
      className="max-w-xs dark:bg-muted "
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}
export default NavSearch;
