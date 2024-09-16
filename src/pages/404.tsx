import React, { type FC } from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Seo from "@/layout/seo";
import isSSR from "@/utils/isSSR";

export const Head: HeadFC = () => <Seo />;

const NotFoundPage: FC<PageProps> = () => {

  if (!isSSR()) return null;
  
  return (
    <main className="text-[#232129] p-24 font-sans">
      <h1 className="mt-0 mb-16 max-w-[320px]">Page not found</h1>
      <p className="mb-12">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in{" "}
            <code className="text-[#8A6534] p-1 bg-[#FFF4DB] text-[1.25rem] rounded">
              src/pages/
            </code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
