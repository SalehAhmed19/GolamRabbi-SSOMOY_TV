import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CoursesModal = ({ course, openModal, setOpenModal }) => {
  const handleModalClose = () => setOpenModal(!openModal);
  const handleModalCloseOutSiteClick = (e) => {
    if (e.target.id === "container") handleModalClose();
  };
  if (!openModal) return null;
  useEffect(()=>{
    document.body.style.overflowY="hidden";
    return()=>{
      document.body.style.overflowY="scroll"
    }
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const course = event.target.course.value;
    const form = {
      title: "Courses",
      name: name,
      email: email,
      mobile: mobile,
      course: course,
      dateAndTime: new Date().toLocaleString(),
    };
    console.log(form);
    handleModalClose();
  };
  return (
    <>
      <div
        id="container"
        onClick={handleModalCloseOutSiteClick}
        className={`select-none cursor-pointer h-screen fixed top-0 bottom-0 left-0 right-0  backdrop-blur-sm`}
      >
      
        <div className="md:w-1/2 flex justify-center items-center mt-[50%] md:mx-[24%] lg:mt-[20%] ">
          <div className="bg-[#222] text-basic rounded-md p-5 mx-5">
            <AiOutlineClose
              onClick={() => setOpenModal(!openModal)}
              className="text-xl text-primary cursor-pointer float-right"
            />
            <h4 className="text-primary font-bold text-xl">
              কোর্সে এনরোল করতে চাও?
            </h4>
            <form
              onSubmit={() => handleSubmit(event)}
              className="lg:w-96"
              action=""
            >
              <input
                name="course"
                type="text"
                value={course?.name}
                className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                readOnly
              />
              <input
                name="name"
                placeholder="তোমার নাম লিখো"
                className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                type="text"
              />
              <input
                name="email"
                placeholder="তোমার ইমেইল লিখো"
                className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                type="text"
              />
              <input
                name="mobile"
                placeholder="তোমার মোবাইল নাম্বার লিখো"
                className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                type="text"
              />
              <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
                সাবমিট করো
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesModal;
