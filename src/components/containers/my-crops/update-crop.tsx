"use client";

import React, { useState, useEffect, type FC } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Textarea } from "@/components/shadcn/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { X, Upload, Edit2 } from "lucide-react";
import type { UserCropResponse } from "@/services/actions";
import categories from "@/assets/categories.json";
import locations from "@/assets/locations.json";
import massUnits from "@/assets/mass-unit.json";
import useUpdateCropMutation from "@/hooks/mutations/useUpdateCropMutation";

const utf8String = (str: string) => decodeURIComponent(str);

const UpdateCrop: FC<UserCropResponse> = (crop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>(crop.images);
  const [title, setTitle] = useState(crop.title);
  const [productName, setProductName] = useState(crop.product);
  const [productType, setProductType] = useState(crop.category);
  const [department, setDepartment] = useState(crop.department);
  const [city, setCity] = useState(crop.city);
  const [price, setPrice] = useState(crop.price);
  const [unit, setUnit] = useState(crop.massUnit);
  const [stock, setStock] = useState(crop.stock);
  const [description, setDescription] = useState(crop.description);
  const [isFormValid, setIsFormValid] = useState(false);
  const [ciudades, setCiudades] = useState<string[]>(
    locations.find((d) => utf8String(d.departamento) === department)
      ?.ciudades || []
  );
  const [s3Images, setS3Images] = useState<string[]>(crop.images);
  const [localImages, setLocalImages] = useState<string[]>([]);

  const { mutate, isSuccess } = useUpdateCropMutation();

  useEffect(() => {
    const checkFormValidity = () => {
      return (
        images.length > 0 &&
        title.trim() !== "" &&
        productName.trim() !== "" &&
        productType !== "" &&
        department !== "" &&
        city !== "" &&
        price > 0 &&
        unit !== "" &&
        stock > 0 &&
        description.trim() !== ""
      );
    };

    setIsFormValid(checkFormValidity());
  }, [
    images,
    title,
    productName,
    productType,
    department,
    city,
    price,
    unit,
    stock,
    description,
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImagesPromises = Array.from(files).map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      Promise.all(newImagesPromises)
        .then((newImages) => {
          setLocalImages((prev) => [...prev, ...newImages]);
          setImages((prev) => [...prev, ...newImages]);
        })
        .catch((err) => console.error(err));
    }
  };

  // Cerrar el diálogo de edición de cosecha cuando se haya completado la actualización de la cosecha
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
    }
  }, [isSuccess]);

  const handleSelectChangeLocation = (
    field: "city" | "department",
    value: string
  ) => {
    if (field === "city") {
      setCity(value);
    } else {
      setDepartment(value);
      setCity("");
      setCiudades(
        locations.find((d) => utf8String(d.departamento) === value)?.ciudades ||
          []
      );
    }
  };

  const isS3Image = (url: string | undefined) => url?.includes("amazonaws");

  const handleRemoveS3Image = (index: number) => {
    setS3Images((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveLocalImage = (index: number) => {
    index = index - s3Images.length;
    setLocalImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeImage = (index: number) => {
    const image = images[index];
    if (isS3Image(image)) {
      handleRemoveS3Image(index);
    } else {
      handleRemoveLocalImage(index);
    }
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const imagesToSubmit = [...s3Images, ...localImages];
    mutate({
      id: crop._id,
      title,
      product: productName,
      category: productType,
      department,
      city,
      price,
      massUnit: unit,
      stock,
      description,
      images: imagesToSubmit,
    });
  };

  useEffect(() => {
    setIsFormValid(false);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Edit2 className="mr-2 h-4 w-4" />
          Editar Cosecha
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] w-full h-full sm:h-[90vh] flex flex-col p-0">
        <div className="flex-shrink-0 flex justify-between items-center p-4 border-b">
          <DialogTitle className="text-lg font-semibold">
            Editar Cosecha
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="rounded-full hover:bg-gray-100"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-grow overflow-hidden"
        >
          <div className="flex-grow overflow-y-auto space-y-6 p-4">
            <div className="space-y-2">
              <Label
                htmlFor="images"
                className="text-sm font-medium text-gray-700"
              >
                Imágenes (máximo 5)
              </Label>
              <div className="flex flex-wrap gap-4">
                {s3Images.concat(localImages).map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt={`Cosecha ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-2 rounded-full h-6 w-6 shadow-md"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                {s3Images.concat(localImages).length < 5 && (
                  <Label
                    htmlFor="image-upload"
                    className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
                  >
                    <Upload className="h-6 w-6 text-gray-400" />
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </Label>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Título de la publicación
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="productName"
                  className="text-sm font-medium text-gray-700"
                >
                  Nombre del producto
                </Label>
                <Input
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="productType"
                  className="text-sm font-medium text-gray-700"
                >
                  Categoria del producto
                </Label>
                <Select
                  value={productType}
                  onValueChange={(value) => setProductType(value)}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((tipo) => (
                      <SelectItem key={tipo.category} value={tipo.category}>
                        {tipo.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="department"
                  className="text-sm font-medium text-gray-700"
                >
                  Departamento
                </Label>
                <Select
                  value={department}
                  onValueChange={(value) =>
                    handleSelectChangeLocation("department", value)
                  }
                  required
                >
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((department) => (
                      <SelectItem
                        key={department.id}
                        value={department.departamento}
                      >
                        {department.departamento}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  Ciudad o municipio
                </Label>
                <Select
                  value={city}
                  onValueChange={(value) =>
                    handleSelectChangeLocation("city", value)
                  }
                  disabled={!department}
                  required
                >
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {department &&
                      ciudades.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Precio
                </Label>
                <div className="flex">
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="rounded-r-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                  <Select value={unit} onValueChange={setUnit}>
                    <SelectTrigger className="rounded-l-none focus:ring-1 focus:ring-primary focus:border-primary">
                      <SelectValue placeholder="Unidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {massUnits.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="stock"
                  className="text-sm font-medium text-gray-700"
                >
                  Stock disponible
                </Label>
                <Input
                  id="stock"
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                  className="focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Descripción del producto
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div className="flex-shrink-0 p-4 border-t">
            <Button type="submit" className="w-full" disabled={!isFormValid}>
              Guardar Cambios
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCrop;
