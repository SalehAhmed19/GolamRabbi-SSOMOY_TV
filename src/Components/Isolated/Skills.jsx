import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { Zoom } from "react-reveal";
import "../../Styles/Skills.css";
import bio from "../../assets/SVGs/bio-interview.png";
import cv from "../../assets/SVGs/cv-writting.png";
import feature from "../../assets/SVGs/feature-writting.png";
import pr from "../../assets/SVGs/pr.png";
import goal from "../../assets/SVGs/set-goal.png";
import training from "../../assets/SVGs/training.png";
import instructor from "../../assets/images/instructor-3.png";
function Skills() {
  const skills = [
    { _id: 1, title: "মাষ্টার অব সেরেমনি, MC", icon: bio },
    { _id: 2, title: "ফিচার এন্ড কন্টেন্ট রাইটিং", icon: feature },
    { _id: 3, title: "পিআর, ব্র্যান্ডিং কন্সাল্টিং", icon: pr },
    { _id: 4, title: "ট্রেনিং", icon: training },
    { _id: 5, title: "লাইফ কোচ", icon: goal },
    { _id: 6, title: "ইন্সপায়রেশনাল স্পিকার", icon: bio },
    { _id: 7, title: "ওয়্যারফ্রেম ডিজাইন", icon: cv },
  ];
  const animation = { duration: 15000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
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
    <div style={{ fontFamily: "Hind Siliguri" }} className="">
      {/* <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          স্কিল সমূহ
        </h2>
      </Fade> */}
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
      {/* <div ref={sliderRef} className="keen-slider bg-[#1618D]">
        {skills.map((skill, idx) => (
          <div key={idx} className="keen-slider__slide">
            <div className="flex flex-col justify-center lg:w-80 h-36 items-center p-5 border-2 border-[#111110] rounded-lg bg-[#111118]">
              <img className="w-9 mb-3" src={skill.icon} alt="" />
              <h2 className="text-secondary 2xs:text-[14px] xs:text-[15px] sm:text-[16]">
                {skill.skill}
              </h2>
            </div>
          </div>
        ))}
      </div>  */}

      <div
        style={{ fontFamily: "Hind Siliguri" }}
        className="flex justify- items-center flex-col lg:flex-row"
      >
        {/* left  */}
        <div>
          <Zoom>
            <img src={instructor} alt="" className="w-[400px]" />
          </Zoom>
        </div>
        {/* right  */}
        <div className="md:w-[600px] lg:w-[500px] xl:w-[80%]">
          {/* row 1 */}
          <div className="md:flex md:flex-row md:justify-center gap-5 mt-10 mb-5 2xs:space-y-5 xs:space-y-5">
            {skills.slice(0, 2)?.map((d) => (
              <Zoom>
                <div
                  key={d._id}
                  className="w-[139px] h-[118px] shadow-lg rounded-lg lg:w-48 flex flex-col justify-center items-center bg-white"
                >
                  <img className="w-9 mb-3" src={d.icon} alt="" />
                  <h3 className="2xs:text-[14px] xs:text-[15px] sm:text-[16] text-secondary font-bold text-center">
                    {d.title}
                  </h3>
                  <p>
                    {d.list?.map((list, idx) => (
                      <p key={idx}>{list}</p>
                    ))}
                  </p>
                </div>
              </Zoom>
            ))}
          </div>
          {/* row 2 */}
          <div className="md:flex md:flex-row justify-center gap-5 my-5 2xs:space-y-5 xs:space-y-5">
            {skills.slice(2, 6)?.map((d) => (
              <Zoom>
                <div
                  key={d._id}
                  className="w-[139px] h-[118px] shadow-lg  rounded-lg lg:w-48 flex flex-col justify-center items-center bg-white"
                >
                  <img className="w-9 mb-3" src={d.icon} alt="" />
                  <h3 className="2xs:text-[14px] xs:text-[15px] sm:text-[16] text-secondary font-bold text-center">
                    {d.title}
                  </h3>
                  <>
                    {d.list?.map((list, idx) => (
                      <p key={idx}>{list}</p>
                    ))}
                  </>
                </div>
              </Zoom>
            ))}
          </div>
          {/* row 3 */}
          <div className="md:flex md:flex-row justify-center gap-5 my-5 2xs:space-y-5 xs:space-y-5">
            {skills.slice(6, 9)?.map((d) => (
              <Zoom>
                <div
                  key={d._id}
                  className="w-[139px] h-[118px] shadow-lg rounded-lg lg:w-48 flex flex-col justify-center items-center bg-white"
                >
                  <img
                    className="w-9 mb-3 md:m-1 pt-1.5 lg:mb-3"
                    src={d.icon}
                    alt=""
                  />
                  <h3 className="pb-1 2xs:text-[14px] xs:text-[15px] sm:text-[16] text-secondary font-bold text-center">
                    {d.title}
                  </h3>
                  <>
                    {d.list?.map((list, idx) => (
                      <p key={idx}>{list}</p>
                    ))}
                  </>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
