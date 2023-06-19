import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";

const Layout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(sidebarIsOpen);
  }, [sidebarIsOpen]);
  return (
    <>
      <Header
        toggleSidebar={() => {
          setSidebarIsOpen(!sidebarIsOpen);
        }}
      />
      <Outlet />
      <Sidebar isClose = {() => setSidebarIsOpen(false)} isOpen = {() setSidebarIsOpen(true)} />
    </>
  );
};

export default Layout;
