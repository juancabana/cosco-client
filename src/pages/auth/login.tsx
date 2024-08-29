import React, { type FC } from "react";
import { type PageProps } from "gatsby";

import Login from "@/components/containers/login";
import isSSR from "@/utils/isSSR";

const LoginPage: FC<PageProps> = () => !isSSR() && <Login />;

export default LoginPage;
