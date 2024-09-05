import React, { type FC } from "react";
import { navigate, type PageProps } from "gatsby";

import Login from "@/components/containers/login";
import isSSR from "@/utils/isSSR";
import { useAuth } from "@/providers/auth";

const LoginPage: FC<PageProps> = () => {
  const { user, isLogged } = useAuth();

  if (user && isLogged) {
    navigate("/publications");
    return null;
  }

  if (!isSSR()) return <Login />;
};

export default LoginPage;
