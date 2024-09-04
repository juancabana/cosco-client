import React, { type FC } from "react";
import { navigate, type PageProps } from "gatsby";

import Register from "@/components/containers/register";
import isSSR from "@/utils/isSSR";
import { useAuth } from "@/providers/auth";

const RegisterPage: FC<PageProps> = () => {
    const { user, isLogged } = useAuth();

    if (user && isLogged) {
      navigate("/publications");
      return null;
    }
    
    if (isSSR()) return null;
    return <Register />;
    
};

export default RegisterPage;
