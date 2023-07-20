import React, { useState } from "react";
import { AiOutlineClose, AiOutlineFileSearch } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { BsCheck2Circle, BsFillInfoCircleFill } from "react-icons/bs";
import { FaCalendarAlt, FaPlaneArrival } from "react-icons/fa";
import { HiMenuAlt1, HiPencilAlt } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCastConnected } from "react-icons/md";
import { RiChatQuoteLine } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [sideNavBarOpen, setSideNavBarOpen] = useState(true);
  const [subMenuBarOpen, setSubMenuBarOpen] = useState(false);
  return (
    <div className="flex pb-36">
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
        <ul className={`text-[#F6B30F] space-y-6 mt-[100px] p-[20px] text-lg font-bold`}>
          <li>
            <Link to="/dashboard/manage-course">
              <div
                className={`group relative z-10 ${
                  sideNavBarOpen
                    ? "flex  items-center before:-z-10  w-[175px] h-[35px] before:absolute before:w-[175px] before:h-[35px] before:rounded-md before:hover:bg-[#f40a5c]  hover:text-white before:transition-all before:duration-500 before:delay-100 before:left-[-120%] hover:before:left-0 rounded-md"
                    : "-mx-5"
                }`}
              >
                <MdCastConnected
                  className={`mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>Course</h2>
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
                        <MdCastConnected /> Manage Course
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/course-enrollment">
                        <MdCastConnected /> Course Enrolement
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
                <FaCalendarAlt
                  className={` mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>Event</h2>
                    </div>
                  </div>
                </div>
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
                <BsCheck2Circle
                  className={` mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>Circular</h2>
                    </div>
                  </div>
                </div>
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
                <HiPencilAlt
                  className={` mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>
                        Testimonials
                      </h2>
                    </div>
                  </div>
                </div>
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
                <AiOutlineFileSearch
                  className={`mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl "
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>
                        Featured in
                      </h2>
                    </div>
                  </div>
                </div>
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
                <FaPlaneArrival
                  className={`mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl "
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>Invite</h2>
                    </div>
                  </div>
                </div>
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
                <BsFillInfoCircleFill
                  className={` mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>About</h2>
                    </div>
                  </div>
                </div>
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
                <BiBookReader
                  className={` mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>Books</h2>
                    </div>
                  </div>
                </div>
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
                <RiChatQuoteLine
                  className={` mt-2 mx-2 ${
                    sideNavBarOpen
                      ? "text-xl"
                      : "  group-hover:bg-[#fff] group-hover:text-[#f40a5c] group-hover:border-[1px] group-hover:border-[#f40a5c] rounded-md w-[45px] h-[40px] p-1 transition-all duration-200 delay-100 -mx-3"
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
                        : "whitespace-nowrap group-hover:bg-[#fff] group-hover:border-[#f40a5c] group-hover:border-[1px] group-hover:text-[#f40a5c] group-hover:opacity-100 px-3 py-1.5 rounded-md opacity-0 transition-all duration-200 delay-100"
                    }`}
                  >
                    <div
                      className={`${
                        sideNavBarOpen
                          ? "flex items-center justify-between w-[120px]"
                          : ""
                      }`}
                    >
                      <h2 className={sideNavBarOpen ? "mt-2" : ""}>Quotes</h2>
                    </div>
                  </div>
                </div>
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
