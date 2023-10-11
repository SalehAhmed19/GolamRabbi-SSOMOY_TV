import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
const MobileHeader = ({headerItems }) => {
  const [openSideNav, setOpenSideNav] = useState(false);

 

    return (
      <div className="lg:hidden relative">
        {/* first part  */}
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex justify-center items-center">
              <img src={logo} alt="logo" className="2xs:w-6 w-8 mr-3" />
              <h2 className="2xs:text-[12px] text-xl text-white font-bold">
                Golam Rabby
              </h2>
            </div>
          </Link>
          <div
            className="text-primary 2xs:text-xl text-3xl cursor-pointer"
            onClick={() => setOpenSideNav(!openSideNav)}
          >
            {openSideNav ? (
              <IoIosClose className="2xs:text-xl text-4xl" />
            ) : (
              <RxHamburgerMenu className="rotate-180" />
            )}
          </div>
        </div>
        {/* second part */}
          <ul
            className={`absolute h-screen overflow-auto bg-white w-3/4 md:w-[280px] ${
              openSideNav
                ? "2xs:top-12 top-12 -left-5 transition-all duration-700 "
                : "2xs:top-12 top-12 -left-full transition-all duration-1000 delay-300"
            }`}
          >
            {/* first part */}
            {headerItems?.slice(0, 2)?.map((item, index) => (
              <Link to={item.route}>
                <li
                  onClick={() => setOpenSideNav(!openSideNav)}
                  key={index}
                  className="2xs:text-[12px] cursor-pointer text-center hover:bg-[#333] hover:text-white w-full p-3"
                >
                  {item.menu}
                </li>
              </Link>
            ))}
            {/* second part */}
            {headerItems?.slice(2, 10)?.map((item, index) => (
              <Link to={item.route}>
                <li
                  onClick={() => setOpenSideNav(!openSideNav)}
                  key={index}
                  className="2xs:text-[12px] cursor-pointer text-center bg-[#00000029] hover:bg-[#333] hover:text-white w-full p-3"
                >
                  {item.menu}
                </li>
              </Link>
            ))}
          </ul>
      </div>
    );
};

export default MobileHeader;
