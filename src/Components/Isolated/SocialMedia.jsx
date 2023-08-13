import React from "react";
import { Fade, Zoom } from "react-reveal";
import img1 from "../../assets/images/social1.png";
import img2 from "../../assets/images/social2.png";
import img3 from "../../assets/images/social3.png";
import img4 from "../../assets/images/social4.png";

function SocialMedia() {
  const arr = [
    {
      img: img1,
      social: "ফেইসবুক",
      href: "https://www.facebook.com/golam.rabby.739326",
    },
    {
      img: img2,
      social: "ইন্সটাগ্রাম",
      href: "https://www.instagram.com/golam.rabby.739326",
    },
    {
      img: img3,       
      social: "ইউটিউব",
      href: "#",
    },
    {
      img: img4,
      social: "লিংকড ইন",
      href: "https://www.linkedin.com/in/golam-rabby/",
    },
  ];
  return (
    <div className="p-5 md:p-16 text-[#fff] px-5">
      <h1 className="-mb-5 md:-mb-10 lg:-mb-20  custom-text-stroke-2 text-center  2xs:text-[18px] xs:text-[23px] sm:text-[28px] md:text-[55px] lg:text-[100px] my-5">
          সোশ্যাল মিডিয়াতে সংযুক্ত হোন
      </h1>
      <Zoom>
        <h1 className="text-primary text-center invisible md:visible md:text-[23px] lg:text-[41px] font-bold">
            সোশ্যাল মিডিয়াতে সংযুক্ত হোন
        </h1>
      </Zoom>
      <div className="mt-10 grid md:grid-cols-2 gap-5 place-items-center lg:flex lg:justify-center lg:items-center">
        {arr.map((a, idx) => (
          <Fade up>
            <a href={a.href} target="_blank">
              <div
                key={idx}
                className="2xs:w-48 2xs:h-48  w-56 h-56 shadow-lg shadow-[#282828] rounded-md flex items-end justify-center cursor-pointer"
                style={{
                  background: `url(${a.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Fade up>
                  <h3 className="text-center my-3 font-bold text-xl">
                    {a.social}
                  </h3>
                </Fade>
              </div>
            </a>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;
