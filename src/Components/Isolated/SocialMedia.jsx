import React from "react";
import { Fade } from "react-reveal";
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
    <div className="lg:px-24 py-14 text-[#fff] px-5">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          সোশ্যাল মিডিয়াতে সংযুক্ত হোন
        </h1>
      </Fade>
      <div className="mt-10 grid md:grid-cols-2 gap-5 place-items-center lg:flex lg:justify-center lg:items-center">
        {arr.map((a, idx) => (
          <Fade up>
            <a href={a.href} target="_blank">
              <div
                key={idx}
                className="w-56 h-56 shadow-lg shadow-[#282828] rounded-md flex items-end justify-center cursor-pointer"
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
