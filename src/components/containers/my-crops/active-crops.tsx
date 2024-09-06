import React, { useState, type FC } from "react";
import { Plus, Edit, Eye } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import useGetUserCropsQuery from "@/hooks/querys/useGetUserCropsQuery";
import { useAuth } from "@/providers/auth";
import type { UserCropResponse } from "@/services/actions";

interface Props {
  setActiveTab: (tab: string) => void;
}

const CardCrop: FC<UserCropResponse> = ({
  title,
  price,
  massUnit,
  product,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {/* <Image src={pub.image} alt={pub.title} width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" /> */}
      <img src="./../../../assets/img_login.jpg" alt="" />
      <p className="text-sm text-muted-foreground">Producto: {product}</p>
      <p className="text-sm font-semibold mt-2">
        Precio: {price} COP / {massUnit}
      </p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline" size="sm">
        <Eye className="h-4 w-4 mr-2" />
        Ver
      </Button>
      <Button variant="outline" size="sm">
        <Edit className="h-4 w-4 mr-2" />
        Editar
      </Button>
    </CardFooter>
  </Card>
);

const CardUpload: FC<Props> = ({ setActiveTab }) => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle className="text-cosco-850">
        No tienes cosechas publicadas
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-cosco-750">
        Aquí aparecerán tus cosechas una vez que las publiques.
      </p>
    </CardContent>
    <CardFooter>
      <Button
        className="bg-cosco-500 hover:bg-cosco-550"
        onClick={() => setActiveTab("nueva")}
      >
        <Plus className="mr-2 h-4 w-4" />
        Publicar tu primera cosecha
      </Button>
    </CardFooter>
  </Card>
);

const ActiveCrops: FC<Props> = ({ setActiveTab }) => {
  const { userId } = useAuth();
  const { data } = useGetUserCropsQuery();

  return (
    <>
      {data?.length && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {data.map((crop) => (
            <CardCrop key={crop._id} {...crop} />
          ))}
        </div>
      ) : (
        <CardUpload setActiveTab={setActiveTab} />
      )}
    </>
  );
};

export default ActiveCrops;
