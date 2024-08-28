import Layout from "@/layout";
import type { PageProps } from "gatsby";
import React, { type FC } from "react";
import ContactUs from "@/components/containers/contactUs";

const ContactUsPage: FC<PageProps> = () => (

  <Layout>
    <ContactUs />
  </Layout>
  
);

export default ContactUsPage;
