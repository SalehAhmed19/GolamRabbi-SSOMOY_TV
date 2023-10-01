import React from "react";
import inviteImage from "../assets/images/about-1.png";
import signatureImage from "../assets/images/signeture.webp";
const InvitePage = () => {
  const invite = {
    id: 1,
    name: "Golam Rabby",
    stroke: "ইনভাইট",
    title: "ইনভাইট",
    image: inviteImage,
    signatureImage: signatureImage,
    description1:
      " would like to learn from everywhere even it may be from my junior, uneducated & general people like Rickshaw-Puller. In addition, I have much affection for teaching & facilitating a class, discussion, and seminar as well. Also, I am very fond of knowing about Bangladesh & World Affairs; especially on Youth activities as well as Dream, Ethical, Positive, Inspiring & Energizing words & works.",
    description2:
      "I am a Founder of Dream Deviser, it’s a Good Education related Online Tutorial Platform As well as I am doing as Senior News Anchor & Radio Jockey in various Radio & TV Channel. Also, I am working as a Lead Feature Writer to weekly job related supplement named Chakrir Khoj in the Daily Jugantor. And, I am working as a Senior News Presenter & Current Affairs related talk show Anchor in Somoy Television. Before that, I had been working here as a Senior Newsroom Editor in International Desk from 1st December, 2010 to 20th November, 2014.",
    description3:
      "Also, I am working as a Media, Communications & Current Affairs Consultant. As well, I have completed BSS and MSS degree in the Department of International Relations with very good result from University of Dhaka. Also, I have vast experience about Education, Teaching, Training, Media, Public Relations, Media Managing, and Consulting of News & Program. Plus, very important thing is that I am an experienced teaching assistant of Journalism, Public Relations and Communications.",
    description4:
      "Now-a-days, I am attending as a Senior Trainer of Inspiration & Motivation, News, Program Presentation, Report Writing, Debating & Creative Workshop, Media & Communications Schooling, Youth Leadership and Skill Development course in various renowned Institutions. Personally, I love to learn, discover and write. Furthermore I have very passion to teach through entertaining by using my knowledge and behavior.",
    description5:
      "On the other hand, I am more interested to attach myself as a development worker of Public engagement related Advocacy, Civil Society, Democracy, Good Governance, Youth, Woman Engagement & Empowerment and related work. Finally, I would like to say that, always, I could keep busy my soul with PEOPLE specially youth-minds and their development. Truly speaking, all time, I am eagerly waiting for joining Training, Seminar, Discussion’s Session, Workshop or Event either an Instructor or a Participant. Because of, I want to learn the lot from all over the place.",
    position: "Sr. News Presentor",
    organization: "SOMOY TV",
  };

  return (
    <div className="bg-primary" style={{ fontFamily: "Hind Siliguri" }}>
      <div className="relative">
        <div className="pr-8 absolute right-0 top-8 2xs:mt-5">
          <h1 className="2xs:mr-[65px] xs:mr-[140px] md:mt-[80px] lg:-mb-20  custom-text-stroke-4 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
            {invite?.stroke}
          </h1>
          <h2 className="lg:ml-[180px] invisible lg:visible md:text-[23px] lg:text-[41px] font-bold">
            {invite?.title}
          </h2>
          {/* <h3 className="invisible lg:visible  lg:-mt-1 lg:ml-[465px] 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold">
            {invite?.subTitle}
          </h3> */}
        </div>
      </div>
      {/* content */}
      <div className="p-5 2xs:mt-[10px] mt-[30px]">
        <div className="2xs:mt-5 2xs:text-justify lg:mt-[240px]">
          <div className="lg:flex lg:justify-center lg:items-center">
            <img
              className="2xs:mt-[70px] xs:mt-[50px] md:mt-[50px] mb-2 mx-[10px] lg:-mt-[250px] w-[396px]"
              src={invite?.image}
              alt=""
            />
            <p className="2xs:text-[12px] lg:w-[75%] lg:mt-[50px] lg:mr-5">
              <span className="font-bold"> I {invite?.name}</span> &nbsp;
              {invite.description1}
            </p>
          </div>
        </div>
        <div className="mt-5 2xs:text-justify lg:mt-[50px]">
          <p className="2xs:text-[12px]">{invite.description2}</p>
        </div>
        <div className="mt-5 2xs:text-justify lg:mt-[50px]">
          <p className="2xs:text-[12px]">{invite.description3}</p>
        </div>
        <div className="mt-5 2xs:text-justify lg:mt-[50px]">
          <p className="2xs:text-[12px]">{invite.description4}</p>
        </div>
        <div className="mt-5 2xs:text-justify lg:mt-[50px]">
          <p className="2xs:text-[12px]">{invite.description5}</p>
        </div>
        <div className="mt-5 2xs:text-justify lg:mt-[50px]">
          <img
            src={invite?.signatureImage}
            alt=""
            className="2xs:my-2 w-40 bg-black"
          />
          <p className="mt-1 font-bold 2xs:text-[12px]">{invite?.name}</p>
          <p className="2xs:text-[12px] mt-1">
            {invite?.position}, &nbsp;
            <span className="font-bold">{invite.organization}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitePage;
