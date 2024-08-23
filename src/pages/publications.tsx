import Layout from "@/layout";
import Seo from "@/layout/seo";
import type { HeadFC, PageProps } from "gatsby";
import React, { type FC } from "react";

export const Head: HeadFC = () => <Seo />;

const publicationsPage: FC<PageProps> = () => {
  return (
    <Layout>
      <div className="h-[200vh] w-full">
        <h1>publicaciones</h1>
      </div>
    </Layout>
  );
};

export default publicationsPage;
