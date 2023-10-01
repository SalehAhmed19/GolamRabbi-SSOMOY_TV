import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import bg from "../../../assets/images/event-bg.jpg";
import AnnsEventsModal from "../Modals/AnnsEventsModal";

const AnnsEventCard = ({ event }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 0 0 0 2000px rgba(255, 0, 150, 0.1)",
          opacity: 0.9,
        }}
        className="text-basic p-5 rounded-md"
      >
        <div>
          <h3 className="font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] text-white">
            {event.title}
          </h3>
          <h4 className="font-bold drop-shadow-xl 2xs:text-[12px] text-2xl">
            {event.date}
          </h4>
          <p className="my-3 flex items-center 2xs:text-[12px]">
            <AiOutlineClockCircle className="mr-3 " />
            {event.startingTime} - {event.endingTime}
          </p>
          <p className="my-3 flex items-center 2xs:text-[12px]">
            <MdLocationOn className="mr-3" />
            {event.location}
          </p>
        </div>
        <button
          onClick={() => setOpenModal(!openModal)}
          style={{ fontFamily: "Hind Siliguri" }}
          className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#AF1453] hover:bg-[#AF1453] sm:w-[180px] md:w-[260px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
        >
          বুক করো এখনি
        </button>
      </div>
      {openModal && (
        <AnnsEventsModal
          event={event}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default AnnsEventCard;
