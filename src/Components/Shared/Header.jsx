import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import MobileHeader from "./MobileHeader";
const Header = () => {
  const headerItems = [
    { menu: "লগইন", route: "/" },
    { menu: "সাবস্ক্রাইব", route: "/" },
    { menu: "চাকরি", route: "/jobs" },
    { menu: "ইভেন্ট", route: "/events" },
    { menu: "কোর্স", route: "/courses" },
    { menu: "ব্লগ", route: "/blogs" },
    { menu: "ইনভাইট", route: "/invite" },
    { menu: "হোয়াটস নিউ", route: "/whats-new" },
    { menu: "গ্যালারি", route: "/gallery" },
    { menu: "ড্যাশবোর্ড", route: "/dashboard" },
  ];
  return (
    <header
      className={`z-50 sticky top-0 bg-black p-5 transition-all duration-700 delay-300`}
    >
      <nav className="max-w-[1440px] mx-auto">
        <div className="hidden lg:flex lg:justify-between lg:items-center ">
          <Link to="/">
            <div className="flex items-center cursor-pointer">
              <img src={logo} alt="" className="w-8 mx-3" />
              <h2 className="text-xl text-white font-bold">Golam Rabby</h2>
            </div>
          </Link>

          <ul className="lg:flex lg:justify-center lg:items-center text-xl text-white font-semibold space-x-8 mr-8">
            {headerItems?.slice?.(2,10).map((item, index) => (
              <li key={index}>
                <Link to={item.route}>{item.menu}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Header */}
        <MobileHeader headerItems={headerItems} />
      </nav>
    </header>
  );
};

export default Header;
