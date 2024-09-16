import React, { type FC } from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";

import Login from "@/components/containers/login";
import isSSR from "@/utils/isSSR";
import { useAuth } from "@/providers/auth";
import Seo from "@/layout/seo";

export const Head: HeadFC = () => (
  <Seo
    title="Iniciar sesión"
    description="Inicia sesión y publica tus cosechas colombianas en un solo lugar, conoce a los productores y sus productos sin intermediarios"
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
