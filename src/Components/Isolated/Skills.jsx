import React from "react";
import { GiLifeBar, GiPublicSpeaker } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi";
import { Fade, Zoom } from "react-reveal";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/Skills.css";

function Skills() {
  const skills = [
    { _id: 1, skill: "মাষ্টার অব সেরেমনি, MC", icon: <HiNewspaper /> },
    { _id: 2, skill: "ফিচার এন্ড কন্টেন্ট রাইটিং", icon: <HiNewspaper /> },
    { _id: 3, skill: "পিআর, ব্র্যান্ডিং কন্সাল্টিং", icon: <HiNewspaper /> },
    { _id: 4, skill: "ট্রেনিং", icon: <HiNewspaper /> },
    { _id: 5, skill: "লাইফ কোচ", icon: <GiLifeBar /> },
    { _id: 6, skill: "ইন্সপায়রেশনাল স্পিকার", icon: <GiPublicSpeaker /> },
    { _id: 7, skill: "ওয়্যারফ্রেম ডিজাইন", icon: <HiNewspaper /> },
  ];
  const animation = { duration: 10000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="lg:px-24 pt-14 pb-64 text-[#fff]">
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          স্কিল সমূহ
        </h2>
      </Fade>
      {/* <div className="flex flex-col lg:flex-row items-center gap-5 mx-5">
        {skills.slice(0, 4).map((skill) => (
          <Zoom>
            <div
              key={skill._id}
              className="flex flex-col justify-center items-center p-5 shadow-lg shadow-[#0000005c] rounded-md lg:w-96 w-80"
            >
              <h3 className="text-primary text-5xl my-5">{skill.icon}</h3>
              <h2 className="text-[#fff] text-2xl">{skill.skill}</h2>
            </div>
          </Zoom>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center my-5">
        {skills.slice(4, 8).map((skill) => (
          <Zoom>
            <div
              key={skill._id}
              className="flex flex-col justify-center lg:w-96 w-80 items-center p-5 shadow-lg shadow-[#0000005c] rounded-md"
            >
              <h3 className="text-primary text-5xl my-5">{skill.icon}</h3>
              <h2 className="text-[#fff] text-2xl">{skill.skill}</h2>
            </div>
          </Zoom>
        ))}
      </div> */}
      <div ref={sliderRef} className="keen-slider">
        {skills.map((skill, idx) => (
          <div key={idx} className="keen-slider__slide py-4">
            <div className="flex flex-col justify-center lg:w-80 items-center p-5 shadow-lg shadow-[#0000005c] rounded-md">
              <h3 className="text-primary text-5xl my-5">{skill.icon}</h3>
              <h2 className="text-[#fff] text-2xl">{skill.skill}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
