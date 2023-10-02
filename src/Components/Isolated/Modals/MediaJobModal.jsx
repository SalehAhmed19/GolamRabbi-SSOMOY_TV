import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
const MediaJobModal = ({ circulars, openModal, setOpenModal }) => {
  const handleModalClose = () => setOpenModal(!openModal);
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
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="h-[90vh] p-5 2xs:w-[85%] xs:w-[90%] md:w-[600px] md:h-[500px] overflow-auto bg-white"
          style={{ fontFamily: "Hind Siliguri" }}
        >
          <div>
            <form className="">
              <div className="text-secondary font-bold flex justify-between items-center">
                <span className="mb-2 2xs:text-[12px]">পদবি</span>
                <span>
                  <IoIosClose
                    onClick={handleModalClose}
                    className="text-3xl cursor-pointer"
                  />
                </span>
              </div>
              {/*content 1 */}
              <div className="w-full">
                <input
                  name="courseName"
                  type="text"
                  value={circulars?.position}
                  placeholder="পদের নাম"
                  className="2xs:text-[12px] cursor-not-allowed  w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  readOnly
                />
              </div>
              <h4 className="2xs:text-[12px] mt-8 mb-5 font-bold text-secondary">
                ব্যক্তিগত তথ্য
              </h4>
              {/* content 2 */}
              <div className="w-full grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    সম্পূর্ণনাম (বাংলায়)
                  </label>
                  <input
                    name="fullNameBangla"
                    type="text"
                    placeholder="আপনার সম্পূর্ণনাম (বাংলায়)  লিখুন"
                    className="2xs:text-[12px] w-full my-2 py-1 px-3  focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    সম্পূর্ণনাম (ইংরেজিতে)
                  </label>
                  <input
                    name="fullNameEnglish"
                    type="text"
                    placeholder="আপনার সম্পূর্ণ (ইংরেজিতে) লিখুন"
                    className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 3  */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
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
                <div className="">
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
              </div>
              {/* content 4 */}
              <div className="">
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    ঠিকানা
                  </label>
                  <textarea
                    name="address"
                    id=""
                    type="text"
                    placeholder="আপনার ঠিকানা লিখুন"
                    className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 5 */}
              <div className="">
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    ফেইসবুক/ লিঙ্কডইন আইডি লিঙ্ক
                  </label>
                  <input
                    name="socialLink"
                    type="text"
                    placeholder="আপনার ফেইসবুক/ লিঙ্কডইন আইডি লিঙ্ক লিখুন"
                    className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 6 */}
              <div className="">
                <h4 className="2xs:text-[12px] mt-10 mb-5 font-bold text-secondary">
                  আবেদনের জন্য বাধ্যতামূলক
                </h4>
                <div className="grid md:grid-cols-2 gap-5">
                  {/* item 1 */}
                  <div>
                    <span className="2xs:text-[12px]">ছবি</span>
                    <label htmlFor="imageUpload">
                      <p className="cursor-pointer text-white flex justify-center  items-center my-2.5 bg-secondary w-full h-9 rounded">
                        <span className="mx-2 2xs:text-[12px]">আপলোড</span>
                        <AiOutlineCloudUpload className="2xs:text-[12px] text-2xl cursor-pointer" />
                      </p>
                    </label>
                    <input
                      id="imageUpload"
                      name="imageUpload"
                      type="file"
                      placeholder="ছবি"
                      className="hidden w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                    />
                  </div>
                  {/* item 2 */}
                  <div className="">
                    <span className="2xs:text-[12px]">সিভি</span>
                    <label htmlFor="cvUpload">
                      <p className="cursor-pointer text-white flex justify-center  items-center my-2.5 bg-secondary w-full h-9 rounded">
                        <span className="mx-2 2xs:text-[12px]">আপলোড</span>
                        <AiOutlineCloudUpload className="2xs:text-[12px] text-2xl cursor-pointer" />
                      </p>
                    </label>
                    <input
                      id="cvUpload"
                      name="cvUpload"
                      type="file"
                      placeholder="সিভি"
                      className="hidden w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-secondary text-white my-3 px-10 py-1 rounded 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                সাবমিট
              </button>
              <button
                onClick={handleModalClose}
                className=" xs:ms-2 md:mx-5 px-10 py-1 rounded 2xs:my-4 xs:my-6 sm:my-8 md:my-10 bg-secondary text-white my-3 text-center 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
              >
                বন্ধ করুন
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default MediaJobModal;
