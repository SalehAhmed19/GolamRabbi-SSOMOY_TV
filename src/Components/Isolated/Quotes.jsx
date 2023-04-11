import React from "react";
import img from "../../assets/images/quote.webp";
import signature from "../../assets/images/signeture.webp";
import { Fade, Zoom } from "react-reveal";

function Quotes() {
  return (
    <Fade down>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative lg:mx-40 text-basic h-[70vh] my-10">
        <div className="bg-[#0e0f14] lg:p-10 p-5 rounded-md relative flex items-center">
          <div className="w-1 rounded-full lg:h-1/2 h-2/5 bg-[#D9A017] mt-28 lg:mt-0"></div>
          <h3 className="z-20 absolute text-3xl mt-20 lg:mt-0 ml-5">
            The key to being extraordinary is knowing what rules to follow and
            what rules to break.
          </h3>
          <img className="lg:mt-60 mt-96 w-48" src={signature} alt="" />
        </div>
        <Zoom>
          <img
            className="absolute rounded-md right-0 lg:top-16 lg:w-7/12"
            src={img}
            alt=""
          />
        </Zoom>
      </div>
    </Fade>
  );
}

export default Quotes;
