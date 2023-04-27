import React from "react";
import { Fade } from "react-reveal";
import media from "../../assets/images/MediaSB.jpg";
import leadership from "../../assets/images/LeadershipSB.jpg";
import life from "../../assets/images/LifecourseSB.jpg";
import { FiClock } from "react-icons/fi";
import CourseCard from "./CourseCard";

function Courses() {
  //   const courses = [{ img: media }, { img: leadership }, { img: life }];
  const mediaCourse = [
    { img: media },
    { img: media },
    { img: media },
    { img: media },
  ];
  const leadershipCourse = [
    { img: leadership },
    { img: leadership },
    { img: leadership },
    { img: leadership },
  ];
  const lifeCourse = [
    { img: life },
    { img: life },
    { img: life },
    { img: life },
  ];
  return (
    <div className="lg:px-24 py-20">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          কোর্স সমূহ
        </h2>
      </Fade>
      <div className="mt-10 mx-5 lg:mx-0">
        <h3 className="text-primary text-2xl font-bold my-5">মিডিয়া কোর্স</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {mediaCourse.map((course, idx) => (
            <div className="cursor-pointer" key={idx}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-primary text-2xl font-bold my-5">লিডারশীপ কোর্স</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {leadershipCourse.map((course, idx) => (
            <div className="cursor-pointer" key={idx}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-primary text-2xl font-bold my-5">লাইফ কোর্স</h3>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {lifeCourse.map((course, idx) => (
            <div className="cursor-pointer" key={idx}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
