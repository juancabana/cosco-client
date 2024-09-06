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
import { ProductCard } from "@/components/ui/product-card";

interface Props {
  setActiveTab: (tab: string) => void;
}

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
        <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.map((crop) => (
            <ProductCard key={crop._id} {...crop} />
          ))}
        </div>
      ) : (
        <CardUpload setActiveTab={setActiveTab} />
      )}
    </>
  );
};

export default ActiveCrops;
