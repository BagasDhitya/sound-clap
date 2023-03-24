import React, { FC } from "react";
import Navbar from "./Navbar";

interface Layout {
  children?: React.ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-full w-full flex-col overflow-auto">
        <Navbar />
        <div className={"h-full w-full overflow-auto bg-alta-background"}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
