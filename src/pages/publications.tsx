import React, { type FC } from "react";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import Publications from "@/components/containers/publications";

import type { HeadFC, PageProps } from "gatsby";
import isSSR from "@/utils/isSSR";

export const Head: HeadFC = () => (
  <Seo
    title="Publicaciones de Productos Agrícolas | COSCO"
    description="Explora las publicaciones de productos agrícolas disponibles en COSCO. Filtra por ubicación, tipo de producto y encuentra lo que necesitas directamente de los campesinos."
  />
);

const PublicationsPage: FC<PageProps> = () =>
  !isSSR() && (
    <Layout>
      <Publications />
    </Layout>
  );

export default PublicationsPage;
