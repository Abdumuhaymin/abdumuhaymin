import { Outlet } from "react-router-dom";
import Header from "./header/header";

export const Layout = () => {
  return (
    <div className="container h-full">
      <Header />
      <Outlet />
    </div>
  );
};
