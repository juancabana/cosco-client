import { useAuth } from "@/providers/auth";
import { useErrorModal } from "@/providers/error";
import { setFavorite, type SetFavoritePayload } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useSetFavoriteMutation = () => {
  const queryCache = useQueryClient();
  const { userId } = useAuth();
  const { showError } = useErrorModal();

  const mutation = useMutation<string, unknown, SetFavoritePayload>({
    mutationKey: ["setFavorite"],
    mutationFn: setFavorite,
    retry: 0,
    onSuccess: () => {
      queryCache.invalidateQueries({ queryKey: ["favorites", userId] });
    },
    onError: () => {
      showError(
        "Ups! No se pudo agregar a favoritos",
        "Por favor, verifica tu conexión a internet e intenta de nuevo"
      );
    },
  });

  return { ...mutation };
};

export default useSetFavoriteMutation;
