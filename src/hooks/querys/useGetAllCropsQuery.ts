import { getAllCrops, type PostResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";

const useGetAllCropsQuery = () => {
  const query = useQuery<unknown, unknown, PostResponse[]>({
    queryKey: ["allCrops"],
    queryFn: getAllCrops,
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24,
    enabled: true,
  });

  return { ...query };
};

export default useGetAllCropsQuery;
