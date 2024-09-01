import React, { useState, type FC, useEffect } from "react";
import { CardContent } from "@/components/shadcn/ui/card";
// import { Input } from "@/components/shadcn/ui/input"
// import { Label } from "@/components/shadcn/ui/label";
// import { Textarea } from "@/components/shadcn/ui/textarea"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { toast } from "@/components/shadcn/ui/use-toast";
import { TextField } from "@/components/ui/textField";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { useAuth } from "@/providers/auth";

interface FormValues {
  image: string | ArrayBuffer | null;
  bio: string | null;
  firstName: string | null;
  secondName: string | null;
  lastName: string | null;
  secondLastName: string | null;
}

const MyPerfilForm: FC = () => {
  const methods = useForm<FormValues>();
  const { user } = useAuth();

  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setFile(target.files![0]!);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    // Aquí iría la lógica para enviar los datos actualizados al servidor
    alert("Datos actualizados: " + JSON.stringify(data, null, 2));
    console.log("Datos actualizados:", data);
    // toast({
    //   title: "Perfil actualizado",
    //   description: "Tus cambios han sido guardados con éxito",
    // });
  };

  const getInitials = () => "Juan"[0] + "Cabana"[0]!.toUpperCase();

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = (e) => setFileDataURL(e.target!.result);

    fileReader.readAsDataURL(file);

    toast({
      title: "Imagen cargada",
      description: "Tu nueva foto de perfil ha sido cargada con éxito",
    });

    return () => {
      if (fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <FormProvider {...methods}>
      <CardContent>
        <form onSubmit={methods.handleSubmit(onSubmit) as Fn}>
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage
                  src={(fileDataURL as string) ?? user?.image}
                  className="pb-0"
                  alt="JC"
                />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
              <TextField
                name="image"
                type="file"
                label="Cambiar foto"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                className="!mt-2"
              />
            </div>
            <div className="space-y-2">
              <TextField
                name="bio"
                label="Biografía"
                defaultValue={user?.description}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <TextField
                  name="firstName"
                  label="Primer nombre"
                  placeholder="Juan"
                  defaultValue={user?.firstName}
                  className="!mt-2"
                />
              </div>
              <div className="space-y-2">
                <TextField
                  name="secondName"
                  label="Segundo nombre"
                  defaultValue={user?.secondName}
                  className="!mt-2"
                />
              </div>
              <div className="space-y-2">
                <TextField
                  name="lastName"
                  label="Primer apellido"
                  defaultValue={user?.lastName}
                  className="!mt-2"
                />
              </div>
              <div className="space-y-2">
                <TextField
                  name="secondLastName"
                  label="Segundo apellido"
                  defaultValue={user?.secondLastName}
                  className="!mt-2"
                />
              </div>
            </div>
            <div className="space-y-2">
              <TextField
                name="email"
                label="Correo electrónico"
                placeholder={user?.email}
                disabled
              />
            </div>
            <div className="space-y-2">
              <TextField
                name="phone"
                placeholder={user?.phoneNumber}
                label="Teléfono"
                disabled
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-10 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cosco-500 rounded-md hover:bg-cosco-400 focus:outline-none focus:bg-cosco-400 focus:ring focus:ring-cosco-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Guardar cambios
          </button>
        </form>
      </CardContent>
    </FormProvider>
  );
};

export default MyPerfilForm;
