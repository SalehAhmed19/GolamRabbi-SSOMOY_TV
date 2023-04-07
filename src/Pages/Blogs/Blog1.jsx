import React from "react";
import img3 from "../../assets/images/bloghsm.png";
import BlogsHeading from "../../Components/Isolated/BlogsComponents/BlogsHeading";
import BlogsSubHeading from "../../Components/Isolated/BlogsComponents/BlogsSubHeading";
import BlogContent from "../../Components/Isolated/BlogsComponents/BlogContent";
import BlogsAdd from "../../Components/Isolated/BlogsComponents/BlogsAdd";
import MoreBlogsVertical from "../../Components/Isolated/BlogsComponents/MoreBlogsVertical";

function Blog1() {
  return (
    <div className="py-24 lg:mx-20 mx-5">
      <BlogsHeading />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pb-14 lg:my-0">
          <BlogsSubHeading />

          <BlogContent />
        </div>
        <div>
          <div className="mb-5 flex flex-col items-end lg:mx-24 mx-5">
            <BlogsAdd />
            <MoreBlogsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
