import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
const JobsApplyModal = ({ openModal, setOpenModal, handleModalClose}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.mobile.value;
    const course = event.target.course.value;
    const form = {
      title: "Courses",
      name: name,
      email: email,
      mobile: mobile,
      course: course,
      dateAndTime: new Date().toLocaleString(),
    };
    console.log(form);
    handleModalClose();
  };
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ fontFamily: "Hind Siliguri" }}
      >
        <Box>
          <div
            id="container"
            className={`select-none cursor-pointer`}
          >
            <div className="md:w-full lg:w-3/4 flex justify-center items-center mt-[50%] lg:mx-[12%] lg:mt-[20%] ">
              <div className="w-3/4 bg-[#222] text-basic rounded-md p-5 mx-5">
                <AiOutlineClose
                  onClick={() => setOpenModal(!openModal)}
                  className="text-xl text-primary cursor-pointer float-right"
                />
                <h4 className="text-primary font-bold text-xl">
                  কোর্সে এনরোল করতে চাও?
                </h4>
                <form
                  onSubmit={() => handleSubmit(event)}
                  className="lg:w-full"
                  action=""
                >
                  <input
                    name="course"
                    type="text"
                    value={"course?.name"}
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                    readOnly
                  />
                  <input
                    name="name"
                    placeholder="তোমার নাম লিখো"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                    type="text"
                  />
                  <input
                    name="email"
                    placeholder="তোমার ইমেইল লিখো"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                    type="text"
                  />
                  <input
                    name="mobile"
                    placeholder="তোমার মোবাইল নাম্বার লিখো"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#333] text-primary rounded"
                    type="text"
                  />
                  <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
                    সাবমিট করো
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default JobsApplyModal;