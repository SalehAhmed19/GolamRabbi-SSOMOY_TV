import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { IoIosClose } from "react-icons/io";
const BookByModal = ({ book, openModal, setOpenModal }) => {
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
                <span className="mb-2 2xs:text-[12px]">বইয়ের নাম</span>
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
                  name="bookName"
                  type="text"
                  value={book.name}
                  placeholder="বইয়ের নাম"
                  className="2xs:text-[12px] cursor-not-allowed  w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  readOnly
                />
              </div>
              <h4 className="2xs:text-[12px] mt-8 mb-5 font-bold text-secondary">
                বিস্তারিত
              </h4>
              {/* content 2 */}
              <div className="w-full grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    বইয়ের মূল্য
                  </label>
                  <input
                    name="bookPrice"
                    type="text"
                    value={book.price}
                    placeholder="বইয়ের মূল্য"
                    className="2xs:text-[12px] cursor-not-allowed w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    প্রকাশিত
                  </label>
                  <input
                    name="bookPublishedDate"
                    type="text"
                    value={book.date}
                    placeholder="পদের নাম"
                    className="2xs:text-[12px] cursor-not-allowed w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                    readOnly
                  />
                </div>
              </div>
              <h4 className="2xs:text-[12px] mt-10 mb-5 font-bold text-secondary">
                আপনার তথ্য
              </h4>
              {/* content 3 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    সম্পূর্ণনাম
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="আপনার নাম লিখুন"
                    className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="2xs:text-[12px]">
                    ই-মেইল
                  </label>
                  <input
                    name="courseName"
                    type="email"
                    placeholder="আপনার ই-মেইল লিখুন"
                    className="2xs:text-[12px] w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 4 */}
              <div className="">
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
              {/* content 5 */}
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

              <button className="bg-secondary text-white my-3 px-10 py-1 rounded 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]">
                সাবমিট
              </button>
              <button
                onClick={handleModalClose}
                className="xs:ms-2 md:mx-5 px-10 py-1 rounded 2xs:my-4 xs:my-6 sm:my-8 md:my-10 bg-secondary text-white my-3 text-center 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
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

export default BookByModal;
