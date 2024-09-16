import React, { useState, type FC } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Badge } from "@/components/shadcn/ui/badge";
import { Separator } from "@/components/shadcn/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import type { UserCropResponse } from "@/services/actions";
import plurales from "plurales";

interface IsOpen {
  isModalContactOpen: boolean;
  setIsModalContactOpen: (isOpen: boolean) => void;
}

const ContactSellerModal: FC<UserCropResponse & IsOpen> = ({
  isModalContactOpen,
  setIsModalContactOpen,
  category,
  city,
  createdAt,
  department,
  description,
  images,
  massUnit,
  owner,
  price,
  product,
  stock,
  title,
}) => {
  const [mostrarTelefono, setMostrarTelefono] = useState(false);
  const [imagenActual, setImagenActual] = useState(0);

  const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent(
      `Hola ${owner.firstName}, estoy interesado en tu publicación de "${title}". ¿Podrías darme más información?`
    );
    window.open(`https://wa.me/${owner.phoneNumber}?text=${mensaje}`, "_blank");
  };

  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % images.length);
  };

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev - 1 + images.length) % images.length);
  };

  const enviarCorreoElectronico = () => {
    const subject = encodeURIComponent(`Consulta sobre ${title} en COSCO`);
    const body = encodeURIComponent(
      `Hola,\n\nEstoy interesado en el producto ${title} de la categoría ${category}.\n\nGracias.`
    );
    const mailtoLink = `mailto:${owner.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <Dialog open={isModalContactOpen} onOpenChange={setIsModalContactOpen}>
      <DialogContent className="max-w-full h-screen p-0 bg-[#F1F5F9]">
        <ScrollArea className="h-full w-full p-6">
          <div className="container mx-auto">
            <div className="flex justify-end mb-4">
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-cosco-550 hover:bg-[#E2E8F0]"
                >
                  <X className="h-6 w-6" />
                </Button>
              </DialogTrigger>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 shadow-md">
                <CardHeader className="border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-2 border-[#0D7D7E]">
                      <AvatarImage
                        src={owner.image}
                        alt={`${owner.firstName} ${owner.lastName}`}
                      />
                      <AvatarFallback className="bg-[#0D7D7E] text-white text-2xl">
                        {owner.firstName[0]}
                        {owner.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
                      <CardTitle className="text-3xl text-cosco-600">
                        {owner.firstName} {owner.lastName}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        <Badge
                          variant="secondary"
                          className="bg-[#E2E8F0] text-[#0D7D7E]"
                        >
                          Vendedor
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-cosco-650">
                      Información de contacto
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-5 w-5 text-cosco-600" />
                          <span>{owner.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-5 w-5 text-cosco-600" />
                          {mostrarTelefono ? (
                            <span>{owner.phoneNumber}</span>
                          ) : (
                            <Button
                              variant="link"
                              className="p-0 h-auto text-cosco-600"
                              onClick={() => setMostrarTelefono(true)}
                            >
                              Mostrar teléfono
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-cosco-600" />
                          <span>
                            {city}, {department}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-cosco-600" />
                          <span>
                            Publicado el {formatearFecha(createdAt.toString())}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-2 text-cosco-650">
                      Descripción del vendedor
                    </h3>
                    <p className="text-muted-foreground">
                      {owner.description ||
                        "El vendedor no ha proporcionado una descripción."}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button
                    className="w-full sm:w-auto bg-cosco-500 hover:bg-cosco-550 text-white"
                    onClick={abrirWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Contactar por
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-[#0D7D7E] text-[#0D7D7E] hover:text-cosco-700 hover:bg-[#E2E8F0]"
                    onClick={enviarCorreoElectronico}
                  >
                    <Mail className="mr-2 h-4 w-4" /> Enviar correo electrónico
                  </Button>
                </CardFooter>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-cosco-650">{title}</CardTitle>
                    {/* <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cosco-550">
                      <Heart className="h-6 w-6" />
                    </Button> */}
                  </div>
                  <CardDescription>{category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={images[imagenActual]}
                      alt={`${title} - Imagen ${imagenActual + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
                          onClick={imagenAnterior}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
                          onClick={siguienteImagen}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                  </div>
                  <div className="flex justify-center space-x-2">
                    {images.map((_, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className={`w-2 h-2 rounded-full p-0 ${
                          index === imagenActual
                            ? "bg-[#0D7D7E]"
                            : "bg-gray-300"
                        }`}
                        onClick={() => setImagenActual(index)}
                      />
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-[#0D7D7E]">
                    {product}
                  </h2>
                  <p className="text-sm text-muted-foreground">{description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#0D7D7E]">
                      ${price} / {massUnit}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-[#E2E8F0] text-[#0D7D7E]"
                    >
                      Disponible: {stock} {plurales(massUnit)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSellerModal;
