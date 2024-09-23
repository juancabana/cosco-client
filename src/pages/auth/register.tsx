import React, { type FC } from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";

import Register from "@/components/containers/register";
import isSSR from "@/utils/isSSR";
import { useAuth } from "@/providers/auth";
import Seo from "@/layout/seo";

export const Head: HeadFC = () => (
  <Seo
    title="Regístrate en COSCO"
    description="Regístrate en COSCO y comienza a vender tus productos agrícolas directamente a compradores. Únete a nuestra comunidad y apoya el comercio justo entre campesinos y consumidores."
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
