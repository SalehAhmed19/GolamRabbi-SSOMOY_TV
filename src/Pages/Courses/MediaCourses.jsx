import React from "react";
import { Fade } from "react-reveal";
import CourseCard from "../../Components/Isolated/Cards/CourseCard";
import media from "../../assets/images/media.jpg";


const MediaCourses = () => {
  const allMediaCoursesData = [
    {
      _id: 1,
      title: "মিডিয়া কোর্স",
      mediaCourse: [
        {
          name: "Media Mastery: Unleashing the Power of Communication",
          img: media,
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
        },
        {
          name: "Digital Storytelling: Crafting Compelling Media Narratives",
          img: media,
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
        },
        {
          name: "Media Evolution: Adapting to the Digital Landscape",
          img: media,
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
        },
        {
          name: "Media Magic: The Art and Science of Engaging Audiences",
          img: media,
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, excepturi.",
        },
      ],
    }
  ];

 return (
   <div className="lg:px-24 py-10">
     <Fade down>
       <h2 className="mt-10 md:mt-20 mb-5  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center font-bold">
         মিডিয়া কোর্স
       </h2>
     </Fade>
     <div className="">
       {allMediaCoursesData.map((courses) => (
         <div className="mt-10 mx-5 lg:mx-0" key={courses._id}>
           {/* <h3 className="text-primary text-2xl font-bold my-5">
             {courses.title}
           </h3> */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             {/* this map for mediaCourses  */}
             {courses?.mediaCourse?.map((course, index) => (
               <CourseCard key={index} course={course} />
             ))}
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};

export default MediaCourses;
