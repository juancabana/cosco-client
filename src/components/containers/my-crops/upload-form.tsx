import React, { useEffect, useState, type FC } from "react";
import { Trash2, RefreshCw, Plus, Upload } from "lucide-react";
import { Input } from "@/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { Button } from "@/components/shadcn/ui/button";
import { Label } from "@/components/shadcn/ui/label";
import useUploadCropMutation from "@/hooks/mutations/useUploadCropMutation";
import { useAuth } from "@/providers/auth";
import ScreenLoader from "@/components/ui/screenLoader";
import { useErrorModal } from "@/components/ui/ErrorModal";
import locations from "./locations.json";

interface LocationType {
  id: number;
  departamento: string;
  ciudades: string[];
}

const typedLocations: LocationType[] = locations;

const tiposProducto = ["Fruta", "Verdura", "Grano", "Otro"];

const initialFormData = {
  title: "",
  product: "",
  category: "",
  city: "",
  department: "",
  price: 0,
  massUnit: "",
  description: "",
  stock: 0,
};

interface Props {
  setActiveTab: (tab: string) => void;
}

const UploadForm: FC<Props> = ({ setActiveTab }) => {
  const { mutate, isPending, error, data } = useUploadCropMutation();
  const { openModal, RenderedModal } = useErrorModal();
  const [ciudades, setCiudades] = useState<string[]>([]);

  const { user } = useAuth();
  const [isFormValid, setIsFormValid] = useState(false);

  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "city") {
      setFormData((prev) => ({ ...prev, department: "" }));
    }
  };

  const utf8String = (str: string) => decodeURIComponent(str);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImagesPromises = Array.from(files).map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file); // Convierte la imagen a base64
        });
      });

      Promise.all(newImagesPromises)
        .then((newImages) => {
          setImages((prev) => [...prev, ...newImages].slice(0, 5)); // Limita a 5 imágenes
        })
        .catch((error) => {
          console.error("Error al leer las imágenes", error);
        });
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      mutate({ ...formData, images, id: user?._id! });
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setImages([]);
  };

  // Función para manejar cambios en los selects
  const handleSelectChangeLocation = (
    field: "city" | "department",
    value: string
  ) => {
    if (field === "city") {
      const department =
        typedLocations.find((d) => d.ciudades.includes(value))?.departamento ||
        "";
      setFormData({ ...formData, city: value, department });
      // console.log(value);
    } else {
      setFormData({ ...formData, department: value });
      setCiudades(
        typedLocations.find((d) => utf8String(d.departamento) === value)
          ?.ciudades || []
      );
    }
  };

  useEffect(() => {
    const {
      title,
      product,
      city,
      department,
      price,
      category,
      massUnit,
      stock,
      description,
    } = formData;
    const isValid =
      title !== "" &&
      product !== "" &&
      category !== "" &&
      city !== "" &&
      department !== "" &&
      price !== 0 &&
      massUnit !== "" &&
      stock !== 0 &&
      description !== "" &&
      images.length > 0;
    setIsFormValid(isValid);
  }, [formData, images]);

  useEffect(() => {
    if (error) {
      openModal();
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      resetForm();
      setActiveTab("publicaciones");
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 transition-all hover:bg-gray-100">
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="images"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <Upload className="h-12 w-12 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">
                Sube hasta 5 imágenes
              </span>
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          {images.length === 0 && (
            <p className="text-sm text-red-500">
              Se requiere al menos una imagen
            </p>
          )}
          {images.length === 5 && (
            <p className="text-sm text-yellow-500">
              Has alcanzado el límite máximo de 5 imágenes
            </p>
          )}
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Nombre del producto</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="product">Producto</Label>
              <Input
                id="product"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Tipo producto</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleSelectChange("category", value)}
                required
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {tiposProducto.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="department">Departamento</Label>
              <Select
                value={formData.department}
                onValueChange={(value) =>
                  handleSelectChangeLocation("department", value)
                }
                required
              >
                <SelectTrigger id="department">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {typedLocations.map((department) => (
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

            <div>
              <Label htmlFor="city">Departamento</Label>
              <Select
                value={formData.city}
                onValueChange={(value) =>
                  handleSelectChangeLocation("city", value)
                }
                disabled={!formData.department}
                required
              >
                <SelectTrigger id="city">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {formData.department &&
                    ciudades.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Precio</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>{" "}
            <div>
              <Label htmlFor="massUnit">Unidad</Label>
              <Select
                value={formData.massUnit}
                onValueChange={(value) => handleSelectChange("massUnit", value)}
                required
              >
                <SelectTrigger id="massUnit">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="unidad">unidad</SelectItem>
                  <SelectItem value="arroba">arroba</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Descripción del producto</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={resetForm}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Resetear formulario
        </Button>
        <Button
          type="submit"
          disabled={!isFormValid}
          className={`bg-cosco-500 ${isFormValid && "hover:bg-cosco-550"}`}
        >
          <Plus className="mr-2 h-4 w-4" />
          Añadir publicación
        </Button>
      </div>
      <ScreenLoader isVisible={isPending} />
      <RenderedModal
        title="¡Ups!"
        errorMessage="Algo salió mal, por favor inténtalo de nuevo"
      />
    </form>
  );
};

export default UploadForm;
