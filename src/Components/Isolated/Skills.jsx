import React from "react";
import { GiLifeBar, GiPublicSpeaker } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi";
import { Fade, Zoom } from "react-reveal";

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
  return (
    <div className="lg:px-24 pt-14 pb-64 text-[#fff]">
      <Fade down>
        <h2 className="text-center text-4xl font-bold mb-5 text-primary">
          স্কিল সমূহ
        </h2>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-5">
        {skills.map((skill) => (
          <Zoom>
            <div
              key={skill._id}
              className="flex flex-col justify-center items-center p-5 shadow-lg shadow-[#0000005c] rounded-md"
            >
              <h3 className="text-primary text-5xl my-5">{skill.icon}</h3>
              <h2 className="text-[#fff] text-2xl">{skill.skill}</h2>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Skills;
