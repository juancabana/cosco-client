import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { ProductCard } from "@/components/ui/product-card";
import useGetAllFavoriteCropsQuery from "@/hooks/querys/useGetFavoriteCrops";
import { useAuth } from "@/providers/auth";
import { navigate } from "gatsby";
import { Plus } from "lucide-react";
import React, { type FC } from "react";

const CardUpload: FC = () => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle className="text-cosco-850">
        No tienes publicaciones favoritas
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-cosco-750">
        Aquí aparecerán tus publicaciones favoritas una vez que las agregues.
      </p>
    </CardContent>
    <CardFooter>
      <Button
        className="bg-cosco-500 hover:bg-cosco-550"
        onClick={() => navigate('/publications')}
      >
        <Plus className="mr-2 h-4 w-4" />
        Buscar publicaciones
      </Button>
    </CardFooter>
  </Card>
);

const Favorites: FC = () => {
  const {userId} = useAuth();
  const { data } = useGetAllFavoriteCropsQuery(userId ?? '');

  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 py-8">
    {data && data.length > 0 ? (
      <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {data.map((crop) => (
          <ProductCard key={crop._id} {...crop} />
        ))}
      </div>
    ) : <CardUpload />}
  </div>
  );
};

export default Favorites;
