import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";

export const Head: HeadFC = () => <Seo />;

const ContactUsPage: FC<PageProps> = () => (
  <Layout>
    Contact Us page
  </Layout>
);

export default ContactUsPage;
