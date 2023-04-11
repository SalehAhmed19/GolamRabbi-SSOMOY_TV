import React from "react";
import { Fade } from "react-reveal";
import img from "../../assets/images/gr1.jpg";
import ShortBio from "./ShortBio";

function Invite() {
  const longText =
    "I Golam Rabby would like to learn from everywhere even it may be from my junior, uneducated & general people like Rickshaw-Puller. In addition, I have much affection for teaching & facilitating a class, discussion, and seminar as well. Also, I am very fond of knowing about Bangladesh & World Affairs; especially on Youth activities as well as Dream, Ethical, Positive, Inspiring & Energizing words & works. I am a Founder of Dream Deviser, it’s a Good Education related Online Tutorial Platform As well as I am doing as Senior News Anchor & Radio Jockey in various Radio & TV Channel. Also, I am working as a Lead Feature Writer to weekly job related supplement named Chakrir Khoj in the Daily Jugantor. And, I am working as a Senior News Presenter & Current Affairs related talk show Anchor in Somoy Television. Before that, I had been working here as a Senior Newsroom Editor in International Desk from 1st December, 2010 to 20th November, 2014. Also, I am working as a Media, Communications & Current Affairs Consultant. As well, I have completed BSS and MSS degree in the Department of International Relations with very good result from University of Dhaka. Also, I have vast experience about Education, Teaching, Training, Media, Public Relations, Media Managing, and Consulting of News & Program. Plus, very important thing is that I am an experienced teaching assistant of Journalism, Public Relations and Communications. Now-a-days, I am attending as a Senior Trainer of Inspiration & Motivation, News, Program Presentation, Report Writing, Debating & Creative Workshop, Media & Communications Schooling, Youth Leadership and Skill Development course in various renowned Institutions. Personally, I love to learn, discover and write. Furthermore I have very passion to teach through entertaining by using my knowledge and behavior. On the other hand, I am more interested to attach myself as a development worker of Public engagement related Advocacy, Civil Society, Democracy, Good Governance, Youth, Woman Engagement & Empowerment and related work. Finally, I would like to say that, always, I could keep busy my soul with PEOPLE specially youth-minds and their development. Truly speaking, all time, I am eagerly waiting for joining Training, Seminar, Discussion’s Session, Workshop or Event either an Instructor or a Participant. Because of, I want to learn the lot from all over the place.";
  return (
    <div className="lg:mx-20 mx-5 my-14">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold my-5">
          আমা ইনভাইট করতে
        </h1>
      </Fade>
      <div>
        <div className="flex justify-center">
          <button
            style={{ borderRadius: "10px 0px" }}
            className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 lg:mx-5 mx-1 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center"
          >
            সর্ট বায়ো
          </button>
          <button
            style={{ borderRadius: "10px 0px" }}
            className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 lg:mx-5 mx-1 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center"
          >
            সর্ট বায়ো
          </button>
          <button
            style={{ borderRadius: "10px 0px" }}
            className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 lg:mx-5 mx-1 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center"
          >
            সর্ট বায়ো
          </button>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center text-basic">
          <div>
            <img className="rounded-md mt-10 lg:mt-0" src={img} alt="" />
          </div>
          <div className="bg-[#222] w-full lg:mr-5 rounded-md p-5">
            <h3 className="font-bold text-2xl mb-5">ইনভাইট</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nostrum aut rerum corrupti saepe quis atque tempore
              voluptatibus, ea sunt aperiam consectetur voluptatum culpa autem
              ab! Quisquam deserunt omnis maiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
