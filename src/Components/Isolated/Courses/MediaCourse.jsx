import React from "react";
import img from "../../../assets/images/mediacourse.jpg";

function MediaCourse() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <img className="rounded-md" src={img} alt="" />
      <img className="rounded-md" src={img} alt="" />
      <img className="rounded-md" src={img} alt="" />
    </div>
  );
}

export default MediaCourse;
