import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from 'react';

const CoustomModal = ({ open, handleClose, children }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute 2xs:top-5 2xs:left-5 xs:top-24 xs:left-16 md:top-[300px] md:left-[200px] lg:left-[250px] xl:top-[400px] 2xl:top-[600px]  xl:left-[300px] 2xl:left-[500px] 3xl:top-[350px] 3xl:left-[400px] 2xs:w-[200px] xs:w-[250px] sm:w-1/2 p-5 bg-[#000] text-primary border-2 border-[#f6b30f] rounded-lg">
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default CoustomModal;