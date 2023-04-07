import React from "react";
import img1 from "../../../assets/images/blogh.png";

const BlogsSubHeading = () => {
  return (
    <div className="border-b border-[#333] mb-10">
      <img src={img1} alt="" />
      <div className="flex items-center text-accent my-10 text-sm justify-between">
        <p className="mr-14">
          লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ এ
          তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশি
          বেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে
          ৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ও
          তাইওয়ানের আছে ৪টি করে কারখানা।
        </p>
        <p>| ছবিঃ সংগৃহীত</p>
      </div>
    </div>
  );
};

export default BlogsSubHeading;
