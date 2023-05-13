import React from "react";
import { Fade } from "react-reveal";
import leadership from "../../assets/images/leadership.jpg";
import CourseCard from "./CourseCard";

function LeadershipCourses() {
  const arr = [
    leadership,
    leadership,
    leadership,
    leadership,
    leadership,
    leadership,
    leadership,
    leadership,
  ];
  return (
    <div className="lg:px-24 py-10">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          লিডারশীপ কোর্স
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

export default LeadershipCourses;
