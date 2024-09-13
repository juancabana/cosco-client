import React, { type FC } from "react";
import ServicesProvider from "@/providers";

import type { WrapPageElementBrowserArgs } from "gatsby";

import "./src/styles/global.css";
import { AuthProvider } from "./src/providers/auth/index";

export const wrapRootElement: FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <ServicesProvider>
    <AuthProvider>{element}</AuthProvider>
  </ServicesProvider>
);
