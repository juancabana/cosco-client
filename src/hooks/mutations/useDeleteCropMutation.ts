import { useErrorModal } from "@/providers/error";
import { deleteCrop } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCropMutation = () => {
  const queryCache = useQueryClient();
  const { showError } = useErrorModal();

  const mutation = useMutation<string, unknown, string>({
    mutationKey: ["deleteCrop"],
    mutationFn: deleteCrop,
    retry: 0,
    onSuccess: () => {
      queryCache.invalidateQueries({ queryKey: ["userCrops"] });
    },
    onError: () => {
      showError(
        "Ups! Algo salió mal",
        "No se ha podido eliminar la publicación. Por favor, intenta de nuevo."
      );
    },
  });

  return { ...mutation };
};

export default useDeleteCropMutation;
