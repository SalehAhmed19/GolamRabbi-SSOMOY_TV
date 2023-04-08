import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/MediaJobCircular.css";
import bg from "../../assets/images/job-bg.jpg";
import { Fade, Zoom } from "react-reveal";
import job from "../../assets/images/Job.png";

function MediaJobCircular() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="pb-10"
    >
      <Fade down>
        <h2 className="text-primary text-center py-10 text-4xl font-bold">
          মিডিয়া জব সার্কুলার
        </h2>
      </Fade>
      <div className="lg:mx-24 mx-5">
        <div className="navigation-wrapper">
          <Zoom>
            <div ref={sliderRef} className="keen-slider">
              {arr.map((a) => (
                <div
                  key={a}
                  className="keen-slider__slide rounded-lg bg-[#222]"
                >
                  <img src={job} alt="" />
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
          </Zoom>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots mt-10">
            {[
              ...Array(
                instanceRef.current.track.details.slides.length - 3
              ).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaJobCircular;
