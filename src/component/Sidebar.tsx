import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Data } from "../constant/SideBarData";
const Sidebar = () => {
  const currentSegment = useLocation();
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/6">
          <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                {Data.map((x, key) => (
                  <li key={key}>
                    <Link
                      to={x.path}
                      className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                        (currentSegment.pathname === x.path ||
                          (x.path === "/events" &&
                            currentSegment.pathname === "/eventtab")) &&
                        "bg-gray-100 dark:bg-gray-700"
                      }  group`}
                    >
                      <x.icon />
                      <span className="ms-3">{x.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="w-5/6 " style={{ marginTop: "3.5rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
