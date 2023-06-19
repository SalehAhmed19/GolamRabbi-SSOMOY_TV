import React from "react";
import { Fade } from "react-reveal";
import leadership from "../../assets/images/leadership.jpg";
import CourseCard from "./CourseCard";

const LeadershipCourses = () => {
   const allLeaderShipCoursesData = [
     {
       _id: 1,
       title: "লিডারশীপ কোর্স",
       leadershipCourse: [
         {
           name: "Leadership Mastery: Unlocking Your Full Potential",
           img: leadership,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
         {
           name: "The Art of Effective Leadership: Inspire, Influence, and Impact",
           img: leadership,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
         {
           name: "Leading with Purpose: Guiding Others Towards Success",
           img: leadership,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
         {
           name: "Strategic Leadership: Navigating Complexity and Driving Results",
           img: leadership,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
       ],
     },
    
   ];
  return (
    <div className="lg:px-24 py-10">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          লিডারশীপ কোর্স
        </h2>
      </Fade>
      <div className="">
        {allLeaderShipCoursesData.map((courses) => (
          <div className="mt-10 mx-5 lg:mx-0" key={courses._id}>
            <h3 className="text-primary text-2xl font-bold my-5">
              {courses.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* this map for leadershipCourses  */}
              {courses?.leadershipCourse?.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipCourses;
