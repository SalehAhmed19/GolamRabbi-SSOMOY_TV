import React from "react";
import { Fade } from "react-reveal";
import JobCard from "../Components/Isolated/Cards/JobCard";
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
    <div>
      <div className="lg:px-24 py-20 p-5 pb-36">
        <Fade down>
          <h2 className="mt-5 md:mt-20 mb-5  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center font-bold">
            চাকুরী সমূহ
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {medialJobCirculars.map((circulars, index) => (
            <JobCard circulars={circulars} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
