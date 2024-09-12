import Layout from "@/layout";
import type { PageProps } from "gatsby";
import React, { type FC } from "react";
import ContentContactUs from "@/components/containers/content-contactUs";

const ContactUsPage: FC<PageProps> = () => (

  <Layout>
    < ContentContactUs/>
  </Layout>
  
);

export default ContactUsPage;