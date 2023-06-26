import { Box, Modal } from "@mui/material";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const AnnsEventsModal = ({event, openModal, setOpenModal}) => {

  const handleModalClose = () => setOpenModal(!openModal);

  const handleModalCloseOutSiteClick = (e) => {
    if (e.target.id === "container") handleModalClose();
  };

  if (!openModal) return null;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const course = e.target.course.value;
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
    <Modal
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ fontFamily: "Hind Siliguri" }}
    >
      <Box>
        <div
          id="container"
          onClick={handleModalCloseOutSiteClick}
          className={`select-none cursor-pointer`}
        >
          <div className="md:w-1/2 flex justify-center items-center mt-[50%] md:mx-[24%] lg:mt-[20%] ">
            <div className="bg-[#222] text-basic rounded-md p-5 mx-5">
              <AiOutlineClose
                onClick={handleModalClose}
                className="text-xl text-primary cursor-pointer float-right"
              />
              <h4 className="text-primary font-bold text-xl">
                ইভেন্ট এ আসতে চাও?
              </h4>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="lg:w-96"
                action=""
              >
                <input
                  name="course"
                  type="text"
                  value={event?.title}
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
      </Box>
    </Modal>
  );
};

export default AnnsEventsModal;
