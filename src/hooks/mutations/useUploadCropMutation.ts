import {
  uploadCrop,
  type UploadPostPayload,
  type UploadPostResponse,
} from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadCropMutation = () => {
  const queryCache = useQueryClient();

  const mutation = useMutation<UploadPostResponse, unknown, UploadPostPayload>({
    mutationKey: ["uploadCrop"],
    mutationFn: uploadCrop,
    retry: 0,
    onSuccess() {
      queryCache.invalidateQueries({ queryKey: ["userCrops"] });
    },
  });

  return { ...mutation };
};

export default useUploadCropMutation;
