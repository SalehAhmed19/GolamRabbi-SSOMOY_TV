import React from "react";
import BlogsHeading from "../../Components/Isolated/BlogsComponents/BlogsHeading";
import BlogsSubHeading from "../../Components/Isolated/BlogsComponents/BlogsSubHeading";
import BlogContent from "../../Components/Isolated/BlogsComponents/BlogContent";
import BlogsAdd from "../../Components/Isolated/BlogsComponents/BlogsAdd";
import MoreBlogsVertical from "../../Components/Isolated/BlogsComponents/MoreBlogsVertical";
import CommentBox from "../../Components/Isolated/BlogsComponents/CommentBox";
import SocialMedia from "../../Components/Isolated/SocialMedia";
import { useParams } from "react-router-dom";

const data = [
  { id: 1, country: "Austria" },
  { id: 2, country: "Germany" },
  { id: 3, country: "Austria" },
];

function Blog1() {
  const { id } = useParams();
  return (
    <div className="lg:py-24 lg:mx-20 mx-5">
      <BlogsHeading />
      {id}
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
      <CommentBox />
      <SocialMedia />
    </div>
  );
}

export default Blog1;
