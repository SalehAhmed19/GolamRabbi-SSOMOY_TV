import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { IoIosClose } from "react-icons/io";
const ShareModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fff",
    borderRadius: "7px",
    boxShadow: 24,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="p-5 2xs:w-[85%] xs:w-[90%] md:w-[600px]">
          <div
            className="2xs:h-[50vh] overflow-auto bg-white"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            <div className="text-secondary font-bold flex justify-between items-center">
              <span className="mb-2 2xs:text-[12px]">
                সমাধান পেতে; লিখুন এখানে
              </span>
              <span>
                <IoIosClose
                  onClick={handleClose}
                  className="2xs:text-[18px] text-3xl cursor-pointer"
                />
              </span>
            </div>
            <form onSubmit={() => handleSubmit(event)} action="">
              <input
                type="text"
                name="title"
                readOnly
                value="Share your feelings and Problems"
                className="hidden"
              />
              <input
                name="name"
                placeholder="আপনার নাম লিখুন"
                className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                type="text"
              />
              <input
                name="email"
                placeholder="আপনার ই-মেইল লিখুন"
                className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                type="text"
              />
              <input
                name="mobile"
                placeholder="আপনার মোবাইল নাম্বার লিখুন"
                className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                type="text"
              />
              <textarea
                className="2xs:text-[12px] w-full mt-3 placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded py-1 px-3 focus:outline-none text-primary"
                placeholder="আপনার কথা লিখুন"
                name="description"
                id=""
              ></textarea>
              <button className="2xs:text-[12px] bg-secondary block my-3 px-10 py-1 text-white rounded">
                সাবমিট করো
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ShareModal;
