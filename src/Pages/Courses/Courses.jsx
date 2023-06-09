import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import "../../Styles/Events.css";
import leadership from "../../assets/images/leadership.jpg";
import life from "../../assets/images/life.jpg";
import media from "../../assets/images/media.jpg";
import CourseCard from "./CourseCard";

function Courses() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    slides: { perView: 1 },
    created() {
      setLoaded(true);
    },
  });
  const allCoursesData = [
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
    },
    {
      _id: 2,
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
    {
      _id: 3,
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
    <div className="lg:px-24 py-20">
      <Fade down>
        <h2 className="text-center text-4xl font-bold text-primary pt-14 my-5">
          কোর্স সমূহ
        </h2>
      </Fade>

      {allCoursesData.map((courses) => (
        <div className="mt-10 mx-5 lg:mx-0" key={courses._id}>
          <h3 className="text-primary text-2xl font-bold my-5">
            {courses.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* this map for mediaCourses  */}
            {courses?.mediaCourse?.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
              />
            ))}
            {/* this map for leadershipCourses  */}
            {courses?.leadershipCourse?.map((course,index) => (
              <CourseCard
                key={index}
                course={course}
              />
            ))}
            {/* this map for lifeCourses  */}
            {courses?.lifeCourse?.map((course,index) => (
              <CourseCard
                key={index}
                course={course}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
