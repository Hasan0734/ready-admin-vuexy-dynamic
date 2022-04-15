import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200)
  useEffect(() => {
    window.addEventListener("resize", () => {
       const width = window.innerWidth;
       setWindowWidth(width)
    });
  }, []);
  return (
    <>
      <div
        className={`pace-done vertical-layout vertical-menu-modern navbar-floating footer-static ${windowWidth >= 1200 ? 'menu-expanded': ''}  ${
          toggle ? "menu-open menu-expanded" : " menu-hide"
        }`}
      >
        <AdminNav toggle={toggle} setToggle={setToggle} />
        <AdminSidebar toggle={toggle} setToggle={setToggle} />
      </div>
    </>
  );
};

export default AdminLayout;
