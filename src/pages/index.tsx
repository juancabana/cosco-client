import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import ContentMain from "@/components/containers/contentMain";

export const Head: HeadFC = () => <Seo />;

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <ContentMain />
  </Layout>
);

export default IndexPage;
