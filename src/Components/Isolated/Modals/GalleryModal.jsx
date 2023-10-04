import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
const GalleryModal = ({ galleryImage, openModal, setOpenModal }) => {
  const handleModalClose = () => setOpenModal(false)
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
    <Modal
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        className="p-5 2xs:w-[85%] xs:w-[90%] md:w-full md:h-full"
      >
        <div
          className="h-[50vh] md:h-[90%] overflow-auto"
          style={{ fontFamily: "Hind Siliguri" }}
        >
          <div className="">
            <MdOutlineClose
              onClick={handleModalClose}
              className="mb-2 text-secondary float-right 2xs:text-[14px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]  cursor-pointer"
            />
            <img src={galleryImage.image} alt="" />
            <button
              onClick={handleModalClose}
              className="block ml-auto  px-10 py-1 rounded 2xs:my-4 xs:my-6 sm:my-8 md:my-10 bg-secondary text-white my-3 text-center 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default GalleryModal;
