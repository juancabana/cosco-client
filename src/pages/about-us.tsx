<<<<<<< HEAD
import Layout from "@/layout";
import React, { type FC } from "react";
import type { PageProps } from "gatsby";
import ContentAboutUs from "@/components/containers/contentAboutUS"

const AboutUsPage: FC<PageProps> = () => (

    <Layout>
      <ContentAboutUs/>
    </Layout>
    
  );
  
  export default  AboutUsPage;
=======
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
>>>>>>> 70a3c062d397f783db5db3726ce46d2cc730193b
