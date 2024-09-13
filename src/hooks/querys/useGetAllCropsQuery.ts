import { getAllCrops, type GetAllCropsPayload, type PostResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useDebounce from "../useDebounce";

const useGetAllCropsQuery = (filters: {
  category?: string;
  department?: string;
  city?: string;
  title?: string;
}) => {
  const limit = 4;
  const [offset, setOffset] = useState(0);
  const debouncedSearchTerm = useDebounce(filters.title, 200);

  const offsetValue = debouncedSearchTerm ? 0 : offset;

  const query = useQuery<PostResponse, unknown, PostResponse, [string, GetAllCropsPayload]>({
    queryKey: ["allCrops", { limit, offset: offsetValue, ...filters, title: debouncedSearchTerm }],
    queryFn: () => getAllCrops({ limit, offset, ...filters }),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24,
    enabled: true,
  });
  useEffect(() => {
    // query.refetch();
    console.log("query", filters);

  }, [filters, offset]);

  const previousPage = () => {
    if (query.data?.currentPage === 1) return;
    setOffset(offset - limit);
  };

  const nextPage = () => {
    if (query.data?.currentPage === query.data?.totalPages) return;
    setOffset(offset + limit);
  };

  return { ...query, previousPage, nextPage, page: offset / limit + 1 };
};

export default useGetAllCropsQuery;
