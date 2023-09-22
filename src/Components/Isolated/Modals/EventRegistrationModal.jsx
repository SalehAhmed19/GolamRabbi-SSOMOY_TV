import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from 'react';
import { IoIosClose } from "react-icons/io";
const EventRegistrationModal = ({open,handleClose,}) => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "#fff",
      borderRadius: "7px",
      boxShadow: 24,
    };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="h-[90vh] p-5 2xs:w-[85%] xs:w-[90%] md:w-[600px] md:h-[500px] overflow-auto bg-white"
          style={{ fontFamily: "Hind Siliguri" }}
        >
          <div className="relative text-secondary font-bold">
            <form className="">
              <div className="text-secondary font-bold flex justify-between items-center">
                <span className="mb-2">Application for</span>
                <span>
                  <IoIosClose
                    onClick={handleClose}
                    className="text-3xl cursor-pointer"
                  />
                </span>
              </div>
              {/*content 1 */}
              <div className="w-full">
                <input
                  name="courseName"
                  type="text"
                  placeholder="পদের নাম"
                  className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                />
              </div>
              <h4 className="mt-8 mb-5 ">Personal data</h4>
              {/* content 2 */}
              <div className="w-full grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="" className="">
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
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                  />
                </div>
              </div>
              {/* content 3 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="">First name</label>
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
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                  />
                </div>
              </div>
              {/* content 5 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseName"
                    type="text"
                    placeholder="পদের নাম"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                  />
                </div>
              </div>
              {/* content 6 */}
              <h4 className="mt-10 mb-5 font-bold">Application documents</h4>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseFree"
                    placeholder="কোর্সের ফি"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                    type="file"
                  />
                </div>
                <div className="">
                  <label htmlFor="">First name</label>
                  <input
                    name="courseFree"
                    placeholder="কোর্সের ফি"
                    className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                    type="file"
                  />
                </div>
              </div>
              <button className="bg-secondary text-white w-full block ml-auto my-3 px-10 py-1 rounded">
                সাবমিট
              </button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EventRegistrationModal; 
//  <div id="container" className={`select-none cursor-pointer`}>
//             <div className="md:w-full lg:w-3/4 flex justify-center items-center mt-[20%] md:mt-[30%] lg:mx-[12%] lg:mt-[5%] xl:mt-[6%] 3xl:mt-[3%]">
//               <div className="w-full md:w-3/4 xl:w-1/2 bg-[#222] text-basic rounded-md p-5 mx-5">
//                 <AiOutlineClose
//                   onClick={handleClose}
//                   className="text-xl text-primary cursor-pointer float-right"
//                 />
//                 <h4 className="mb-5 text-primary font-bold text-xl">
//                   Registration
//                 </h4>
//                 <form>
//                   <h2 className="text-primary">Application for</h2>
//                   {/*content 1 */}
//                   <div className="w-full">
//                     <input
//                       name="courseName"
//                       type="text"
//                       placeholder="পদের নাম"
//                       className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                     />
//                   </div>
//                   <h4 className="mt-8 mb-5 text-primary font-bold">
//                     Personal data
//                   </h4>
//                   {/* content 2 */}
//                   <div className="w-full grid grid-cols-2 gap-5">
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                   </div>
//                   {/* content 3 */}
//                   <div className="grid grid-cols-2 gap-5">
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                   </div>
//                   {/* content 4 */}
//                   <div className="">
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                   </div>
//                   {/* content 5 */}
//                   <div className="grid grid-cols-2 gap-5">
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseName"
//                         type="text"
//                         placeholder="পদের নাম"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                       />
//                     </div>
//                   </div>
//                   {/* content 6 */}
//                   <h4 className="mt-10 mb-5 text-primary font-bold">
//                     Application documents
//                   </h4>
//                   <div className="grid grid-cols-2 gap-5">
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
//                       <input
//                         name="courseFree"
//                         placeholder="কোর্সের ফি"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                         type="file"
//                       />
//                     </div>
//                     <div className="">
//                       <label htmlFor="" className="text-primary">
//                         First name
//                       </label>
                     
//                       <input
//                         name="courseFree"
//                         placeholder="কোর্সের ফি"
//                         className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
//                         type="file"
//                       />
//                     </div>
//                   </div>
//                   <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
//                     সাবমিট
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>