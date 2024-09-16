/**
 * This file can be used to define Gatsby configuration,
 * more info in https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import type { GatsbyConfig } from "gatsby";

import dotenv from "dotenv";

dotenv.config({
  path: `.env`,
});

export default {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      options: {
        alias: {
          "@": "src",
        },
      },
      resolve: "gatsby-plugin-alias-imports",
    },
  ],
  siteMetadata: {
    author: "COSCO®",
    description:
      "Encuentra y publica los mejores productos agricolas colombianos, directamente desde el campo, contacta directamente con el productor sin intermediarios",
    facebookId: process.env.FACEBOOK_DOMAIN_VERIFICATION,
    // TODO: Add the correct URL
    siteUrl: process.env.GATSBY_ECOMMERCE_URL,
    title: "Compra y vende tus productos agricolas en COSCO",
  },
} satisfies GatsbyConfig;
