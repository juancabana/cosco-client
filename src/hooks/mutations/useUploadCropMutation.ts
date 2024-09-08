import { useErrorModal } from "@/providers/error";
import {
  uploadCrop,
  type UploadPostPayload,
  type UploadPostResponse,
} from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadCropMutation = () => {
  const queryCache = useQueryClient();
  const { showError } = useErrorModal();

  const mutation = useMutation<UploadPostResponse, unknown, UploadPostPayload>({
    mutationKey: ["uploadCrop"],
    mutationFn: uploadCrop,
    retry: 0,
    onSuccess() {
      queryCache.invalidateQueries({ queryKey: ["userCrops"] });
    },
    onError(error) {
      showError(
        "Ups! Algo salió mal",
        "Por favor, verifica tu conexión a internet e intenta de nuevo"
      );
    },
  });

  return { ...mutation };
};

export default useUploadCropMutation;
