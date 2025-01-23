import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Key = "name" | "minPrice" | "maxPrice";

export const SearchForm = () => {
  const [search, setSearch] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState({
    name: search.get("name") || undefined,
    minPrice: search.get("minPrice") || undefined,
    maxPrice: search.get("maxPrice") || undefined,
  });

  const updateParams = (key: string, value: typeof searchQuery.name) => {
    if (value) {
      search.set(key, value);
    } else {
      search.delete(key);
    }
    setSearch(search);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    for (const key in searchQuery) {
      updateParams(key, searchQuery[key as Key]?.trim());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name ..."
          value={searchQuery.name}
          onChange={(e) =>
            setSearchQuery({
              ...searchQuery,
              name: e.target.value ? e.target.value : undefined,
            })
          }
        />
        <input
          type="number"
          placeholder="min price ..."
          value={searchQuery.minPrice}
          onChange={(e) =>
            setSearchQuery({ ...searchQuery, minPrice: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="max price ..."
          value={searchQuery.maxPrice}
          onChange={(e) =>
            setSearchQuery({ ...searchQuery, maxPrice: e.target.value })
          }
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
