import {
  register,
  type PayloadRegister,
  type RegisterResponse,
} from "@/services/actions";
import { useMutation } from "@tanstack/react-query";
import useLoginMutation from "./useLoginMutation";

const useRegisterMutation = () => {
  const { mutate } = useLoginMutation();

  const mutation = useMutation<RegisterResponse, unknown, PayloadRegister>({
    mutationKey: ["register"],
    mutationFn: register,
    retry: 0,
    onSuccess: ({email}, {password}) => mutate({ email, password}),
  });

  return { ...mutation };
};

export default useRegisterMutation;
