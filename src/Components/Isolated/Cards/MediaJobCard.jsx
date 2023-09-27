import React, { useState } from "react";
import { Link } from "react-router-dom";
import MediaJobModal from "../Modals/MediaJobModal";

const MediaJobCard = ({ circulars }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div key={circulars} className="relative rounded-lg bg-[#222]">
        <Link to={`/jobs/${circulars.id}`}>
          <img src={circulars.image} alt="" className="rounded-t-lg" />
        </Link>
        <div className="text-basic p-5">
          <h3>
            <span className="font-bold">পদবিঃ </span> সাংবাদিক
          </h3>
          <p>
            <span className="font-bold">আবেদনের শেষ তারিখঃ </span> সাংবাদিক
          </p>
          <p>
            <span className="font-bold">প্রতিষ্ঠানঃ </span> সময় টিভি
          </p>
        </div>
        <div className="flex justify-center items-center pb-3">
          <button
            onClick={() => setOpenModal(true)}
            className="2xs:my-4 xs:my-6 sm:my-8  py-2 px-2 border-2 border-[#f40a5c] hover:bg-[#f40a5c] sm:w-[180px] 2xl:w-[230px] 3xl:w-[280px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
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
