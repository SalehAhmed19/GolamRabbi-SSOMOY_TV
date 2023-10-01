import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Zoom } from "react-reveal";
import EventRegistrationModal from "../Modals/EventRegistrationModal";
const EventsCard = ({ evened }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  return (
    <>
      <div className="-p-5 flex items-center flex-col md:flex-row">
        <div className="mb-8 md:mb-0 text-primary mr-5 border-2 bg-white text-secondary shadow-xl p-5  rounded-md">
          <h2
            className="2xs:text-[36px] text-6xl font-bold drop-shadow-lg"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            {evened?.date}
          </h2>
          <p
            className="text-center text-black font-bold"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            {evened?.month}
          </p>
        </div>
        <div>
          <h4 className="my-3 font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white">
            {evened?.title}
          </h4>
          <hr />
          <p className="my-3 flex items-center text-[#c5c5c5] 2xs:text-[12px]">
            <AiOutlineClockCircle className="mr-2" />
            {evened?.startingTime} ঘটিকা - {evened?.endingTime} ঘটিকা
          </p>
          <p className="my-3 flex items-center text-[#c5c5c5] 2xs:text-[12px]">
            <MdLocationOn className="mr-2" />
            {evened?.location}
          </p>
        </div>
      </div>
      <div className="my-5 select-none">
        <p className="font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
          আমার জীবনের বাস্তব অভিজ্ঞতা নিয়ে কথা হবে তোমাদের সাথে...
        </p>
        <Zoom>
          <button
            onClick={handleOpenModal}
            style={{ fontFamily: "Hind Siliguri" }}
            className={`block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#fff] hover:bg-[#fff] hover:text-[#f40a5c] sm:w-[180px] md:w-[290px] text-center rounded-full font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]`}
          >
            এখনই রেজিস্ট্রেশন করুন
          </button>
        </Zoom>
      </div>
      <EventRegistrationModal
        evened={evened}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default EventsCard;
