import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { IoIosClose } from "react-icons/io";

const AboutModal = ({open, handleClose}) => {
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
          <IoIosClose
            onClick={handleClose}
            className="text-5xl cursor-pointer"
          />
          <div
            className="h-[40vh] overflow-auto bg-white"
            style={{ fontFamily: "Hind Siliguri" }}
          >
            <p className="text-justify 2xs:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis.
            </p>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AboutModal;
