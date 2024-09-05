import {
  login,
  type LoginResponse,
  type LoginPayload,
} from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { navigate } from "gatsby";
import { useAuth } from "@/providers/auth";

const useLoginMutation = () => {
  const { setToken, setIdUser } = useAuth();
  const queryCache= useQueryClient();

  const mutation = useMutation<LoginResponse, unknown, LoginPayload>({
    mutationKey: ["login"],
    mutationFn: login,
    retry: 0,
    onSuccess: (data, error) => {
      if (data) {
        setToken(data.token);
        setIdUser(data._id);
        queryCache.invalidateQueries({queryKey: ["userInfo", data._id]});
        navigate("/publications"); 
      }
    },
  });

  return { ...mutation };
};

export default useLoginMutation;
