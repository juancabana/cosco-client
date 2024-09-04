import React, { type FC } from "react";

import { navigate, type HeadFC, type PageProps } from "gatsby";
import Seo from "@/layout/seo";
import MyPerfil from "@/components/containers/my-perfil";
import Layout from "@/layout";
import { useAuth } from "@/providers/auth";

export const Head: HeadFC = () => <Seo />;

const Perfil: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

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
