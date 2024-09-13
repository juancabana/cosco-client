import React, { type FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/shadcn/ui/alert-dialog";
import { useAuth } from "@/providers/auth";
import useDeleteCropMutation from "@/hooks/mutations/useDeleteCropMutation";

interface IsOpen {
    isModalDeletePost: boolean;
    setIsModalDeletePost: (isOpen: boolean) => void;
    postId: string;
}

const ConfirmationDeletePost: FC<IsOpen> = ({
    isModalDeletePost,
    setIsModalDeletePost,
    postId,
}) => {
  const { userId } = useAuth();
    const {mutate} = useDeleteCropMutation();

    const handleDeleteConfirm = () => {
        if (!userId) {
            return;
        }
        mutate(postId);
        setIsModalDeletePost(false);
    };

  return (
    <AlertDialog open={isModalDeletePost} onOpenChange={setIsModalDeletePost}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Estás seguro de que quieres eliminar esta cosecha?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente tu
            cosecha y removerá los datos de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationDeletePost;
