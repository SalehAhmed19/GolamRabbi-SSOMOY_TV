import React from "react";
import { Fade } from "react-reveal";
import "swiper/css";
import "swiper/css/effect-cards";
import GalleryCard from "../Components/Isolated/Cards/GalleryCard";
import facebook from "../assets/SVGs/socilaIcons/facebook (1).png";
import linkedin from "../assets/SVGs/socilaIcons/linkedin.png";
import whatsapp from "../assets/SVGs/socilaIcons/whatsapp.png";
import img1 from "../assets/images/gr1.jpg";
import img2 from "../assets/images/gr2.jpg";
import img3 from "../assets/images/gr3.jpg";
import img4 from "../assets/images/gr4.jpg";
import img5 from "../assets/images/gr5.jpg";
const ImageGalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      image: img1,
      title: "Golam Rabby 1",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 2,
      image: img2,
      title: "Golam Rabby 2",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 3,
      image: img3,
      title: "Golam Rabby 3",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 4,
      image: img4,
      title: "Golam Rabby 4",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 5,
      image: img5,
      title: "Golam Rabby 5",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 6,
      image: img1,
      title: "Golam Rabby 6",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 7,
      image: img2,
      title: "Golam Rabby 7",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 8,
      image: img3,
      title: "Golam Rabby 8",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 9,
      image: img4,
      title: "Golam Rabby 9",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 10,
      image: img5,
      title: "Golam Rabby 10",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 11,
      image: img1,
      title: "Golam Rabby 11",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
    {
      id: 12,
      image: img2,
      title: "Golam Rabby 12",
      faceBookIcon: facebook,
      linkedinIcon: linkedin,
      whatsappIcon: whatsapp,
    },
  ];
  return (
    <div className="lg:px-24 py-20 p-5 pb-36 text-[#fff] cursor-pointer select-none">
      <Fade down>
        <h2 className="mt-12 md:mt-20 mb-5  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[33px] lg:text-[38px] xl:text-[43px] 2xl:text-[48px] text-primary text-center font-bold">
          ইমেজ গ্যালারি
        </h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-5">
        {galleryImages.map((galleryImage, index) => (
          <GalleryCard galleryImage={galleryImage} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryPage;
