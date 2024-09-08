import {
  login,
  type LoginResponse,
  type LoginPayload,
} from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { navigate } from "gatsby";
import { useAuth } from "@/providers/auth";
import { useErrorModal } from "@/providers/error";

const useLoginMutation = () => {
  const { setTokenState, setIdUser } = useAuth();
  const queryCache = useQueryClient();
  const { showError } = useErrorModal();

  const mutation = useMutation<LoginResponse, unknown, LoginPayload>({
    mutationKey: ["login"],
    mutationFn: login,
    retry: 0,
    onSuccess: (data, error) => {
      if (data) {
        setTokenState(data.token);
        setIdUser(data._id);
        queryCache.invalidateQueries({ queryKey: ["userInfo", data._id] });
        navigate("/publications");
      }
    },
    onError: (error) => {
      showError(
        "Ups! Algo salió mal",
        "Por favor, verifica tus credenciales e intenta de nuevo"
      );
    },
  });

  return { ...mutation };
};

export default useLoginMutation;
