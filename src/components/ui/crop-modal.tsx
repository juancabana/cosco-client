import React, { useState, type FC } from "react";
import { Heart, ChevronLeft, MapPin } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import { Badge } from "@/components/shadcn/ui/badge";
import type { UserCropResponse } from "@/services/actions";
import { useAuth } from "@/providers/auth";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import categories from '@/assets/categories.json';

interface isOpen {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isOwner?: boolean;
}

const CropModal: FC<UserCropResponse & isOpen> = ({
  isModalOpen,
  setIsModalOpen,
  category,
  city,
  createdAt,
  department,
  description,
  images,
  massUnit,
  owner,
  price,
  product,
  stock,
  title,
  isOwner = false,
}) => {
  const { user } = useAuth();
  const [modalCurrentImage, setModalCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const formattedDate = format(new Date(createdAt), "d 'de' MMMM 'del' yyyy", {
    locale: es,
  });

  const badgeColor = categories.find(cat => cat.category === category)?.color ?? 'gray'

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-[900px] p-0">
        <DialogTitle className="hidden">{title}</DialogTitle>
        <DialogDescription className="hidden">{description}</DialogDescription>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6">
            <div className="relative mb-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 left-2 bg-white rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <img
                src={images[modalCurrentImage]}
                alt={title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {images.map((image, index) => (
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
                    alt={`${title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold text-teal-800">{title}</h2>
                <h3 className="text-xl text-teal-600">{product}</h3>
              </div>
              {isOwner && (
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${isLiked ? "text-red-500" : "text-gray-500"}`}
                  onClick={() => setIsLiked(!isLiked)}
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
                  {city} - {department}
                </span>
              </div>
              <Badge
                variant="secondary"
                className={`bg-${badgeColor}-100 text-${badgeColor}-800 rounded-md py-1 px-2`}
              >
                {category}
              </Badge>
            </div>
            <div className="mb-4">
              <span className="text-xl font-semibold text-cosco-500">
                {price.toLocaleString("es-CO")} COP / {massUnit}
              </span>
            </div>
            <hr className="mb-4" />
            <p className="text-gray-700 mb-4">{description}</p>
            <hr className="mb-4" />
            <div className="space-y-2 mb-4">
              <p className="text-base text-cosco-700">
                <strong className="text-base font-semibold text-cosco-800">
                  Stock disponible:
                </strong>{" "}
                {stock} {massUnit}
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
                <AvatarImage src={user?.image} alt="CabanaJuan" />
              </Avatar>{" "}
              <div>
                <p className="font-semibold">{`${user?.firstName} ${user?.lastName}`}</p>
                <p className="text-sm text-gray-600">Propietario</p>
              </div>
            </div>
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
              Contactar con el vendedor
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CropModal;
