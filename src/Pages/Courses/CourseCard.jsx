import React from "react";

function CourseCard({ image }) {
  return (
    <div className="shadow-lg rounded-lg bg-[#ffffff0f] overflow-hidden">
      <img className="w-full" src={image} alt="random image" />
      <div className="p-4">
        <p className="text-primary font-bold text-base mb-2">কোর্সের নাম</p>
        <p className="text-gray-500 text-sm mb-4">Course Description</p>
        <div className="flex items-center justify-between">
          <button className="bg-primary hover:bg-yellow-600 text-[#222] font-bold py-2 px-4 rounded-full">
            এনরোল করো
          </button>
          <button className="text-primary hover:text-yellow-600 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-3-1.5-3 1.5V5a2 2 0 012-2h2a2 2 0 012 2v14z"
              />
            </svg>
            উইশ লিস্ট
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
