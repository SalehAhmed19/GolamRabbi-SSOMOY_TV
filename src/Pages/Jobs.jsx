import React, { useState } from "react";
import { Fade } from "react-reveal";
import JobCard from "../Components/Isolated/Cards/JobCard";
import JobsApplyModal from "../Components/Isolated/Modals/JobsApplyModal";
import jobImage from "../assets/images/Job.png";

function Jobs() {
  const medialJobCirculars = [
    {
      id: 1,
      position: "সাংবাদিক ১",
      organization: "সময় টিভি ১",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 2,
      position: "সাংবাদিক ২",
      organization: "সময় টিভি ২",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 3,
      position: "সাংবাদিক ৩",
      organization: "সময় টিভি ৩",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 4,
      position: "সাংবাদিক ৪",
      organization: "সময় টিভি ৪",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 5,
      position: "সাংবাদিক ৫",
      organization: "সময় টিভি ৫",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 6,
      position: "সাংবাদিক ৬",
      organization: "সময় টিভি ৬",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 7,
      position: "সাংবাদিক ৭",
      organization: "সময় টিভি ৭",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
    {
      id: 8,
      position: "সাংবাদিক ৮",
      organization: "সময় টিভি ৮",
      lastDate: "১০.১০.২৩",
      image: jobImage,
    },
  ];
  return (
    <div className="pb-36">
      <div className="lg:py-20 py-10 lg:mx-20 mx-5">
        <Fade down>
          <h2 className="text-center text-4xl font-bold text-primary py-14 my-5">
            চাকুরী সমূহ
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {medialJobCirculars.map((circulars, index) => (
            <JobCard circulars={circulars} key={index}/>
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default Jobs;
