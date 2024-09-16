import React, { type FC } from "react";

import { navigate, type HeadFC, type PageProps } from "gatsby";
import Seo from "@/layout/seo";
import MyPerfil from "@/components/containers/my-perfil";
import Layout from "@/layout";
import { useAuth } from "@/providers/auth";
import isSSR from "@/utils/isSSR";

export const Head: HeadFC = () => (
  <Seo
    title="Edita tu perfil"
    description="Edita tu perfil para que puedas tener una mejor experiencia en la plataforma y te puedan conocer mejor"
  />
);

const Perfil: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (isSSR()) return null;

  if (!user && !isLogged) {
    navigate("/auth/login");
    return null;
  }

  return (
    <Layout>
      <MyPerfil />
    </Layout>
  );
};

export default Perfil;
