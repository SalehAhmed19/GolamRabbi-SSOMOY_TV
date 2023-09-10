import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from 'react';
const InviteModal = ({ open, setOpen, handleClose, children }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ fontFamily: "Hind Siliguri" }}
      >
        <Box>
          <div id="container" className={`select-none cursor-pointer`}>
            <div className="md:w-full lg:w-3/4 flex justify-center items-center lg:mt-[25%] lg:mx-[12%] xl:mt-[30%] xl:mx-[15%] 2xl:mt-[28%] 2xl:mx-[10%] 3xl:mt-[25%] 3xl:mx-[10%] p-5">
              <div className="w-full md:w-3/4 xl:w-1/2 bg-[#000] text-primary border-2 border-[#f6b30f] rounded-lg p-5">
                {children}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default InviteModal;