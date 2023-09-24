import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

const TvModal = ({ open, handleClose, tvNew, clickId }) => {
  const { id } = tvNew;
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
      {id === clickId && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="p-5 2xs:w-[85%] xs:w-[90%] md:w-[900px] md:h-[500px]">
            <button onClick={handleClose}>X</button>
            <iframe
              className="w-full md:h-[420px]"
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
