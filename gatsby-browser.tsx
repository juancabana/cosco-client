import React, { type FC } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { WrapPageElementBrowserArgs } from "gatsby";
import "./src/styles/global.css";
import { AuthProvider } from "@/providers/auth";
import { Toaster } from "@/components/shadcn/ui/toaster";
import ServicesProvider from "@/providers";

export const wrapRootElement: FC<WrapPageElementBrowserArgs> = ({
  element,
}) => (
  <ServicesProvider>
    <AuthProvider>{element}</AuthProvider>
  </ServicesProvider>
);
