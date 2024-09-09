import React, { type FC } from "react";
import Seo from "@/layout/seo";

import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "@/layout";
import { useAuth } from "@/providers/auth";
import Favorites from "@/components/containers/favorites";

export const Head: HeadFC = () => <Seo />;

const FavoritesPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (!user && !isLogged) {
    navigate("/auth/login");
    return null;
  }

  return (
    <Layout>
      <Favorites />
    </Layout>
  );
};

export default FavoritesPage;
