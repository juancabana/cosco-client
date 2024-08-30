import { Camera } from "lucide-react";
import React, { memo, type FC, type InputHTMLAttributes } from "react";
import { useFormContext, type ValidationRule } from "react-hook-form";
import { toast } from "@/components/shadcn/ui/use-toast";

interface Props {
  name: string;
  label: string;
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  required?: ValidationRule<boolean>;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  defaultValue?: string | number | null;
  className?: string;
  accept?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<Props> = ({
  label,
  name,
  placeholder,
  type = "text",
  required,
  pattern,
  maxLength,
  minLength,
  defaultValue,
  className,
  accept,
  onChange,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const saveImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      // Guarda la imagen en la carpeta de assets

      toast({
        title: "Éxito",
        description: "La imagen de perfil ha sido actualizada",
      });
    };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        // 5 MB en bytes
        toast({
          title: "Error",
          description: "La imagen no debe superar los 5MB",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }
      saveImage(file);
     
    }
    if (onChange) onChange(e);
  };

  return (
    <div className={`mt-6 ${className}`}>
      {type === "file" ? (
        <label
          htmlFor={name}
          className={`flex items-center justify-center w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md cursor-pointer focus:ring-green-400 focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40 hover:bg-gray-100 
            ${className}
            ${
              errors[name]?.message &&
              "!ring-rose-400 !border-rose-400 !outline-none !ring !ring-opacity-40"
            }
            `}
        >
          <Camera className="h-5 w-5 mr-2" />
          {label}
          <input
            {...register(name, {
              required: required && "Este campo es requerido",
            })}
            id={name}
            type={type}
            accept={accept}
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <>
          <label htmlFor={name} className="block mb-2 text-sm text-gray-600">
            {label}
          </label>
          <input
            {...register(name, {
              value: defaultValue,
              required: required && "Este campo es requerido",
              minLength,
              maxLength,
              pattern,
            })}
            id={name}
            type={type}
            placeholder={placeholder}
            className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-green-400 focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40 ${
              errors[name]?.message &&
              "!ring-rose-400 !border-rose-400 !outline-none !ring !ring-opacity-40"
            } `}
          />
          {errors[name]?.message && (
            <span className="text-sm text-red-400">
              {errors[name]?.message.toString()}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default memo(TextField);
