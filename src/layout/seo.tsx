import { graphql, useStaticQuery } from "gatsby";
import React, { type FC } from "react";

interface Props {
  author?: string;
  description?: string;
  title?: string;
}

interface SiteMetaData {
  site: { siteMetadata: Props };
}

const Seo: FC<Props> = (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetaData>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  const { author, description, title } = {
    author: props.author ?? siteMetadata.author,
    description: props.description ?? siteMetadata.description,
    title: props.title ?? siteMetadata.title,
  };

  return (
    <>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Seo;
