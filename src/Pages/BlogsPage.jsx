import React from "react";
import blog from "../assets/images/blogs.jpg";
import { Link } from "react-router-dom";

function BlogsPage() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="lg:py-24 py-10 lg:mx-20 mx-5">
      <h2 className="text-4xl font-bold text-center pt-20 pb-10 text-primary">
        ব্লগ
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {arr.map((a) => (
          <Link to="/blogs/blog-1">
            <div className="relative text-basic ">
              <img
                className="opacity-50 rounded-md"
                src="https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
              <div className="absolute bottom-[20px] mx-5">
                <h3 className="text-2xl font-bold">
                  আবহাওয়া - আজকের আবহাওয়া কেমন থাকবে
                </h3>
                <p>
                  পড়ুন আজকের আবহাওয়ার খবর, ঢাকা সহ এই মুহুর্তের বাংলাদেশের
                  আবহাওয়ার খবর। জেনে নিন আবহাওয়ার পূর্বাভাস...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
