import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex">
      {/* left site */}
      <div className="bg-[#14161C] w-[380px]">
        <ul className="text-[#F6B30F] space-y-5 p-[40px] mt-[80px] font-bold text-lg">
          <li>
            <Link to="/dashboard/course" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Course
            </Link>
          </li>
          <li>
            <Link to="/dashboard/events" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Events
            </Link>
          </li>
          <li>
            <Link to="/dashboard/circular" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Circular
            </Link>
          </li>
          <li>
            <Link to="/dashboard/testimonials" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/dashboard/featured-in" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Featured in
            </Link>
          </li>
          <li>
            <Link to="/dashboard/invite" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Invite
            </Link>
          </li>
          <li>
            <Link to="/dashboard/about" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              About
            </Link>
          </li>
          <li>
            <Link to="/dashboard/books" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Books
            </Link>
          </li>
          <li>
            <Link to="/dashboard/quotes" className="flex items-center">
              <AiOutlineUsergroupAdd className="text-3xl" />
              Quotes
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
