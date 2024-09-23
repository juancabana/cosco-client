import React, { type FC } from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";

import Login from "@/components/containers/login";
import isSSR from "@/utils/isSSR";
import { useAuth } from "@/providers/auth";
import Seo from "@/layout/seo";

export const Head: HeadFC = () => (
  <Seo
    title="Iniciar Sesión en COSCO"
    description="Accede a tu cuenta en COSCO para publicar, vender o comprar productos agrícolas de manera sencilla y rápida. Conéctate con compradores y vendedores de confianza."
  />
);

const LoginPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (user && isLogged) {
    navigate("/publications");
    return null;
  }

  if (!isSSR()) return <Login />;

  return null;
};

export default LoginPage;
