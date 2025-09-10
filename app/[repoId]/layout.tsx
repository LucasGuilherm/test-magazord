import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-8 md:max-w-5xl">{children}</div>
  );
};

export default Layout;
