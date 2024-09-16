import React, { type FC } from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Seo from "@/layout/seo";
import Layout from "@/layout";

export const Head: HeadFC = () => <Seo />;

const NotFoundPage: FC<PageProps> = () => {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.
        <Link to="/">Go back to the homepage</Link>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
