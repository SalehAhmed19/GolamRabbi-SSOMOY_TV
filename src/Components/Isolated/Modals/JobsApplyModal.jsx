import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
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
const JobsApplyModal = ({ openModal, setOpenModal, handleModalClose }) => {
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
          <div id="container" className={`select-none cursor-pointer`}>
            <div className="md:w-full lg:w-3/4 flex justify-center items-center mt-[20%] md:mt-[30%] lg:mx-[12%] lg:mt-[10%] ">
              <div className="w-full md:w-3/4 lg:w-1/2 bg-[#222] text-basic rounded-md p-5 mx-5">
                <AiOutlineClose
                  onClick={() => setOpenModal(!openModal)}
                  className="text-xl text-primary cursor-pointer float-right"
                />
                <h4 className="mb-5 text-primary font-bold text-xl">Job</h4>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <h2 className="text-primary">Application for</h2>
                  {/*content 1 */}
                  <div className="w-full">
                    <input
                      name="courseName"
                      type="text"
                      placeholder="পদের নাম"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                    />
                  </div>
                  <h4 className="mt-8 mb-5 text-primary font-bold">Personal data</h4>
                  {/* content 2 */}
                  <div className="w-full grid grid-cols-2 gap-5">
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                  </div>
                  {/* content 3 */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                  </div>
                  {/* content 4 */}
                  <div className="">
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                  </div>
                  {/* content 5 */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseName"
                        type="text"
                        placeholder="পদের নাম"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      />
                    </div>
                  </div>
                  {/* content 6 */}
                  <h4 className="mt-10 mb-5 text-primary font-bold">
                    Application documents
                  </h4>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseFree"
                        placeholder="কোর্সের ফি"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                        type="file"
                      />
                    </div>
                    <div className="">
                      <label htmlFor="" className="text-primary">
                        First name
                      </label>
                      <input
                        name="courseFree"
                        placeholder="কোর্সের ফি"
                        className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                        type="file"
                      />
                    </div>
                  </div>
                  <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
                    সাবমিট
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
