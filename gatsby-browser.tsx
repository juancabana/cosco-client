import React, { type FC } from "react";
import type { WrapPageElementBrowserArgs } from "gatsby";
import "./src/styles/global.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { AuthProvider } from "@/providers/auth";
import ServicesProvider from "@/providers";

export const wrapRootElement: FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <ServicesProvider>
    <AuthProvider>{element}</AuthProvider>
  </ServicesProvider>
);
