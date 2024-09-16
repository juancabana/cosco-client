/**
 * This file can be used to define Gatsby configuration,
 * more info in https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import type { GatsbyConfig } from "gatsby";

import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: `.env`,
});

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
      resolve: "gatsby-plugin-alias-imports",
    },
  ],
  siteMetadata: {
    author: "COSCO®",
    description:
      "Compra y vende tus cosechas, frutas y verduras en COSCO®. La plataforma de comercio electrónico para agricultores y consumidores.",
    facebookId: process.env.FACEBOOK_DOMAIN_VERIFICATION,
    // TODO: Add the correct URL
    siteUrl: process.env.GATSBY_ECOMMERCE_URL,
    title: "Compra y vende tus cosechas en COSCO®",
  },
} satisfies GatsbyConfig;

export default config;
