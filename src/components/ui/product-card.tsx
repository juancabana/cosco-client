import React, { useState, type FC } from "react";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/ui/card";
import { Badge } from "@/components/shadcn/ui/badge";
import type { UserCropResponse } from "@/services/actions";
import { useAuth } from "@/providers/auth";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import CropModal from "./crop-modal";
import categories from "@/assets/categories.json";

export const ProductCard: FC<UserCropResponse> = (crop) => {
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const badgeColor = categories.find(cat => cat.category === crop.category)?.color ?? 'gray'

  const nextImage = () =>
    setCurrentImageIndex(
      currentImageIndex === crop.images.length - 1 ? 0 : currentImageIndex + 1
    );

  const prevImage = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? crop.images.length - 1 : prevIndex - 1
    );

  return (
    <>
      <Card className="w-full max-w-sm overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 bg-cosco-100">
              <AvatarImage src={user?.image} alt="CabanaJuan" />
            </Avatar>{" "}
            <span className="font-semibold text-sm text-cosco-700">{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
          {/* <Button
          variant="ghost"
          size="icon"
          className={`transition-all duration-300 ${
            isLiked ? "text-red-500 scale-110" : "text-gray-500"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`${isLiked ? "fill-current" : ""}`} />
        </Button> */}
        </CardHeader>
        <div className="relative">
          <img
            src={crop.images[currentImageIndex]}
            alt={crop.title}
            className="w-full h-48 object-cover"
          />
          {crop.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4 text-gray-700" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full"
                onClick={() => nextImage()}
              >
                <ChevronRight className="h-4 w-4 text-gray-700" />
              </Button>
            </>
          )}
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold text-cosco-800">{crop.title}</h2>
          <p className="text-xs text-cosco-500">{crop.product}</p>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm text-cosco-650">
              {crop.city} - {crop.department}
            </span>
          </div>
          <div className="mt-1 flex justify-between items-center">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span className="text-sm text-cosco-650 w-full">
                {crop.price.toLocaleString("es-CO")} COP / {crop.massUnit}
              </span>
            </div>
            <Badge
              variant="secondary"
              // className={`bg-${badgeColor}-100 text-${badgeColor}-800 rounded-md py-1 px-2`}
              className={`bg-${badgeColor}-100 text-${badgeColor}-800 rounded-md py-1 px-2`}
            >
              {crop.category}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <div className="w-full flex justify-between items-center">
            <Button
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Mas información
            </Button>
            {/* {isPersonalPost && (
            <Button variant="outline" size="icon" className="ml-2 border-teal-600 text-teal-600">
              <Edit className="h-4 w-4" />
            </Button>
          )} */}
          </div>
        </CardFooter>
      </Card>
      <CropModal {...{ ...crop, isModalOpen, setIsModalOpen }} />
      {/* {isPersonalPost && (
          <Button
            variant="outline"
            size="icon"
            className="ml-2 border-teal-600 text-teal-600"
          >
            <Edit className="h-4 w-4" />
          </Button>
        )} */}
    </>
  );
};
