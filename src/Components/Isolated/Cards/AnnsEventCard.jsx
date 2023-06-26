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
        }}
        className="text-basic p-5 rounded-md"
      >
        <div>
          <h3 className="text-primary font-bold text-2xl">{event.title}</h3>
          <h4 className="text-primary text-2xl">{event.date}</h4>
          <p className="my-3 flex items-center">
            <AiOutlineClockCircle className="mr-3" />
            {event.startingTime} - {event.endingTime}
          </p>
          <p className="my-3 flex items-center">
            <MdLocationOn className="mr-3" />
            {event.location}
          </p>
        </div>
        <button
          onClick={() => setOpenModal(!openModal)}
          className="block mx-auto mt-2 py-1 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[190px] text-center rounded-full text-[#fff] font-bold"
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
