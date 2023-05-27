import React from "react";
import { Fade } from "react-reveal";
import job from "../assets/images/Job.png";

function Jobs() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="lg:py-20 py-10 lg:mx-20 mx-5">
        <Fade down>
          <h2 className="text-center text-4xl font-bold text-primary py-14 my-5">
            চাকুরী সমূহ
          </h2>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {arr.map((a, idx) => (
            <div key={idx} className="rounded-lg bg-[#222]">
              <img src={job} className="rounded-t-lg" alt="" />
              <div className="text-basic p-5">
                <h3 className="text-xl">
                  <span className="font-bold">পদবিঃ </span> সাংবাদিক
                </h3>
                <p>
                  <span className="font-bold">আবেদনের শেষ তারিখঃ </span>{" "}
                  সাংবাদিক
                </p>
                <p>
                  <span className="font-bold">প্রতিষ্ঠানঃ </span> সময় টিভি
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
