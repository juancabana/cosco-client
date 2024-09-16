import React, { useState, type FC } from "react";
import { Heart, ChevronLeft, MapPin, Trash2 } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import { Badge } from "@/components/shadcn/ui/badge";
import type { UserCropResponse } from "@/services/actions";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import categories from "@/assets/categories.json";
import { useAuth } from "@/providers/auth";
import ContactSellerModal from "./contact-seller-modal";
import { useErrorModal } from "@/providers/error";
import plurales from "plurales";
import useSetFavoriteMutation from "@/hooks/mutations/useSetFavoriteMutation";
import { useLocation } from "@reach/router"; // Importa useLocation desde @reach/router
import ConfirmationDeletePost from "./confirmation-delete-post";

interface IsOpen {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const CropModal: FC<UserCropResponse & IsOpen> = (crop) => {
  const { userId } = useAuth();
  const { showError } = useErrorModal();
  const { mutate } = useSetFavoriteMutation();
  const [modalCurrentImage, setModalCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalContactOpen, setIsModalContactOpen] = useState(false);
  const [isModalDeletePost, setIsModalDeletePost] = useState(false);
  const location = useLocation();

  const formattedDate = format(
    new Date(crop.createdAt),
    "d 'de' MMMM 'del' yyyy",
    {
      locale: es,
    }
  );

  const badgeColor =
    categories.find((cat) => cat.category === crop.category)?.color ?? "gray";

  const openSellerContactModal = () => {
    if (!userId) {
      showError(
        "!Ups!",
        "No puedes contactar al vendedor si no has iniciado sesión. Por favor, inicia sesión o crea una cuenta.",
        true
      );
      return;
    }
    setIsModalContactOpen(true);
  };

  const likeCrop = () => {
    if (!userId) {
      showError(
        "!Ups!",
        "No puedes marcar como favorito si no has iniciado sesión. Por favor, inicia sesión o crea una cuenta.",
        true
      );
      return;
    }
    setIsLiked(!isLiked);
    mutate({ postId: crop._id, userId });
  };

  return (
    <>
      <Dialog open={crop.isModalOpen} onOpenChange={crop.setIsModalOpen}>
        <DialogContent className="sm:max-w-[900px] p-0 max-h-[90vh] overflow-hidden flex flex-col">
          <DialogTitle className="sr-only">{crop.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {crop.description}
          </DialogDescription>

          <div className="flex-grow overflow-y-auto">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6">
                <div className="relative mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 left-2 bg-white rounded-full"
                    onClick={() => crop.setIsModalOpen(false)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <img
                    src={crop.images[modalCurrentImage]}
                    alt={crop.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="flex space-x-2 overflow-x-auto">
                  {crop.images.map((image, index) => (
                    <button
                      key={image.slice(-5)}
                      onClick={() => setModalCurrentImage(index)}
                      className={`w-20 h-20 rounded-md cursor-pointer focus:outline-none ${
                        modalCurrentImage === index
                          ? "border-2 border-teal-600"
                          : ""
                      }`}
                      aria-label={`Thumbnail ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${crop.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-teal-800">
                      {crop.title}
                    </h2>
                    <h3 className="text-xl text-teal-600">{crop.product}</h3>
                  </div>
                  {userId !== crop.owner._id &&
                    !location.pathname.includes("favorites") && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`${
                          isLiked ? "text-red-500" : "text-gray-500"
                        }`}
                        onClick={() => likeCrop()}
                      >
                        <Heart
                          className={`h-6 w-6 ${isLiked ? "fill-current" : ""}`}
                        />
                      </Button>
                    )}
                </div>
                <div className="flex items-center justify-between space-x-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {crop.city} - {crop.department}
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`bg-${badgeColor}-100 text-${badgeColor}-800 rounded-md py-1 px-2`}
                  >
                    {crop.category}
                  </Badge>
                </div>
                <div className="mb-4">
                  <span className="text-xl font-semibold text-cosco-500">
                    {crop.price.toLocaleString("es-CO")} COP / {crop.massUnit}
                  </span>
                </div>
                <hr className="mb-4" />
                <p className="text-gray-700 mb-4">{crop.description}</p>
                <hr className="mb-4" />
                <div className="space-y-2 mb-4">
                  <p className="text-base text-cosco-700">
                    <strong className="text-base font-semibold text-cosco-800">
                      Stock disponible:
                    </strong>{" "}
                    {crop.stock} {plurales(crop.massUnit)}
                  </p>
                  <p className="text-base text-cosco-700">
                    <strong className="text-base font-semibold text-cosco-800">
                      Se publicó el:
                    </strong>{" "}
                    {formattedDate}
                  </p>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="h-8 w-8 bg-cosco-100">
                    <AvatarImage src={crop.owner.image} alt="CabanaJuan" />
                  </Avatar>{" "}
                  <div>
                    <p className="font-semibold">{`${crop.owner.firstName} ${crop.owner.lastName}`}</p>
                    <p className="text-sm text-gray-600">
                      {userId !== crop.owner._id
                        ? "propietario"
                        : "Eres el propietario"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border-t">
            {userId !== crop.owner._id && (
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => openSellerContactModal()}
              >
                Contactar con el vendedor
              </Button>
            )}
            {location.pathname.includes("my-crops") &&
              userId === crop.owner._id && (
                <Button
                  variant="destructive"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => setIsModalDeletePost(true)}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Eliminar cosecha
                </Button>
              )}
          </div>
        </DialogContent>
      </Dialog>
      <ContactSellerModal
        {...{ ...crop, isModalContactOpen, setIsModalContactOpen }}
      />
      <ConfirmationDeletePost
        {...{ isModalDeletePost, setIsModalDeletePost, postId: crop._id }}
      />
    </>
  );
};

export default CropModal;