import Layout from "@/layout";
import Seo from "@/layout/seo";
import type { HeadFC, PageProps } from "gatsby";
import React, { type FC } from "react";

export const Head: HeadFC = () => <Seo />;

const publicationsPage: FC<PageProps> = () => {
  return (
    <Layout>
      <div className="h-[200vh] w-full pt-16">
        <h1>Publicaciones</h1>
      </div>
    </Layout>
  );
};

export default publicationsPage;
