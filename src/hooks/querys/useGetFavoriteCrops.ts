import { getFavorites, type FavoriteResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";

const useGetAllFavoriteCropsQuery = (userId: string) => {
  const query = useQuery<FavoriteResponse[]>({
    queryKey: ["favorites", userId],
    queryFn: () => getFavorites(userId),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!userId,
  });

  return { ...query };
};

export default useGetAllFavoriteCropsQuery;
