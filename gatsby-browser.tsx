import React, { type FC } from "react";
import ServicesProvider from "@/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { WrapPageElementBrowserArgs } from "gatsby";

import "./src/styles/global.css";
import { AuthProvider } from "@/providers/auth";

export const wrapRootElement: FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <AuthProvider>
    <ServicesProvider>
      <ReactQueryDevtools />
      {element}
    </ServicesProvider>
  </AuthProvider>
);
