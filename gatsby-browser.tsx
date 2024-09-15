import React, { type FC } from "react";
import type { WrapPageElementBrowserArgs } from "gatsby";
import "./src/styles/global.css";
import { AuthProvider } from "@/providers/auth";
import ServicesProvider from "@/providers";

export const wrapRootElement: FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <ServicesProvider>
    <AuthProvider>{element}</AuthProvider>
  </ServicesProvider>
);
