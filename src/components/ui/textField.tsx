import React, { memo, type FC, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { useFormContext, type ValidationRule } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  required?: ValidationRule<boolean>;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  rows?: number; // Nueva propiedad para el número de filas en textarea
  textarea?: boolean; // Nueva propiedad para determinar si es un textarea
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
  rows,
  textarea = false, 
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mt-6">
      <label htmlFor={name} className="block mb-2 text-sm text-gray-600">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...register(name, {
            required: required && "Este campo es requerido",
            minLength,
            maxLength,
            pattern,
          })}
          id={name}
          placeholder={placeholder}
          rows={rows}
          className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-green-400 focus:border-green-400 focus:outline-none focus:ring focus:ring-opacity-40 ${
            errors[name]?.message &&
            "!ring-rose-400 !border-rose-400 !outline-none !ring !ring-opacity-40"
          }`}
        />
      ) : (
        <input
          {...register(name, {
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
          }`}
        />
      )}
      {errors[name]?.message && (
        <span className="text-sm text-red-400">
          {errors[name]?.message.toString()}
        </span>
      )}
    </div>
  );
};

export default memo(TextField);
