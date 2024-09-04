import { getUser, type UserResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";

const useGetUserQuery = (id: string | null) => {
  const query = useQuery<UserResponse>({
    queryKey: ["userInfo", id],
    queryFn: () => getUser(id!),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours 
    enabled: !!id,
  });
  return { ...query };
};

export default useGetUserQuery;
