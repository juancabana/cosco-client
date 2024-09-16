import React, { type FC } from "react";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import Publications from "@/components/containers/publications";

import type { HeadFC, PageProps } from "gatsby";
import isSSR from "@/utils/isSSR";

export const Head: HeadFC = () => (
  <Seo
    title="Cosechas colombianas"
    description="Encuentra las mejores cosechas colombianas directamente desde el campo, contacta directamente con el productor sin intermediarios"
  />
);

const PublicationsPage: FC<PageProps> = () =>
  !isSSR() && (
    <Layout>
      <Publications />
    </Layout>
  );

export default PublicationsPage;
