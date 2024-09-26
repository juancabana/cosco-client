import React, { type FC } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import useGetUserCropsQuery from "@/hooks/querys/useGetUserCropsQuery";
import { ProductCard } from "@/components/ui/product-card";

interface Props {
  setActiveTab: (tab: string) => void;
}

const CardUpload: FC<Props> = ({ setActiveTab }) => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle className="text-cosco-850">
        No tienes productos publicados
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-cosco-750">
        Aquí aparecerán tus productos una vez que los publiques.
      </p>
    </CardContent>
    <CardFooter>
      <Button
        className="bg-cosco-500 hover:bg-cosco-550"
        onClick={() => setActiveTab("nueva")}
      >
        <Plus className="mr-2 h-4 w-4" />
        Publicar tu primer producto
      </Button>
    </CardFooter>
  </Card>
);

const ActiveCrops: FC<Props> = ({ setActiveTab }) => {
  const { data } = useGetUserCropsQuery();

  return (
    <>
      {data?.length && data.length > 0 ? (
        <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {data.reverse().map((crop) => (
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
