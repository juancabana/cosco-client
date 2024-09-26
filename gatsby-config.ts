/**
 * This file can be used to define Gatsby configuration,
 * more info in https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import type { GatsbyConfig } from "gatsby";

import dotenv from "dotenv";

dotenv.config({
  path: `.env`,
});

const excludeSeoPages = ['/favorites', '/my-crops', '/perfil'];

export default {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: excludeSeoPages,
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.GATSBY_ECOMMERCE_URL,
        sitemap: `${process.env.GATSBY_ECOMMERCE_URL}sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/", disallow: excludeSeoPages }],
      },
    },
    {
      options: {
        alias: {
          "@": "src",
        },
      },
      resolve: "gatsby-plugin-alias-imports",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img_logoSpinner.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
  ],
  siteMetadata: {
    author: "COSCO®",
    description:
      "Con COSCO, los campesinos pueden vender sus cosechas o productos agricolas directamente a compradores interesados. Únete y apoya el comercio local, reduce el desperdicio de alimentos y obtén productos frescos al mejor precio sin intermediarios.",
    facebookId: process.env.FACEBOOK_DOMAIN_VERIFICATION,
    siteUrl: process.env.GATSBY_ECOMMERCE_URL,
    title: "Compra y Venta de Productos Agrícolas | COSCO",
  },
} satisfies GatsbyConfig;
