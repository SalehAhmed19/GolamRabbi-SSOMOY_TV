import React from "react";
import { Fade } from "react-reveal";
import CourseCard from "../../Components/Isolated/Cards/CourseCard";
import life from "../../assets/images/life.jpg";



const LifeCourses = () => {
   const allLifeCoursesData = [
     {
       _id: 1,
       title: "লাইফ কোর্স",
       lifeCourse: [
         {
           name: "Life Mastery: Unlocking Your Full Potential",
           img: life,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
         {
           name: "The Art of Living: Cultivating a Fulfilling and Balanced Life",
           img: life,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
         {
           name: "Personal Growth and Development: Nurturing Your Best Self",
           img: life,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
         {
           name: "Discovering Your Life's Purpose: Aligning Passion and Meaning",
           img: life,
           des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
         },
       ],
     },
   ];
  return (
    <div className="lg:px-24 py-10">
      <Fade down>
        <h2 className="mt-10 md:mt-20 mb-5  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center font-bold">
          লাইফ কোর্স
        </h2>
      </Fade>
      <div className="">
        {allLifeCoursesData.map((courses) => (
          <div className="mt-10 mx-5 lg:mx-0" key={courses._id}>
            {/* <h3 className="text-primary text-2xl font-bold my-5">
              {courses.title}
            </h3> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* this map for lifeCourses  */}
              {courses?.lifeCourse?.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeCourses;
