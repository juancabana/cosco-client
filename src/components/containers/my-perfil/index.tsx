import React, { type FC } from "react";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import MyPerfilForm from "./MyPerfilForm";

const MyPerfil: FC = () => (
  <div className="container mx-auto px-4 py-8">
    <Card className="max-w-2xl mx-auto p-0 md:p-4">
      <CardHeader>
        <CardTitle className="text-2xl text-cosco-primary">Mi perfil</CardTitle>
      </CardHeader>
      <MyPerfilForm />
    </Card>
  </div>
);

export default MyPerfil;
