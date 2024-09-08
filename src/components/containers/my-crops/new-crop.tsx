import React, { type FC } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import UploadForm from "./upload-form";

interface Props {
  setActiveTab: (tab: string) => void;
}

const NewCrop: FC<Props> = ({ setActiveTab }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-cosco-850">Nueva Publicación</CardTitle>
      </CardHeader>
      <CardContent>
        <UploadForm setActiveTab={setActiveTab} />
      </CardContent>
    </Card>
  );
};

export default NewCrop;
