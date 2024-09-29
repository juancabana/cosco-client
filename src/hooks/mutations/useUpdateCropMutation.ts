import { updateCrop, type UploadPostResponse } from "../../services/actions";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/shadcn/ui/use-toast";
import { useErrorModal } from "@/providers/error";

type PartialWithId<T> = Partial<T> & { id: string };

const useUpdateCropMutation = () => {
  const { showError } = useErrorModal();
  const queryCache = useQueryClient();

  const mutation = useMutation<
    UploadPostResponse,
    unknown,
    PartialWithId<UploadPostResponse>
  >({
    mutationKey: ["updateCrop"],
    mutationFn: ({ id, ...payload }) => updateCrop(id, payload),
    retry: 0,
    onSuccess: () => {
      queryCache.invalidateQueries({ queryKey: ["userCrops"] });
      queryCache.invalidateQueries({ queryKey: ["allCrops"] });
      toast({
        title: "Publicación actualizada",
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

export default useUpdateCropMutation;
