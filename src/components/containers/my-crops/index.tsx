import React, { useState, type FC } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import NewCrop from "./new-crop";
import ActiveCrops from "./active-crops";

const MyCrops: FC = () => {
  const [activeTab, setActiveTab] = useState("publicaciones");

  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 py-8">
      <h1 className="text-3xl xl:text-4xl font-bold text-primary mb-6 text-cosco-800">
        Mis productos
      </h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="publicaciones">Publicaciones activas</TabsTrigger>
          <TabsTrigger value="nueva">Nuevo producto</TabsTrigger>
        </TabsList>
        <TabsContent value="publicaciones">
          <ActiveCrops setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="nueva">
          <NewCrop setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyCrops;
