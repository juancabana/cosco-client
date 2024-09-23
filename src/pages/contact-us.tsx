import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import isSSR from "@/utils/isSSR";
import ContactUs from "@/components/containers/contact-us";

export const Head: HeadFC = () => (
  <Seo
    title="Contáctanos | COSCO"
    description="¿Tienes preguntas o comentarios sobre COSCO? Contáctanos y estaremos encantados de ayudarte. Estamos aquí para apoyar a campesinos y compradores."
  />
);

const ContactUsPage: FC<PageProps> = () =>
  !isSSR() && (
    <Layout>
      <ContactUs />
    </Layout>
  );

export default ContactUsPage;
