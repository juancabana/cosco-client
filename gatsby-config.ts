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
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Poppins:100,200,300,400,500,600,700,800,900",
        ],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
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
      "Encuentra y publica los mejores productos agricolas colombianos, directamente desde el campo, contacta directamente con el productor sin intermediarios",
    facebookId: process.env.FACEBOOK_DOMAIN_VERIFICATION,
    siteUrl: process.env.GATSBY_ECOMMERCE_URL,
    title: "Compra y vende tus productos agricolas en COSCO",
  },
} satisfies GatsbyConfig;
