import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
const BookByModal = ({ openModal, setOpenModal, book }) => {
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
          <div className="relative">
            <form className="">
              <div className="text-secondary font-bold flex justify-between items-center">
                <span className="mb-2">Application for</span>
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
                  value={book.name}
                  placeholder="পদের নাম"
                  className="cursor-not-allowed  w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  readOnly
                 />
              </div>
              <h4 className="mt-8 mb-5 ">Personal data</h4>
              {/* content 2 */}
              <div className="w-full grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="" className="">
                    First name
                  </label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 3 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 4 */}
              <div className="">
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 5 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              {/* content 6 */}
              <h4 className="mt-10 mb-5 font-bold">Application documents</h4>
              <div className="grid md:grid-cols-2 gap-5">
                {/* item 1 */}
                <div>
                  <span>First name</span>
                  <label htmlFor="fileUpload">
                    <p className="text-white flex justify-center  items-center my-2.5 bg-secondary w-full h-9 rounded">
                      <span className="mx-2">আপলোড</span>
                      <AiOutlineCloudUpload className="text-2xl cursor-pointer" />
                    </p>
                  </label>
                  <input
                    id="fileUpload"
                    name="fileUpload"
                    type="file"
                    placeholder="কোর্সের ফি"
                    className="hidden w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
                {/* item 2 */}
                <div>
                  <span>First name</span>
                  <label htmlFor="fileUpload">
                    <p className="text-white flex justify-center  items-center my-2.5 bg-secondary w-full h-9 rounded">
                      <span className="mx-2">আপলোড</span>
                      <AiOutlineCloudUpload className="text-2xl cursor-pointer" />
                    </p>
                  </label>
                  <input
                    id="fileUpload"
                    name="fileUpload"
                    type="file"
                    placeholder="কোর্সের ফি"
                    className="hidden w-full my-2 py-1 px-3 focus:outline-none placeholder:text-[#787878] bg-[#F1F1F1] text-black rounded"
                  />
                </div>
              </div>
              <button className="bg-secondary text-white  block ml-auto my-3 px-10 py-1 rounded">
                সাবমিট
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default BookByModal;
