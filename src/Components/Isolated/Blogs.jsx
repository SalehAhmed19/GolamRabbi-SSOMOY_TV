import React from "react";
import { Link } from "react-router-dom";
import blog from "../../assets/images/blogs.jpg";

function Blogs() {
  return (
    <div className="lg:px-24 py-14 text-[#fff]">
      <div className="flex items-center justify-center">
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary mx-10">
          ব্লগ
        </h2>
        <div className="h-[2px] w-20 bg-[#fff] rounded-2xl"></div>
      </div>
      <Link to="/">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5">
          <div>
            <h3 className="text-primary my-6 font-bold text-2xl">
              প্রফেশনাল ব্লগ
            </h3>
            <img src={blog} alt="" />
          </div>
          <div>
            <h3 className="text-primary my-6 font-bold text-2xl">
              পার্সোনাল ব্লগ
            </h3>
            <img src={blog} alt="" />
          </div>
        </div>
      </Link>
      <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl">
        সব ব্লগ দেখতে
      </button>
    </div>
  );
}

export default Blogs;
