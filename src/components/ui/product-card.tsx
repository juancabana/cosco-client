import React, { useState, type FC } from "react";
import { Heart, ChevronLeft, ChevronRight, MapPin, Edit } from "lucide-react";
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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/shadcn/ui/avatar";
// type ProductCardProps = {
//     product: UserCropResponse;
//     // isPersonalPost?: boolean;
//   };

export const ProductCard: FC<UserCropResponse> = ({
  images,
  owner,
  title,
  product,
  city,
  department,
  price,
  massUnit,
  category,
}) => {
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className="w-full max-w-sm overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.image} alt="CabanaJuan" />
          </Avatar>{" "}
          <span className="font-semibold text-sm text-gray-700">{`${user?.firstName} ${user?.lastName}`}</span>
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
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {images.length > 1 && (
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
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4 text-gray-700" />
            </Button>
          </>
        )}
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{product}</p>
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span>
            {city} - {department}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">
            {price.toLocaleString("es-CO")} COP - {massUnit}
          </span>
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            {category}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="w-full flex justify-between items-center">
          <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
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
  );
};
