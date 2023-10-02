import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { IoIosClose } from "react-icons/io";

const MockTestModal = ({ open, handleClose }) => {
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
            className="2xs:h-[50vh]  overflow-auto bg-white"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            <form>
              <div className="text-secondary font-bold mb-2 flex justify-between items-center">
                <span className="2xs:text-[12px]">মক টেস্ট দিতে চাও?</span>
                <span>
                  <IoIosClose
                    onClick={handleClose}
                    className="text-3xl cursor-pointer"
                  />
                </span>
              </div>
              {/* content 1 */}
              <div className="w-full">
                <label htmlFor="" className="2xs:text-[12px]">
                  তারিখ
                </label>
                <input
                  className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  type="datetime-local"
                  id="birthdaytime"
                  name="birthDayTime"
                ></input>
              </div>
              {/*content 2 */}
              <div className="w-full">
                <label htmlFor="" className="2xs:text-[12px]">
                  নাম
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                />
              </div>
              {/*content 3 */}
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
              {/*content 4 */}
              <div className="w-full">
                <label htmlFor="" className="2xs:text-[12px]">
                  মোবাইল নাম্বার
                </label>
                <input
                  name="mobile"
                  type="number"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন"
                  className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                />
              </div>
              <button className="2xs:text-[12px] block ml-auto bg-secondary text-white my-3 px-10 py-1 rounded">
                সাবমিট
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default MockTestModal;
