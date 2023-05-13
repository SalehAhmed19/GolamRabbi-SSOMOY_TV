import React from "react";
import { Fade } from "react-reveal";
import life from "../../assets/images/life.jpg";
import CourseCard from "./CourseCard";

function LifeCourses() {
  const arr = [life, life, life, life, life, life, life, life];
  return (
    <div className="lg:px-24 py-10">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          লাইফ কোর্স
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

export default LifeCourses;
