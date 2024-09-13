import React, { type FC } from "react";
import Seo from "@/layout/seo";

import { navigate, type HeadFC, type PageProps } from "gatsby";
import MyCrops from "@/components/containers/my-crops";
import Layout from "@/layout";
import { useAuth } from "@/providers/auth";

export const Head: HeadFC = () => <Seo />;

const MyCropsPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (!user && !isLogged) {
    navigate("/auth/login");
    return null;
  }

  return (
    <Layout>
      <MyCrops />
    </Layout>
  );
};

export default MyCropsPage;
