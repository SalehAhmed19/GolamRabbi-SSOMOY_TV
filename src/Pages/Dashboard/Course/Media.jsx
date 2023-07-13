import Button from "@mui/material/Button";
import React from "react";
import media from "../../../assets/images/media.jpg";
const Media = () => {
  const mediaCourses = [
    {
      id: 1,
      image: media,
      courseName: "মিডিয়া কোর্স",
      description: "মিডিয়া কোর্স ডেসক্রিপশন",
      courseId: "gr-mc-001",
    },
    {
      id: 2,
      image: media,
      courseName: "মিডিয়া কোর্স",
      description: "মিডিয়া কোর্স ডেসক্রিপশন",
      courseId: "gr-mc-001",
    },
    {
      id: 3,
      image: media,
      courseName: "মিডিয়া কোর্স",
      description: "মিডিয়া কোর্স ডেসক্রিপশন",
      courseId: "gr-mc-001",
    },
    {
      id: 4,
      image: media,
      courseName: "মিডিয়া কোর্স",
      description: "মিডিয়া কোর্স ডেসক্রিপশন",
      courseId: "gr-mc-001",
    },
    {
      id: 5,
      image: media,
      courseName: "মিডিয়া কোর্স",
      description: "মিডিয়া কোর্স ডেসক্রিপশন",
      courseId: "gr-mc-001",
    },
    {
      id: 6,
      image: media,
      courseName: "মিডিয়া কোর্স",
      description: "মিডিয়া কোর্স ডেসক্রিপশন",
      courseId: "gr-mc-001",
    },
  ];
  return (
    <>
      {mediaCourses.map((course) => (
        <div
          key={course.id}
          className="mb-3 lg:flex lg:justify-between items-center rounded-md bg-[#1E1E20]"
        >
          <div className="md:flex space-x-3">
            <img
              src={course.image}
              alt=""
              className="object-cover md:w-[200px] rounded-lg"
            />
            {/* info  */}
            <div className="text-[#F6B30F] space-y-[20px] mt-2">
              <p>Course Name: &nbsp;{course.courseName}</p>
              <p>Description: &nbsp;{course.description}</p>
              <p>Course ID: &nbsp;{course.courseId}</p>
            </div>
          </div>
          {/* buttons */}
          <div className="flex space-x-4 p-3 lg:p-5" sx={{ with: [100] }}>
            <Button
              variant="contained"
              sx={{
                marginY: "10px",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              Manage Course
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "red",
                color: "white",
                marginY: "10px",
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              Delete Course
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Media;
