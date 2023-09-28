import React, { useState } from "react";
import CoursesModal from "../Modals/CoursesModal";
function CourseCard({ course }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={`shadow-lg rounded-lg bg-[#ffffff0f] overflow-hidden`}>
      <img className="w-full" src={course.img} alt="random image" />
      <div className="p-4">
        <p className="text-white font-bold text-base mb-2">{course.name}</p>
        <p className="text-gray-500 text-sm mb-4">{course.des}</p>
        <div className="sm:flex items-center justify-between">
          <h4 className="sm:order-2 text-right 2xs:mb-2  text-primary font-bold text-xl">১২০০ &#2547;</h4>
          <button
            onClick={() => setOpenModal(!openModal)}
            className="font-bold py-2 px-4 rounded-full border-2 border-[#AF1453] hover:bg-[#AF1453] text-center text-[#fff]"
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
