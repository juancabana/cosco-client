import React, { type FC, type PropsWithChildren } from "react";

import Header from "./header";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col">
    <Header />
    <main className="flex min-h-[calc(100vh-72px)] flex-1 flex-col bg-slate-200">
      {children}
    </main>
  </div>
);

export default Layout;
