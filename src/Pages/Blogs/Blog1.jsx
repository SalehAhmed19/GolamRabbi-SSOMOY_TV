import React from "react";
import img2 from "../../assets/images/add.png";
import img3 from "../../assets/images/bloghsm.png";
import BlogsHeading from "../../Components/Isolated/BlogsComponents/BlogsHeading";
import BlogsSubHeading from "../../Components/Isolated/BlogsComponents/BlogsSubHeading";
import BlogContent from "../../Components/Isolated/BlogsComponents/BlogContent";

function Blog1() {
  return (
    <div className="py-24 lg:mx-20 mx-5">
      <BlogsHeading />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="pb-14 lg:my-0">
          <BlogsSubHeading />

          <BlogContent />
        </div>
        <div>
          <div className="mb-5 flex flex-col items-center">
            <h5 className="mb-5 text-center text-accent">বিজ্ঞাপন</h5>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
