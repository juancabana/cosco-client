import {
  updateUser,
  type UpdateUserPayload,
  type UserResponse,
} from "@/services/actions";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/providers/auth";
import { toast } from "@/components/shadcn/ui/use-toast";
import { useErrorModal } from "@/providers/error";

const useUpdateUserMutation = () => {
  const { setUserState } = useAuth();
  const { showError } = useErrorModal();

  const mutation = useMutation<UserResponse, unknown, UpdateUserPayload>({
    mutationKey: ["updateUser"],
    mutationFn: updateUser,
    retry: 0,
    onSuccess: (data) => {
      setUserState(data);
      toast({
        title: "Perfil actualizado",
        description: "Tus cambios han sido guardados con éxito",
      });
    },
    onError: () => {
      showError(
        "Ups! Algo salió mal",
        "Por favor, verifica tu conexión a internet e intenta de nuevo"
      );
    },
  });

  return { ...mutation };
};

export default useUpdateUserMutation;
