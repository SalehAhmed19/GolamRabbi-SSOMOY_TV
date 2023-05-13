import React from "react";
import { Fade } from "react-reveal";
import media from "../../assets/images/media.jpg";
import CourseCard from "./CourseCard";

function MediaCourses() {
  const arr = [media, media, media, media, media, media, media, media];
  return (
    <div className="lg:px-24 py-10">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          মিডিয়া কোর্স
        </h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {arr.map((a, idx) => (
          <div className="cursor-pointer" key={idx}>
            <CourseCard course={a} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaCourses;
