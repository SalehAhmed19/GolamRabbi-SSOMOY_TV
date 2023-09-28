import React, { useState } from "react";
import { Link } from "react-router-dom";
import MediaJobModal from "../Modals/MediaJobModal";

const MediaJobCard = ({ circulars }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div key={circulars.id} className="relative rounded-lg bg-[#222]">
        <Link to={`/jobs/${circulars.id}`}>
          <img src={circulars.image} alt="" className="rounded-t-lg" />
        </Link>
        <div className="text-basic p-5">
          <h3>
            <span className="font-bold">পদবিঃ </span> {circulars.position}
          </h3>
          <p>
            <span className="font-bold">আবেদনের শেষ তারিখঃ </span>{" "}
            {circulars.lastDate}
          </p>
          <p>
            <span className="font-bold">প্রতিষ্ঠানঃ </span>{" "}
            {circulars.organization}
          </p>
        </div>
        <div className="flex justify-center items-center pb-3">
          <button
            onClick={() => setOpenModal(true)}
            className="2xs:my-4 xs:my-6 sm:my-8  py-2 px-2 border-2 border-[#AF1453] hover:bg-[#AF1453] sm:w-[180px] 2xl:w-[230px] 3xl:w-[280px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            আবেদন করো এখনি
          </button>
        </div>
      </div>
      {openModal && (
        <MediaJobModal
          circulars={circulars}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default MediaJobCard;
