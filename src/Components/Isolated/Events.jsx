import React, { useState } from "react";
import bg from "../../assets/images/event-bg.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Fade, Zoom } from "react-reveal";
import Advertisement2 from "./Advertisement2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../Styles/Events.css";
import { Link } from "react-router-dom";

function Events() {
  const arr = [1, 2, 3, 4, 5, 6];
  const events = [
    {
      title: "জীবনের রূপকথা",
      date: "১২",
      month: "এপ্রিল",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "বেকারত্বের কালো মেঘ",
      date: "২৩",
      month: "এপ্রিল",
      startingTime: "সকাল ১০:০০",
      endingTime: "দুপুর ০১:০০",
      location: "ধানমন্ডি, ঢাকা",
    },
    {
      title: "জীবন নিয়ে কিছু কথা",
      date: "১০",
      month: "মে",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
    {
      title: "জীবনের রূপকথা",
      date: "১৯",
      month: "জুন",
      startingTime: "সকাল ০৮:০০",
      endingTime: "দুপুর ০২:০০",
      location: "মিরপুর, ঢাকা",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14 text-[#fff] px-5"
    >
      <Zoom>{/* <Advertisement2 /> */}</Zoom>
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          আসন্ন ইভেন্টস
        </h1>
      </Fade>
      <Fade up>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {events.map((event, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="-p-5 flex items-center">
                  <div className="text-primary mr-5">
                    <h2 className="text-6xl">{event.date}</h2>
                    <p className="text-center">{event.month}</p>
                  </div>
                  <div>
                    <h4 className="my-3 font-bold text-2xl">{event.title}</h4>
                    <hr />
                    <p className="my-3 flex items-center text-[#c5c5c5]">
                      <AiOutlineClockCircle className="mr-2" />
                      {event.startingTime} ঘটিকা - {event.endingTime} ঘটিকা
                    </p>
                    <p className="my-3 flex items-center text-[#c5c5c5]">
                      <MdLocationOn className="mr-2" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        <div className="my-5">
          <p className="font-bold">
            জীবনের এক রাস অনুভূতি ও অভিজ্ঞতা নিয়ে কিছু কথা হবে তোমাদের সাথে...
          </p>
          <Fade up>
            <Link
              to="/events"
              className="block mx-auto my-10 py-2 border-2 border-[#AF1453] hover:bg-[#AF1453] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
            >
              আরও দেখুন
            </Link>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}

export default Events;
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
