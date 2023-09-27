import React, { useState } from "react";
import { Fade } from "react-reveal";
import JobsApplyModal from "../Components/Isolated/Modals/JobsApplyModal";
import job from "../assets/images/Job.png";

function Jobs() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [openModal, setOpenModal] = useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
  return (
    <div className="pb-36">
      <div className="lg:py-20 py-10 lg:mx-20 mx-5">
        <Fade down>
          <h2 className="text-center text-4xl font-bold text-primary py-14 my-5">
            চাকুরী সমূহ
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {arr.map((a, idx) => (
            <div key={idx} className="relative rounded-lg bg-[#222]">
              <img src={job} className="rounded-t-lg" alt="" />
              <div className="text-basic p-5">
                <h3 className="">
                  <span className="font-bold">পদবিঃ </span> সাংবাদিক
                </h3>
                <p>
                  <span className="font-bold">আবেদনের শেষ তারিখঃ </span>{" "}
                  সাংবাদিক
                </p>
                <p>
                  <span className="font-bold">প্রতিষ্ঠানঃ </span> সময় টিভি
                </p>
              </div>
              {/* <div className="flex justify-center items-center pb-3">
                <button
                  onClick={handleModalOpen}
                  className=" py-1 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[190px] text-center rounded-full text-[#fff] font-bold"
                >
                  আবেদন করো এখনি
                </button>
              </div> */}
              <div className="flex justify-center items-center pb-3">
                <button
                  onClick={handleModalOpen}
                  className="2xs:my-4 xs:my-6 sm:my-8  py-2 px-2 border-2 border-[#f40a5c] hover:bg-[#f40a5c] sm:w-[180px] 2xl:w-[230px] 3xl:w-[280px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
                >
                  আবেদন করো এখনি
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JobsApplyModal
        arr={arr}
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleModalClose={handleModalClose}
      />
    </div>
  );
}

export default Jobs;
