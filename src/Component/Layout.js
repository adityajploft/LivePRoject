import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { SideBarFun } from "../redux/actions/action";

function Layout() {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.fetchdata);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth < 1200) {
          dispatch(SideBarFun(false));
        } else {
          dispatch(SideBarFun(true));
        }
      },
      true
    );
  }, []);
  return (
    <div className="axyz">
      <Sidebar />
      <Header />
      <div className={`other-component ${sidebar ? "" : "com-pde"}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
