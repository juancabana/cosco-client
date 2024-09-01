import { useAuth } from "@/providers/auth";
import { getUser, type UserResponse } from "@/services/actions";
import { useQuery } from "@tanstack/react-query";

const useGetUserQuery = (id: string) => {
  const query = useQuery<UserResponse, unknown, void>({
    queryKey: ["userInfo", id],
    queryFn: () => getUser(id),
    retry: 0,
    // enabled: enabled,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours    
  });
  return { ...query };
};

export default useGetUserQuery;
