import React, { type FC } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import UploadForm from "./upload-form";

const NewCrop: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-cosco-850">Nueva Publicación</CardTitle>
      </CardHeader>
      <CardContent>
        <UploadForm />
      </CardContent>
    </Card>
  );
};

export default NewCrop;
