import { Box, Modal } from "@mui/material";
import React from "react";
import { IoIosClose } from "react-icons/io";
const AnnsEventsModal = ({ event, openModal, setOpenModal }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fff",
    // borderRadius: "7px",
    boxShadow: 24,
  };
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
      <Box
        sx={style}
        className="p-5 2xs:w-[85%] xs:w-[90%] md:w-[600px] rounded-md"
      >
        <div
          className="2xs:h-[50vh]  overflow-auto bg-white "
          style={{ fontFamily: "Hind Siliguri" }}
        >
          <form>
            <div className="text-secondary font-bold flex justify-between items-center">
              <span className="mb-2 2xs:text-[12px]">
                ফর্মটি পূরণ করে পাঠিয়ে দিন আমাদের কাছে
              </span>
              <span>
                <IoIosClose
                  onClick={handleModalClose}
                  className="text-3xl cursor-pointer"
                />
              </span>
            </div>
            {/*content 1 */}
            <div className="w-full">
              <label htmlFor="" className="2xs:text-[12px]">
                নাম
              </label>
              <input
                name="name"
                type="text"
                value={event?.title}
                placeholder="আপনার নাম লিখুন"
                className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
              />
            </div>
            {/*content 2 */}
            <div className="w-full">
              <label htmlFor="" className="2xs:text-[12px]">
                ই-মেইল
              </label>
              <input
                name="email"
                type="email"
                placeholder="আপনার ই-মেইল লিখুন"
                className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
              />
            </div>
            {/*content 3 */}
            <div className="w-full">
              <label htmlFor="" className="2xs:text-[12px]">
                মোবাইল
              </label>
              <input
                name="courseName"
                type="number"
                placeholder="আপনার মোবাইল নাম্বার লিখুন"
                className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
              />
            </div>
            <button className="2xs:text-[12px] bg-secondary text-white w-ful  my-3 px-10 py-1 rounded">
              সাবমিট
            </button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default AnnsEventsModal;
