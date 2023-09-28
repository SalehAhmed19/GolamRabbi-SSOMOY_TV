import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { MdOutlineClose } from "react-icons/md";
const TvModal = ({ open, handleClose, tvNew, clickId }) => {
  const { id } = tvNew;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "transparent",
    borderRadius: "7px",
    boxShadow: 24,
  };

  return (
    <>
      {id === clickId && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            className="p-5 2xs:w-[85%] xs:w-[90%] md:w-[900px] md:h-[500px] focus:outline-none"
          >
            <div className="font-bold text-secondary flex justify-between items-center">
              {/* <MdOutlineClose
                onClick={handleClose}
                className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]  cursor-pointer"
              /> */}
            </div>
            <iframe
              className="w-full md:h-[500px] rounded"
              src={tvNew.tvNewsSrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default TvModal;
