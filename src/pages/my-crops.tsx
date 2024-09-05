import React, { type FC } from "react";
import Seo from "@/layout/seo";

import type { HeadFC, PageProps } from "gatsby";
import MyCrops from "@/components/containers/my-crops";
import Layout from "@/layout";

export const Head: HeadFC = () => <Seo />;

const myCropsPage: FC<PageProps> = () => (
  <Layout>
    <MyCrops />
  </Layout>
);

export default myCropsPage;
