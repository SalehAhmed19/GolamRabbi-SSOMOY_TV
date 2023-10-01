import React, { useState } from "react";
import { Zoom } from "react-reveal";
import AboutTabs from "./Tabs/AboutTabs";
function About() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const longText =
    "I Golam Rabby would like to learn from everywhere even it may be from my junior, uneducated & general people like Rickshaw-Puller. In addition, I have much affection for teaching & facilitating a class, discussion, and seminar as well. Also, I am very fond of knowing about Bangladesh & World Affairs; especially on Youth activities as well as Dream, Ethical, Positive, Inspiring & Energizing words & works. I am a Founder of Dream Deviser, it’s a Good Education related Online Tutorial Platform As well as I am doing as Senior News Anchor & Radio Jockey in various Radio & TV Channel. Also, I am working as a Lead Feature Writer to weekly job related supplement named Chakrir Khoj in the Daily Jugantor. And, I am working as a Senior News Presenter & Current Affairs related talk show Anchor in Somoy Television. Before that, I had been working here as a Senior Newsroom Editor in International Desk from 1st December, 2010 to 20th November, 2014. Also, I am working as a Media, Communications & Current Affairs Consultant. As well, I have completed BSS and MSS degree in the Department of International Relations with very good result from University of Dhaka. Also, I have vast experience about Education, Teaching, Training, Media, Public Relations, Media Managing, and Consulting of News & Program. Plus, very important thing is that I am an experienced teaching assistant of Journalism, Public Relations and Communications. Now-a-days, I am attending as a Senior Trainer of Inspiration & Motivation, News, Program Presentation, Report Writing, Debating & Creative Workshop, Media & Communications Schooling, Youth Leadership and Skill Development course in various renowned Institutions. Personally, I love to learn, discover and write. Furthermore I have very passion to teach through entertaining by using my knowledge and behavior. On the other hand, I am more interested to attach myself as a development worker of Public engagement related Advocacy, Civil Society, Democracy, Good Governance, Youth, Woman Engagement & Empowerment and related work. Finally, I would like to say that, always, I could keep busy my soul with PEOPLE specially youth-minds and their development. Truly speaking, all time, I am eagerly waiting for joining Training, Seminar, Discussion’s Session, Workshop or Event either an Instructor or a Participant. Because of, I want to learn the lot from all over the place.";
  return (
    <div className="bg-primary p-5 md:p-16">
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-4 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
        আমার সম্পর্কে
      </h1>
      <Zoom>
        <h1 className="text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
          আমার সম্পর্কে
        </h1>
      </Zoom>
      <AboutTabs />
    </div>
  );
}

export default About;
