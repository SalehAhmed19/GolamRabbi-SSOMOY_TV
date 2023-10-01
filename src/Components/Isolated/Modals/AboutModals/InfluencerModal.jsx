import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const InfluencerModal = ({ descriptionText, open, handleClose }) => {
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
            <div className="relative">
              <div className="pr-8 absolute right-0">
                <MdOutlineClose
                  onClick={handleClose}
                  className="text-secondary ml-[550px] 2xs:text-[14px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]  cursor-pointer"
                />
                <h1 className="2xs:ml-[440px] xs:ml-[320px] lg:-mb-20  custom-text-stroke-5 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
                  {descriptionText?.influencer?.stroke}
                </h1>
                <h2 className="lg:ml-[335px] invisible lg:visible md:text-[23px] lg:text-[41px] font-bold">
                  {descriptionText?.influencer?.title}
                </h2>
                <h3 className="invisible lg:visible  lg:-mt-1 lg:ml-[465px] 2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold">
                  {descriptionText?.influencer?.subTitle}
                </h3>
              </div>
            </div>
            {/* content */}
            <div className="p-5 2xs:mt-[10px] mt-[30px]">
              <div className="2xs:mt-5 2xs:text-justify lg:mt-[240px]">
                <div className="lg:flex lg:justify-center lg:items-center">
                  <img
                    className="mb-2 mx-[10px] lg:-mt-[250px] w-[396px]"
                    src={descriptionText?.influencer?.image2}
                    alt=""
                  />
                  <p className="2xs:text-[12px] lg:w-[75%] lg:mt-[50px] lg:mr-5">
                    <span className="font-bold">
                      I {descriptionText?.influencer?.name} &nbsp;
                    </span>
                    {descriptionText?.influencer?.description1}
                  </p>
                </div>
              </div>
              <div className="mt-5 2xs:text-justify lg:mt-[50px]">
                <p className="2xs:text-[12px]">
                  {descriptionText?.influencer?.description2}
                </p>
              </div>
              <div className="mt-5 2xs:text-justify lg:mt-[50px]">
                <p className="2xs:text-[12px]">
                  {descriptionText?.influencer?.description3}
                </p>
              </div>
              <div className="mt-5 2xs:text-justify lg:mt-[50px]">
                <p className="2xs:text-[12px]">
                  {descriptionText?.influencer?.description4}
                </p>
              </div>
              <div className="mt-5 2xs:text-justify lg:mt-[50px]">
                <p className="2xs:text-[12px]">
                  {descriptionText?.influencer?.description5}
                </p>
              </div>
              <div className="mt-5 2xs:text-justify lg:mt-[50px]">
                <img
                  src={descriptionText?.influencer?.signatureImage}
                  alt=""
                  className="2xs:my-2 w-40 bg-black"
                />
                <p className="mt-1 font-bold 2xs:text-[12px]">
                  {descriptionText?.influencer?.name}
                </p>
                <p className="2xs:text-[12px] mt-1">
                  {descriptionText?.influencer?.position}, &nbsp;
                  <span className="font-bold">
                    {descriptionText?.influencer?.organization}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="block md:ml-auto  px-10 py-1 rounded 2xs:my-4 xs:my-6 sm:my-8 md:my-10 bg-secondary text-white my-3 text-center 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px]"
          >
            বন্ধ করুন
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default InfluencerModal;
