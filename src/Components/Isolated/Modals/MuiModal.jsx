import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  borderRadius: "7px",
  boxShadow: 24,
};

export default function MuiModal({ children, open, handleClose }) {
  // const [open,#f40a5c setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <button onClick={handleOpen}>Open modal</button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="p-5 2xs:w-[85%] xs:w-[90%] md:w-[600px]">
          {children}
        </Box>
      </Modal>
    </div>
  );
}
