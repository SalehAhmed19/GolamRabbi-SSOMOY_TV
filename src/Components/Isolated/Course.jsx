import React from "react";
import bg from "../../assets/images/course-bg.png";
import img from "../../assets/images/gr.png";

function Course() {
  const data = ["মিডিয়া", "লিডারশীপ", "লাইফ কোর্স"];
  const image = [img, img, img];
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="lg:px-24 py-14"
    >
      <h2 className="text-center text-4xl font-bold text-primary pt-14">
        কোর্স
      </h2>
      <div className="flex flex-col lg:flex-row justify-center ">
        {data.map((d) => (
          <div
            key={d}
            className="bg-secondary my-7 mx-5 w-40 py-2 rounded-full text-[#fff] text-xl text-center"
          >
            <h3>{d}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        {image.map((im, idx) => (
          <img key={idx} src={im} className="mx-5" alt="" />
        ))}
      </div>
      <button className="block mx-auto my-10 py-2 border-2 border-[#AF1453] w-[230px] text-center rounded-full text-[#fff] font-bold text-xl">
        এনরোল
      </button>
    </div>
  );
}

export default Course;
