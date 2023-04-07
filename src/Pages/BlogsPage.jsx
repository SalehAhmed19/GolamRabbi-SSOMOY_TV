import React from "react";
import blog from "../assets/images/blogs.jpg";
import { Link } from "react-router-dom";

function BlogsPage() {
  return (
    <div className="py-24 lg:mx-20 mx-5">
      <h2 className="text-4xl font-bold text-center pt-20 pb-10 text-primary">
        ব্লগ
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <Link to="/blogs/blog-1">
          <img className="rounded-md" src={blog} alt="" />
        </Link>
        <img className="rounded-md" src={blog} alt="" />
        <img className="rounded-md" src={blog} alt="" />
        <img className="rounded-md" src={blog} alt="" />
      </div>
    </div>
  );
}

export default BlogsPage;
