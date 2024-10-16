import React, { type FC } from "react";
import Seo from "@/layout/seo";

import { navigate, type HeadFC, type PageProps } from "gatsby";
import MyCrops from "@/components/containers/my-crops";
import Layout from "@/layout";
import { useAuth } from "@/providers/auth";
import isSSR from "@/utils/isSSR";

export const Head: HeadFC = () => (
  <Seo
    title="Mis productos"
    description="Aquí podrás ver todos los productos que has subido a la plataforma"
  />
);

const MyCropsPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (isSSR()) return null;

  if (!user && !isLogged) {
    navigate("/auth/login");
    return null;
  }

  return (
    <Layout>
      <MyCrops />
    </Layout>
  );
};

export default MyCropsPage;
