import React, { type FC } from "react";
import ServicesProvider from "@/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { WrapPageElementBrowserArgs } from "gatsby";

import "./src/styles/global.css";
import { AuthProvider } from "@/providers/auth";
import { Toaster } from "@/components/shadcn/ui/toaster";

export const wrapRootElement: FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <ServicesProvider>
    <AuthProvider>
      <ReactQueryDevtools />
      {element}
      <Toaster />
    </AuthProvider>
  </ServicesProvider>
);
