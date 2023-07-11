import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
const AddCoursesModal = ({ open, setOpen, handleOpen, handleClose }) => {
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{ fontFamily: "Hind Siliguri" }}
      >
        <Fade in={open}>
          <Box>
            <div id="container" className={`select-none cursor-pointer`}>
              <div className="md:w-1/2 flex justify-center items-center mt-[50%] md:mx-[24%] lg:mt-[20%] ">
                <div className="bg-[#222] text-basic rounded-md p-5 mx-5">
                  <AiOutlineClose
                    onClick={handleClose}
                    className="text-xl text-primary cursor-pointer float-right"
                  />
                  {/* <h4 className="text-primary font-bold text-xl">
                    ইভেন্ট এ আসতে চাও?
                  </h4> */}
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="lg:w-96"
                    action=""
                  >
                    <input
                      name="courseName"
                      type="text"
                      placeholder="কোর্সের নাম"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      readOnly
                    />
                    <input
                      name="courseDetail"
                      placeholder="কোর্সের বিবরণ"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      type="text"
                    />
                    <input
                      name="instructor"
                      placeholder="ইন্সট্রাক্টর"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      type="text"
                    />
                    <input
                      name="courseDuration"
                      placeholder="কোর্স ডিউরেশন"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      type="text"
                    />
                    <input
                      name="courseFree"
                      placeholder="কোর্সের ফি"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      type="text"
                    />
                    <input
                      name="courseFree"
                      placeholder="কোর্সের ফি"
                      className="w-full my-2 py-1 px-3 focus:outline-none bg-[#14161C] text-[white] text-primary rounded"
                      type="file"
                    />
                    <button className="bg-primary w-full block ml-auto my-3 px-10 py-1 text-[#222] rounded">
                      সাবমিট
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddCoursesModal;
