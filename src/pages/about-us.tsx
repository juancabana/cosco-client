import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import isSSR from "@/utils/isSSR";
import AboutUs from "@/components/containers/about-us";

export const Head: HeadFC = () => (
  <Seo
    title="Sobre Nosotros | COSCO"
    description="Conoce más sobre COSCO, nuestra misión de conectar a campesinos con compradores, reducir el desperdicio y promover el comercio local justo. Únete a nosotros y sé parte del cambio."
  />
);

const AboutUsPage: FC<PageProps> = () =>
  !isSSR() && (
    <Layout>
      <AboutUs />
    </Layout>
  );

export default AboutUsPage;
