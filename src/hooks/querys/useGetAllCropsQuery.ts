import { getAllCrops, type PostResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useGetAllCropsQuery = () => {
  const limit = 4;
  const [offset, setOffset] = useState(0);

  const query = useQuery<unknown, unknown, PostResponse>({
    queryKey: [
      "allCrops",
      {
        limit,
        offset,
      },
    ],
    queryFn: () => getAllCrops(limit, offset),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24,
    enabled: true,
  });

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
