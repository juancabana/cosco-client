<<<<<<< HEAD
import Layout from "@/layout";
import type { PageProps } from "gatsby";
import React, { type FC } from "react";
import ContactUs from "@/components/containers/contactUs";

const ContactUsPage: FC<PageProps> = () => (

  <Layout>
    <ContactUs />
  </Layout>
  
=======
import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";

export const Head: HeadFC = () => <Seo />;

const ContactUsPage: FC<PageProps> = () => (
  <Layout>
    Contact Us page
  </Layout>
>>>>>>> 70a3c062d397f783db5db3726ce46d2cc730193b
);

export default ContactUsPage;
