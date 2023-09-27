import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const ConsultantModal = ({ descriptionText, open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#fff",
    // borderRadius: "7px",
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
        <Box
          sx={style}
          className="p-5 2xs:w-[85%] xs:w-[90%] md:w-full md:h-full"
        >
          <div
            className="h-[50vh] md:h-[90%] overflow-auto bg-white"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            <div className="font-bold text-secondary flex justify-between items-center">
              <h1 className="font-bold 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]  my-5">
                {descriptionText?.consultant?.title}
              </h1>
              <MdOutlineClose
                onClick={handleClose}
                className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]  cursor-pointer"
              />
            </div>
            <p className="text-justify 2xs:text-[12px]">
              {descriptionText?.consultant?.description} ....
            </p>
          </div>
          <button
            onClick={handleClose}
            className="block ml-auto  px-10 py-1 rounded 2xs:my-4 xs:my-6 sm:my-8 md:my-10 bg-secondary text-white my-3 text-center 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            বন্ধ করুন
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default ConsultantModal;
