import React, { type FC } from "react";

import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import MyPerfil from "@/components/containers/my-perfil";
import Layout from "@/layout";

export const Head: HeadFC = () => <Seo />;

const Perfil: FC<PageProps> = () => {
  return (
    <Layout>
      <MyPerfil />
    </Layout>
  );
};

export default Perfil;
