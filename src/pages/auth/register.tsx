import React, { type FC } from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";

import Register from "@/components/containers/register";
import isSSR from "@/utils/isSSR";
import { useAuth } from "@/providers/auth";
import Seo from "@/layout/seo";

export const Head: HeadFC = () => (
  <Seo
    title="Registrarse"
    description="Regístrate y publica tus cosechas colombianas en un solo lugar, conoce a los productores y sus productos sin intermediarios"
  />
);

const RegisterPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (user && isLogged) {
    navigate("/publications");
    return null;
  }

  if (!isSSR()) return <Register />;

  return null;
};

export default RegisterPage;
