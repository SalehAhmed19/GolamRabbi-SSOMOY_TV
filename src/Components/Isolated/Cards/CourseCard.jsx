import React, { useState } from "react";
import CoursesModal from "../Modals/CoursesModal";
function CourseCard({ course }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={`shadow-lg rounded-lg bg-[#ffffff0f] overflow-hidden`}>
      <img className="w-full" src={course.img} alt="random image" />
      <div className="p-4">
        <p className="text-white font-bold 2xs:text-[12px] text-base mb-2">
          {course.name}
        </p>
        <p className="text-gray-500 2xs:text-[12px] text-sm mb-4">
          {course.des}
        </p>
        <div className="sm:flex items-center justify-between">
          <h4 className="sm:order-2 text-right 2xs:mb-2  text-primary font-bold text-xl">
            ১২০০ &#2547;
          </h4>
          <button
            onClick={() => setOpenModal(!openModal)}
            className="2xs:my-1 xs:my-6 sm:my-8  py-2 px-2 border-2 border-[#AF1453] hover:bg-[#AF1453] sm:w-[180px] 2xl:w-[230px] 3xl:w-[280px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            এনরোল করো
          </button>
        </div>
      </div>
      {openModal && (
        <CoursesModal
          course={course}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

export default CourseCard;
