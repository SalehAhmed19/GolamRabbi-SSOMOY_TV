import React from "react";

const BlogsHeading = ({ headline, heading, date, editor }) => {
  return (
    <div className="border-b border-[#333] my-10">
      <h4 className="text-primary pt-20 text-xl">{heading}</h4>
      <h1 className="text-4xl font-bold my-5 text-basic">{headline}</h1>
      <h3 className="text-accent font-bold text-xl">{editor}</h3>
      <h3 className="text-accent text-xl my-5">{date}</h3>
    </div>
  );
};

export default BlogsHeading;
