import { useAuth } from "@/providers/auth";
import { getUser, type UserResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";

const useGetUserQuery = () => {
  const {setUserState, userId, user} = useAuth();

  const query = useQuery<unknown, unknown, UserResponse>({
    queryKey: ["userInfo", userId],
    queryFn: () => getUser(userId!, setUserState),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    enabled: !!userId && !user,
  });

  return { ...query };
};

export default useGetUserQuery;
