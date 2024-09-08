import React, { type FC } from "react";
import Seo from "@/layout/seo";

import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "@/layout";
import { useAuth } from "@/providers/auth";

export const Head: HeadFC = () => <Seo />;

const contactSellerPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (!user && !isLogged) {
    navigate("/auth/login");
    return null;
  }

  return (
    <Layout>
    </Layout>
  );
};

export default contactSellerPage;
