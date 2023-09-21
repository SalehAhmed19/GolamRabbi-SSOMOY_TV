import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
const FanFunModal = ({ open, handleClose }) => {
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
          <div className="h-[20vh] overflow-auto bg-white" style={{ fontFamily: "Hind Siliguri" }}>
            <form>
              <h2 className="font-bold mb-2">
                ফর্মটি পূরণ করে পাঠিয়ে দিন আমাদের কাছে
              </h2>
              {/*content 1 */}
              <div className="w-full">
                <label htmlFor="">নাম</label>
                <input
                  name="courseName"
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#CBD5E0] text-black rounded"
                />
              </div>
              {/*content 2 */}
              <div className="w-full">
                <label htmlFor="">মেইল</label>
                <input
                  name="courseName"
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#CBD5E0] text-black rounded"
                />
              </div>
              {/*content 3 */}
              <div className="w-full">
                <label htmlFor="">মোবাইল</label>
                <input
                  name="courseName"
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#CBD5E0] text-black rounded"
                />
              </div>
              {/*content 4 */}
              <div className="w-full">
                <label htmlFor="">ফেইসবুক/ লিঙ্কডইন আইডি লিঙ্ক</label>
                <input
                  name="courseName"
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#CBD5E0] text-black rounded"
                />
              </div>
              <button className="bg-secondary text-white w-ful  my-3 px-10 py-1 rounded">
                সাবমিট
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default FanFunModal;
