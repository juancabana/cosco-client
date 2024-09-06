import { useAuth } from "@/providers/auth";
import { getUserCrops, type UserCropResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";

const useGetUserCropsQuery = () => {
  const {userId} = useAuth();

  const query = useQuery<unknown, unknown, UserCropResponse[]>({
    queryKey: ["userCrops"],
    queryFn: () => getUserCrops(userId!),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24,
    // enabled: !!userId,
    enabled: !!userId,
  });

    return { ...query };
};

export default useGetUserCropsQuery;
