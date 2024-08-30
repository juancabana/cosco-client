import { login, type LoginResponse, type PayloadLogin } from "@/services/actions";
import { useMutation,  } from "@tanstack/react-query";
import { navigate } from "gatsby";
import { useAuth } from "@/providers/auth/index";

const useLoginMutation = () => {
  const { setToken } = useAuth();

  const mutation = useMutation<LoginResponse, unknown, PayloadLogin >({
    mutationKey: ["login"],
    mutationFn: login,
    retry: 0,
    onSuccess: ({ token }) => {
      setToken(token);
      navigate("/publications");
    },
  });

  return { ...mutation };
};

export default useLoginMutation;
