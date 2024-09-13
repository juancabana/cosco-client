import {
  register,
  type RegisterPayload,
  type RegisterResponse,
} from "@/services/actions";
import { useMutation } from "@tanstack/react-query";
import useLoginMutation from "./useLoginMutation";
import { useErrorModal } from "@/providers/error";

const useRegisterMutation = () => {
  const { mutate } = useLoginMutation();
  const { showError } = useErrorModal();

  const mutation = useMutation<RegisterResponse, unknown, RegisterPayload>({
    mutationKey: ["register"],
    mutationFn: register,
    retry: 0,
    onSuccess: ({ email }, { password }) => mutate({ email, password }),
    onError: () => {
      showError(
        "Ups! Algo salió mal",
        "Por favor, verifica tu conexión a internet e intenta de nuevo"
      );
    },
  });

  return { ...mutation };
};

export default useRegisterMutation;
