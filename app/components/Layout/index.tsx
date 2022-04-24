import { Outlet } from "@remix-run/react";
import { TopBar } from "../TopBar";

export const Layout = () => (
  <div className="bg-black min-h-screen h-full">
    <TopBar />
    <Outlet />
  </div>
);
