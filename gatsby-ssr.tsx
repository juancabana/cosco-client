import React, { type FC } from "react"
import ServicesProvider from "@/providers"

import type { WrapPageElementBrowserArgs } from "gatsby"

import "./src/styles/global.css"

export const wrapRootElement:FC<WrapPageElementBrowserArgs> = ({ element }) => (
    <ServicesProvider>{element}</ServicesProvider>
)

