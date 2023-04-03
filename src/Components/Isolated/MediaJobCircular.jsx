import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/MediaJobCircular.css";
import bg from "../../assets/images/job-bg.jpg";
import { Fade, Zoom } from "react-reveal";

function MediaJobCircular() {
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
      <div className="lg:mx-24">
        <div className="navigation-wrapper">
          <Zoom>
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide h-48 w-20 border-[#59D8DE] border-2 bg-[#212429] rounded-lg"></div>
              <div className="keen-slider__slide h-48 w-20 border-[#59D8DE] border-2 bg-[#212429] rounded-lg"></div>
              <div className="keen-slider__slide h-48 w-20 border-[#59D8DE] border-2 bg-[#212429] rounded-lg"></div>
              <div className="keen-slider__slide h-48 w-20 border-[#59D8DE] border-2 bg-[#212429] rounded-lg"></div>
              <div className="keen-slider__slide h-48 w-20 border-[#59D8DE] border-2 bg-[#212429] rounded-lg"></div>
              <div className="keen-slider__slide h-48 w-20 border-[#59D8DE] border-2 bg-[#212429] rounded-lg"></div>
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
