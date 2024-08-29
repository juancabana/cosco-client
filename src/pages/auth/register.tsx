import React, { type FC } from "react";
import { type PageProps } from "gatsby";

import Register from "@/components/containers/register";
import isSSR from "@/utils/isSSR";

const RegisterPage: FC<PageProps> = () => !isSSR() && <Register />;

export default RegisterPage;
