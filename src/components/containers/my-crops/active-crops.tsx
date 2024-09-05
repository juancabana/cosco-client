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

interface Publication {
  id: number;
  title: string;
  product: string;
  price: string;
  unit: string;
  image: string;
}

const existingPublications: Publication[] = [
  {
    id: 1,
    title: "Mango Tommy",
    product: "Mango",
    price: "5000",
    unit: "kg",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Aguacate Hass",
    product: "Aguacate",
    price: "8000",
    unit: "kg",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Naranja Valencia",
    product: "Naranja",
    price: "3000",
    unit: "kg",
    image: "/placeholder.svg",
  },
];

interface Props {
  setActiveTab: (tab: string) => void;
}

const CardCrop: FC<Publication> = ({ title, image, price, unit, product }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {/* <Image src={pub.image} alt={pub.title} width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" /> */}
      <img src="./../../../assets/img_login.jpg" alt="" />
      <p className="text-sm text-muted-foreground">Producto: {product}</p>
      <p className="text-sm font-semibold mt-2">
        Precio: {price} COP / {unit}
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

const CardUpload: FC<Props> = ({ setActiveTab}) => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle className="text-cosco-850">No tienes cosechas publicadas</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-cosco-750">
        Aquí aparecerán tus cosechas una vez que las publiques.
      </p>
    </CardContent>
    <CardFooter>
      <Button className="bg-cosco-500 hover:bg-cosco-550" onClick={() => setActiveTab("nueva")}>
        <Plus className="mr-2 h-4 w-4" />
        Publicar tu primera cosecha
      </Button>
    </CardFooter>
  </Card>
);

const ActiveCrops: FC<Props> = ({ setActiveTab }) => {
  const [hasCosechas, setHasCosechas] = useState(false);
  return (
    <>
      {hasCosechas ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {existingPublications.map((pub) => (
            <CardCrop key={pub.id} {...pub} />
          ))}
        </div>
      ) : (
        <CardUpload setActiveTab={setActiveTab}/>
      )}
    </>
  );
};

export default ActiveCrops;
