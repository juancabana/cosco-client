import React, { useState, useRef, type FC } from "react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
// import { Input } from "@/components/shadcn/ui/input"
// import { Label } from "@/components/shadcn/ui/label";
// import { Textarea } from "@/components/shadcn/ui/textarea"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
// import { Camera } from "lucide-react";
import { toast } from "@/components/shadcn/ui/use-toast";
import { TextField } from "@/components/ui/textField";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

interface FormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
}

const MyPerfil: FC = () => {
  const methods = useForm<FormValues>();

  // const [user, setUser] = useState({
  //   firstName: "Juan",
  //   middleName: "David",
  //   lastName: "Cabana",
  //   secondLastName: "Trejos",
  //   email: "juan@example.com",
  //   phone: "+57 300 123 4567",
  //   bio: "Agricultor apasionado por los cultivos orgánicos y la sostenibilidad.",
  //   image: "/placeholder.svg",
  // });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setUser((prevUser) => ({ ...prevUser, [name]: value }));
  // };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      // setUser((prevUser) => ({ ...prevUser, image: reader.result as string }));
      toast({
        title: "Éxito",
        description: "La imagen de perfil ha sido actualizada",
      });
    };
    reader.readAsDataURL(file);
  };

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

  // const triggerFileInput = () => {
  //   fileInputRef.current?.click();
  // };
  // console.log(methods.formState.errors)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-0 md:p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Mi Perfil</CardTitle>
        </CardHeader>
        <FormProvider {...methods}>
          <CardContent>
            <form onSubmit={methods.handleSubmit(onSubmit) as Fn}>
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage
                      src="../../../assets/img_section1.png"
                      className="pb-0"
                      // alt={`${user.firstName} ${user.lastName}`}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <TextField
                      name="firstName"
                      label="Primer nombre"
                      required
                      pattern={{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "El e-mail no es valido",
                      }}
                      placeholder="Juan"
                      className="!mt-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <TextField
                      name="middleName"
                      label="Segundo nombre"
                      required
                      className="!mt-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <TextField
                      name="lastName"
                      label="Primer apellido"
                      required
                      className="!mt-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <TextField
                      name="secondLastName"
                      label="Segundo apellido"
                      required
                      className="!mt-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <TextField name="email" label="Correo electrónico" required />
                </div>
                <div className="space-y-2">
                  <TextField name="phone" label="Teléfono" required />
                </div>
                <div className="space-y-2">
                  <TextField name="bio" label="Biografía" required />
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
      </Card>
    </div>
  );
};

export default MyPerfil;
