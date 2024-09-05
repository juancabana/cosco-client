import Publications from "@/components/containers/publications";
import Layout from "@/layout";
import Seo from "@/layout/seo";
import type { HeadFC, PageProps } from "gatsby";
import React, { type FC } from "react";

export const Head: HeadFC = () => <Seo />;

const publicationsPage: FC<PageProps> = () => (
  <Layout>
    <Publications />
  </Layout>
);

export default publicationsPage;
