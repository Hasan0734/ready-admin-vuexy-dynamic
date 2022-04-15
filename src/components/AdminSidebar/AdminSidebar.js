import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Disc, X } from "react-feather";
import { menuItem } from "./sideMenu";

const AdminSidebar = ({ toggle, setToggle }) => {
  const [subOpen, setSubOpen] = useState({ invoice: false });

  useEffect(() => {
    // const closeSidebar = (e) => {
    //   console.log(e)
    //   if (e.path[1].tagName !== "shape") {
    //     setToggle(false);
    //   }
    // };
    // document.body.addEventListener("click", closeSidebar);
    // return () => document.body.removeEventListener("click", closeSidebar);
  }, []);

  const {pathname} = useRouter();
  
  const customStyle = {
    overflow: "hidden",
    transition: "all 0.3s",
    height: `${subOpen.invoice ? "212px" : "43px"}`,
  };

  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto">
            <a
              className="navbar-brand"
              href="../../../html/ltr/vertical-menu-template/index.html"
            >
              <span className="brand-logo">
                <svg
                  viewBox="0 0 139 95"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height={24}
                >
                  <defs>
                    <linearGradient
                      id="linearGradient-1"
                      x1="100%"
                      y1="10.5120544%"
                      x2="50%"
                      y2="89.4879456%"
                    >
                      <stop stopColor="#000000" offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      id="linearGradient-2"
                      x1="64.0437835%"
                      y1="46.3276743%"
                      x2="37.373316%"
                      y2="100%"
                    >
                      <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Artboard"
                      transform="translate(-400.000000, -178.000000)"
                    >
                      <g
                        id="Group"
                        transform="translate(400.000000, 178.000000)"
                      >
                        <path
                          className="text-primary"
                          id="Path"
                          d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          id="Path1"
                          d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                          fill="url(#linearGradient-1)"
                          opacity="0.2"
                        />
                        <polygon
                          id="Path-2"
                          fill="#000000"
                          opacity="0.049999997"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                        />
                        <polygon
                          id="Path-21"
                          fill="#000000"
                          opacity="0.099999994"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                        />
                        <polygon
                          id="Path-3"
                          fill="url(#linearGradient-2)"
                          opacity="0.099999994"
                          points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <h2 className="brand-text">Vuexy</h2>
            </a>
          </li>
          <li className="nav-item nav-toggle">
            <a
              className="nav-link modern-nav-toggle pe-0"
              data-bs-toggle="collapse"
            >
              <X
                onClick={() => setToggle(!toggle)}
                className="d-block d-xl-none text-primary toggle-icon font-medium-4"
              />
              <Disc className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" />
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-bottom" />
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          {menuItem.map((item, i) => (
            <li
              key={i}
              className={`nav-item ${item.url === pathname ? 'active':''} ${
                item.children?.length > 0 ? "has-sub open" : ""
              }`}
              style={item.children?.length > 0 ? customStyle : undefined}
            >
              <a
                onClick={
                  item.children?.length > 0
                    ? () => setSubOpen({ invoice: !subOpen.invoice })
                    : undefined
                }
                className="d-flex align-items-center"
                href={item.url}
              >
                {item.icon}
                <span
                  className="menu-title text-truncate"
                  data-i18n="Dashboards"
                >
                  {item.title}
                </span>
              </a>
              {item.children?.length > 0 && (
                <ul className="menu-content">
                  {item.children?.map((children, index) => (
                    <li key={index}>
                      <a
                        className="d-flex align-items-center"
                        href={children.url}
                      >
                        {children.icon}
                        <span
                          className="menu-item text-truncate"
                          data-i18n="List"
                        >
                          {children.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* <li className=" nav-item">
            <a className="d-flex align-items-center" href="app-email.html">
              <Mail />
              <span className="menu-title text-truncate" data-i18n="Email">
                Email
              </span>
            </a>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="app-chat.html">
              <MessageSquare />
              <span className="menu-title text-truncate" data-i18n="Chat">
                Chat
              </span>
            </a>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="app-todo.html">
              <CheckSquare />
              <span className="menu-title text-truncate" data-i18n="Todo">
                Todo
              </span>
            </a>
          </li>
          <li className=" nav-item">
            <a className="d-flex align-items-center" href="app-calendar.html">
              <Calendar />
              <span className="menu-title text-truncate" data-i18n="Calendar">
                Calendar
              </span>
            </a>
          </li>
          <li className=" nav-item ">
            <a className="d-flex align-items-center" href="app-kanban.html">
              <Grid />
              <span className="menu-title text-truncate" data-i18n="Kanban">
                Kanban
              </span>
            </a>
          </li>
          <li className={`nav-item has-sub open`} style={customStyle}>
            <a
              onClick={() => setSubOpen({ invoice: !subOpen.invoice })}
              className="d-flex align-items-center"
              href="#"
            >
              <FileText />
              <span className="menu-title text-truncate" data-i18n="Invoice">
                Invoice
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-invoice-list.html"
                >
                  <Circle />
                  <span className="menu-item text-truncate" data-i18n="List">
                    List
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-invoice-preview.html"
                >
                  <Circle />
                  <span className="menu-item text-truncate" data-i18n="Preview">
                    Preview
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-invoice-edit.html"
                >
                  <Circle />
                  <span className="menu-item text-truncate" data-i18n="Edit">
                    Edit
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="d-flex align-items-center"
                  href="app-invoice-add.html"
                >
                  <Circle />
                  <span className="menu-item text-truncate" data-i18n="Add">
                    Add
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" nav-item ">
            <a className="d-flex align-items-center" href="app-kanban.html">
              <Grid />
              <span className="menu-title text-truncate" data-i18n="Kanban">
                Kanban
              </span>
            </a>
          </li>
          <li className=" nav-item ">
            <a className="d-flex align-items-center" href="app-kanban.html">
              <Grid />
              <span className="menu-title text-truncate" data-i18n="Kanban">
                Kanban
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
