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
import useUpdateUserMutation from "@/hooks/mutations/useUpdateUserMutation";

interface FormValues {
  image: string | null;
  description: string | null;
  firstName: string | null;
  secondName: string | null;
  lastName: string | null;
  secondLastName: string | null;
}

const MyPerfilForm: FC = () => {
  const { user } = useAuth();
  const methods = useForm<FormValues>({
    defaultValues: {
      image: user?.image ?? null,
      description: user?.description ?? null,
      firstName: user?.firstName ?? null,
      secondName: user?.secondName ?? null,
      lastName: user?.lastName ?? null,
      secondLastName: user?.secondLastName ?? null,
    },
  });
  const { isDirty, dirtyFields } = methods.formState;

  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer | null>(
    null
  );

  const { mutate, isPending, error } = useUpdateUserMutation();

  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const file = target.files![0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setFileDataURL(result);
        methods.setValue("image", result, { shouldDirty: true }); // Aquí se notifica a RHF del cambio
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const dataToSubmit: Partial<FormValues> = {};
    Object.keys(dirtyFields).forEach((key) => {
      dataToSubmit[key as keyof FormValues] = data[key as keyof FormValues];
    });

    mutate({...dataToSubmit, _id: user!._id});
  };

  const getInitials = () => "Juan"[0] + "Cabana"[0]!.toUpperCase();

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = (e) => setFileDataURL(e.target!.result as string);

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

  useEffect(() => {
    if (user) {
      methods.reset({
        image: user.image,
        description: user.description,
        firstName: user.firstName,
        secondName: user.secondName,
        lastName: user.lastName,
        secondLastName: user.secondLastName,
      });
    }
  }, [user, methods]);

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
                name="description"
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
            disabled={!isDirty || isPending}
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
