import React, { type FC } from "react";
import Seo from "@/layout/seo";
import Layout from "@/layout";
import Publications from "@/components/containers/publications";

import type { HeadFC, PageProps } from "gatsby";

export const Head: HeadFC = () => <Seo />;

<<<<<<< HEAD
const publicationsPage: FC<PageProps> = () => {
  return (
    <Layout>
      <div className="h-[200vh] w-full">
        <h1>Publicaciones</h1>
      </div>
    </Layout>
  );
};
=======
const PublicationsPage: FC<PageProps> = () => (
  <Layout>
    <Publications />
  </Layout>
);
>>>>>>> 70a3c062d397f783db5db3726ce46d2cc730193b

export default PublicationsPage;
