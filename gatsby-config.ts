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
      "Compra y vende tus cosechas, frutas y verduras en COSCO®. La plataforma de comercio electrónico para agricultores y consumidores.",
    facebookId: process.env.FACEBOOK_DOMAIN_VERIFICATION,
    // TODO: Add the correct URL
    siteUrl: process.env.GATSBY_ECOMMERCE_URL,
    title: "Compra y vende tus cosechas en COSCO®",
  },
} satisfies GatsbyConfig;
