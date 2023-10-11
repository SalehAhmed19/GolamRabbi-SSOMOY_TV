import React, { useState } from "react";
import GalleryModal from "../Modals/GalleryModal";

const GalleryCard = ({ galleryImage }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpenModal(true)}
        className="relative md:m-2 h-[210px] xl:h-[250px] 2xl:h-[240px] border-[6px] border-purple-300 overflow-hidden"
      >
        <img
          src={galleryImage.image}
          alt="image"
          className="object-cover w-full h-full"
        />
        {/* hover info */}
        {/* <div className="group hover:bg-black/25 hover:backdrop-blur-sm absolute bottom-0 w-full h-full overflow-hidden transition-all duration-500 delay-500">
          <div className="before:opacity-0 group-hover:before:opacity-50 before:absolute before:w-[95%] lg:before:w-[96%] before:h-[45%]  before:top-2 before:left-1  lg:before:top-2 lg:before:left-1.5 2xl:before:left-.5 3xl:before:left-1  hover:before:top-[9px] xl:hover:before:top-[14px]  2xl:hover:before:top-[11px] 3xl:hover:before:top-[11px]  before:bg-purple-300 lg:before:rounded-t-md  hover:before:transition-all hover:before:duration-1000 hover:before:delay-200  after:absolute after:w-[95%] lg:after:w-[96%] after:h-[45%] after:left-1 after:bottom-0 lg:after:bottom-1 lg:after:left-1.52 xl:after:left-1.5 2xl:after:left-1.5 3xl:after:left-1  after:rounded-b-md after:bg-cyan-200 after:opacity-0 group-hover:after:opacity-50 hover:after:bottom-[9px] 2xl:hover:after:bottom-[11px] 3xl:hover:after:bottom-[11px] hover:after:transition-all hover:after:duration-1000 hover:after:delay-200"></div>
          <div className="flex space-x-5 absolute top-[102px] left-[76px] lg:left-[100px] xl:left-[85px] 2xl:left-[65px] 3xl:left-[60px] rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400">
            <img className="w-8"src={galleryImage.faceBookIcon} alt="" />
            <img className="w-8"src={galleryImage.linkedinIcon} alt="" /> 
            <img className="w-8"src={galleryImage.whatsappIcon} alt="" /> 
          </div>
        </div> */}
      </div>
      {openModal && (
        <GalleryModal
          galleryImage={galleryImage}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default GalleryCard;
