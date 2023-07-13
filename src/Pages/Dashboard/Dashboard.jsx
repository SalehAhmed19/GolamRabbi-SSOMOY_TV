import React, { useState } from "react";
import { AiOutlineClose, AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [sideNavBarOpen, setSideNavBarOpen] = useState(true);
  const [subMenuBarOpen, setSubMenuBarOpen] = useState(false);
  return (
    <div className="flex">
      {/* left site */}
      <div
        className={`bg-[#14161C] border-r-2 border-[#f6b30f] ${
          sideNavBarOpen
            ? "w-[280px] transition-all duration-500"
            : "w-[60px] transition-all duration-500 delay-75"
        }`}
      >
        <div
          className="m-2 p-2 relative cursor-pointer"
          onClick={() => setSideNavBarOpen(!sideNavBarOpen)}
        >
          {sideNavBarOpen ? (
            <AiOutlineClose className="absolute top-2 right-2 mt-[100px] text-[#F6B30F] text-xl" />
          ) : (
            <HiMenuAlt1 className="absolute top-2 right-2 mt-[100px] text-[#F6B30F] text-3xl" />
          )}
        </div>
        <ul
          className={`text-[#F6B30F] space-y-5 mt-[100px] p-[20px] font-bold text-lg`}
        >
          <li>
            <Link to="/dashboard/manage-course">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mt-2 mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <div
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-0 left-[60px] z-10"
                  }`}
                >
                  <div
                    className={` ${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <span>Course</span>
                      <IoMdArrowDropdown
                        onClick={() => setSubMenuBarOpen(!subMenuBarOpen)}
                        className={`${sideNavBarOpen ? "block" : "hidden"}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* submenu */}
              <div className=" overflow-hidden">
                <div
                  className={`${
                    !sideNavBarOpen && "hidden"
                  } whitespace-nowrap relative  ${
                    subMenuBarOpen
                      ? "mt-1 p-3 -mb-5 absolute top-0 transition-all duration-1000  delay-150"
                      : "absolute  h-0 transition-all duration-1000 delay-150"
                  }`}
                >
                  <ul className={`space-y-3 `}>
                    <li>
                      <NavLink to="/dashboard/manage-course">
                        Manage Course
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/course-enrollment">
                        Course Enrolement
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/events">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Events
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/circular">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Circular
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/testimonials">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Testimonials
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/featured-in">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Featured in
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/invite">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Invite
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/about">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    About
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/books">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Books
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/quotes">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <AiOutlineUsergroupAdd
                  className={`text-3xl mx-2 ${
                    sideNavBarOpen
                      ? ""
                      : "  group-hover:bg-[#f40a5c] group-hover:text-black rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
                  }`}
                />
                <span
                  className={`${
                    sideNavBarOpen ? "" : "absolute top-1.5 left-[60px] z-10"
                  }`}
                >
                  <span
                    className={`${
                      sideNavBarOpen
                        ? ""
                        : "whitespace-nowrap group-hover:bg-[#f40a5c] group-hover:text-black group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    Quotes
                  </span>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* right site */}
      <div className="w-full mt-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
