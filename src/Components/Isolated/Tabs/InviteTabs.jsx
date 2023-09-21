import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import demoImage from "../../../assets/images/instructor-3.png";
import MuiModal from "../Modals/MuiModal";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function InviteTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box className="relative flex justify-start md:-mb-8 md:-mx-16 md:p-8">
        <Tabs
          sx={{
            // borderRadius: "8px",
            // background: "#fff",
            // margin: "0px 5px",
            color: "black",
          }}
          indicatorColor="#f40a5c"
          textColor=""
          TabIndicatorProps={{
            style: {
              backgroundColor: "#000",
              height: "5px",
              border: "1px solid #000",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          style={{ fontFamily: "Hind Siliguri" }}
        >
          {/* className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center" */}
          <Tab
            sx={{ fontSize: "14px" }}
            label="অ্যাংকর / MC"
            {...a11yProps(0)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
          <Tab
            sx={{ fontSize: "14px" }}
            label="কনসালটেন্ট"
            {...a11yProps(1)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
          <Tab
            sx={{ fontSize: "14px" }}
            label="ওয়েবিনার"
            {...a11yProps(2)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="bg-black rounded-lg">
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="-mt-8 md:p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center "
        >
          <div className="order-2 xl:order-none xl:ml-[100px]">
            <h1 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold my-5">
              অ্যাংকর/MC 1
            </h1>
            <p className="text-justify 2xs:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis.
            </p>
            <button
              onClick={handleOpen}
              style={{ fontFamily: "Hind Siliguri" }}
              className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f6b30f] hover:bg-[#f6b30f] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] hover:text-black"
            >
              আরও পড়ুন
            </button>
            <MuiModal open={open} handleClose={handleClose}>
              <div className="relative font-bold">
                <IoIosClose
                  onClick={handleClose}
                  className="cursor-pointer text-3xl absolute right-0 -top-6"
                />
                <h1 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold my-5">
                  অ্যাংকর/MC 1
                </h1>
                <p className="text-justify 2xs:text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
                  perspiciatis deleniti eaque illum voluptatibus cumque incidunt
                  ratione, impedit corrupti sint ad pariatur animi quibusdam,
                  dolores adipisci quas laboriosam accusantium assumenda ab.
                  Iusto incidunt inventore perferendis.
                </p>
              </div>
            </MuiModal>
          </div>
          <div className="">
            <img
              src={demoImage}
              alt=""
              className="mt-10 xl:-mt-32 w-[413px] object-cover"
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className="bg-black rounded-lg">
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="-mt-8 md:p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center "
        >
          <div className="order-2 xl:order-none xl:ml-[100px]">
            <h1 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold my-5">
              অ্যাংকর/MC 1
            </h1>
            <p className="text-justify 2xs:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis.
            </p>
            <button
              onClick={handleOpen}
              style={{ fontFamily: "Hind Siliguri" }}
              className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f6b30f] hover:bg-[#f6b30f] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] hover:text-black"
            >
              আরও পড়ুন
            </button>
            <MuiModal open={open} handleClose={handleClose}>
              <div className="relative font-bold">
                <IoIosClose
                  onClick={handleClose}
                  className="cursor-pointer text-3xl absolute right-0 -top-6"
                />
                <h1 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold my-5">
                  অ্যাংকর/MC 1
                </h1>
                <p className="text-justify 2xs:text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
                  perspiciatis deleniti eaque illum voluptatibus cumque incidunt
                  ratione, impedit corrupti sint ad pariatur animi quibusdam,
                  dolores adipisci quas laboriosam accusantium assumenda ab.
                  Iusto incidunt inventore perferendis.
                </p>
              </div>
            </MuiModal>
          </div>
          <div className="">
            <img
              src={demoImage}
              alt=""
              className="mt-10 xl:-mt-32 w-[413px] object-cover"
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className="bg-black rounded-lg">
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="-mt-8 md:p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center "
        >
          <div className="order-2 xl:order-none xl:ml-[100px]">
            <h1 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold my-5">
              অ্যাংকর/MC 1
            </h1>
            <p className="text-justify 2xs:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
              perspiciatis deleniti eaque illum voluptatibus cumque incidunt
              ratione, impedit corrupti sint ad pariatur animi quibusdam,
              dolores adipisci quas laboriosam accusantium assumenda ab. Iusto
              incidunt inventore perferendis.
            </p>
            <button
              onClick={handleOpen}
              style={{ fontFamily: "Hind Siliguri" }}
              className="block mx-auto 2xs:my-4 xs:my-6 sm:my-8 md:my-10 py-2 px-5 border-2 border-[#f6b30f] hover:bg-[#f6b30f] sm:w-[180px] md:w-[290px] text-center rounded-full text-white font-bold 2xs:text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[18px] hover:text-black"
            >
              আরও পড়ুন
            </button>
            <MuiModal open={open} handleClose={handleClose}>
              <div className="relative font-bold">
                <IoIosClose
                  onClick={handleClose}
                  className="cursor-pointer text-3xl absolute right-0 -top-6"
                />
                <h1 className="2xs:text-[12px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold my-5">
                  অ্যাংকর/MC 1
                </h1>
                <p className="text-justify 2xs:text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, vitae obcaecati aspernatur accusamus odio numquam
                  perspiciatis deleniti eaque illum voluptatibus cumque incidunt
                  ratione, impedit corrupti sint ad pariatur animi quibusdam,
                  dolores adipisci quas laboriosam accusantium assumenda ab.
                  Iusto incidunt inventore perferendis.
                </p>
              </div>
            </MuiModal>
          </div>
          <div className="">
            <img
              src={demoImage}
              alt=""
              className="mt-10 xl:-mt-32 w-[413px] object-cover"
            />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
