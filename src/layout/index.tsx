import React, { type FC, type PropsWithChildren } from "react";

import Header from "./header";
import useGetUserQuery from "@/hooks/querys/useGetUserQuery";
import Footer from "./footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  useGetUserQuery();
  return (
    <div
      className="flex flex-col"
      // className={`bg-amber-100 text-amber-800 rounded-md py-1 px-2`}
      // className={`bg-red-100 text-red-800 rounded-md py-1 px-2`}
      // className={`bg-green-100 text-green-800 rounded-md py-1 px-2`}
      // className={`bg-emerald-100 text-emerald-800 rounded-md py-1 px-2`}
      // className={`bg-yellow-100 text-yellow-800 rounded-md py-1 px-2`}
      // className={`bg-lime-100 text-lime-800 rounded-md py-1 px-2`}
      // className={`bg-orange-100 text-orange-800 rounded-md py-1 px-2`}
      // className={`bg-teal-100 text-teal-800 rounded-md py-1 px-2`}
      // className={`bg-cyan-100 text-cyan-800 rounded-md py-1 px-2`}
      // className={`bg-indigo-100 text-indigo-800 rounded-md py-1 px-2`}
      // className={`bg-violet-100 text-violet-800 rounded-md py-1 px-2`}
      // className={`bg-purple-100 text-purple-800 rounded-md py-1 px-2`}
      // className={`bg-fuchsia-100 text-fuchsia-800 rounded-md py-1 px-2`}
      // className={`bg-rose-100 text-rose-800 rounded-md py-1 px-2`}
      // className={`bg-pink-100 text-pink-800 rounded-md py-1 px-2`}
    >
      <Header />
      <main className="flex min-h-[calc(100vh-72px)] flex-1 flex-col bg-slate-200">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
