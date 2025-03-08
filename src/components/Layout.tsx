import { LayoutProps } from "@/utils/types";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
