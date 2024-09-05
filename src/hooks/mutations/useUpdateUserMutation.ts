import {
  updateUser,
  type UpdateUserPayload,
  type UserResponse,
} from "@/services/actions";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/providers/auth";
import { toast } from "@/components/shadcn/ui/use-toast";

const useUpdateUserMutation = () => {
  const { setUser } = useAuth();

  const mutation = useMutation<UserResponse, unknown, UpdateUserPayload>({
    mutationKey: ["updateUser"],
    mutationFn: updateUser,
    retry: 0,
    onSuccess: (data, error) => {
      setUser(data);
      toast({
        title: "Perfil actualizado",
        description: "Tus cambios han sido guardados con éxito",
      });
    },
  });

  return { ...mutation };
};

export default useUpdateUserMutation;
