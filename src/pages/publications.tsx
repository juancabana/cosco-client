import React, { type FC } from "react";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import Publications from "@/components/containers/publications";

import type { HeadFC, PageProps } from "gatsby";

export const Head: HeadFC = () => <Seo />;

const publicationsPage: FC<PageProps> = () => (
  <Layout>
    <Publications />
  </Layout>
);

export default publicationsPage;
