import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";

export const Head: HeadFC = () => <Seo />;

const AboutUsPage: FC<PageProps> = () => (
  <Layout>
    About Us page
  </Layout>
);

export default AboutUsPage;
