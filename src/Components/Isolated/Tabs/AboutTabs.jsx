import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import demoImage from "../../../assets/images/instructor-3.png";
import AboutModal from "../Modals/AboutModal";
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

const AboutTabs = () => {
const longText =
    "I Golam Rabby would like to learn from everywhere even it may be from my junior, uneducated & general people like Rickshaw-Puller. In addition, I have much affection for teaching & facilitating a class, discussion, and seminar as well. Also, I am very fond of knowing about Bangladesh & World Affairs; especially on Youth activities as well as Dream, Ethical, Positive, Inspiring & Energizing words & works. \nI am a Founder of Dream Deviser, it’s a Good Education related Online Tutorial Platform As well as I am doing as Senior News Anchor & Radio Jockey in various Radio & TV Channel. Also, I am working as a Lead Feature Writer to weekly job related supplement named Chakrir Khoj in the Daily Jugantor. And, I am working as a Senior News Presenter & Current Affairs related talk show Anchor in Somoy Television. Before that, I had been working here as a Senior Newsroom Editor in International Desk from 1st December, 2010 to 20th November, 2014. Also, I am working as a Media, Communications & Current Affairs Consultant. \nAs well, I have completed BSS and MSS degree in the Department of International Relations with very good result from University of Dhaka. Also, I have vast experience about Education, Teaching, Training, Media, Public Relations, Media Managing, and Consulting of News & Program. Plus, very important thing is that I am an experienced teaching assistant of Journalism, Public Relations and Communications. \nNow-a-days, I am attending as a Senior Trainer of Inspiration & Motivation, News, Program Presentation, Report Writing, Debating & Creative Workshop, Media & Communications Schooling, Youth Leadership and Skill Development course in various renowned Institutions. Personally, I love to learn, discover and write. Furthermore I have very passion to teach through entertaining by using my knowledge and behavior. On the other hand, I am more interested to attach myself as a development worker of Public engagement related Advocacy, Civil Society, Democracy, Good Governance, Youth, Woman Engagement & Empowerment and related work. Finally, I would like to say that, always, I could keep busy my soul with PEOPLE specially youth-minds and their development. Truly speaking, all time, I am eagerly waiting for joining Training, Seminar, Discussion’s Session, Workshop or Event either an Instructor or a Participant. Because of, I want to learn the lot from all over the place.";
  const text = longText.split("\n");
  console.log(text);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        // sx={{ borderBottom: 1, borderColor: "divider" }}
        className="relative flex justify-end -mb-6 mx-6"
      >
        <Tabs
          sx={{
            borderRadius: "8px",
            background: "",
            margin: "0px 5px",
            color: "",
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
        >
          {/* className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center" */}
          <Tab
            sx={{ fontSize: "16px" }}
            label="শর্ট বায়ো"
            {...a11yProps(0)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
          <Tab
            sx={{ fontSize: "16px" }}
            label="প্রেজেন্টেশন ক্যারিয়ার"
            {...a11yProps(1)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
          <Tab
            sx={{ fontSize: "16px" }}
            label="RJ"
            {...a11yProps(2)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
          <Tab
            sx={{ fontSize: "16px" }}
            label="রাইটার"
            {...a11yProps(3)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
          <Tab
            sx={{ fontSize: "16px" }}
            label="ইনফ্লুয়েন্সার"
            {...a11yProps(4)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 700 }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center  bg-black rounded-lg"
        >
          <div>
            <img
              src={demoImage}
              alt=""
              className="xl:-mt-32 w-[413px] object-cover"
            />
          </div>
          <div className="xl:mr-[100px]">
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
            <AboutModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center  bg-black rounded-lg"
        >
          <div>
            <img
              src={demoImage}
              alt=""
              className="xl:-mt-32 w-[413px] object-cover"
            />
          </div>
          <div className="xl:mr-[100px]">
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
            <AboutModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center  bg-black rounded-lg"
        >
          <div>
            <img
              src={demoImage}
              alt=""
              className="xl:-mt-32 w-[413px] object-cover"
            />
          </div>
          <div className="xl:mr-[100px]">
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
            <AboutModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center  bg-black rounded-lg"
        >
          <div>
            <img
              src={demoImage}
              alt=""
              className="xl:-mt-32 w-[413px] object-cover"
            />
          </div>
          <div className="xl:mr-[100px]">
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
            <AboutModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div
          style={{ fontFamily: "Hind Siliguri" }}
          className="p-5 text-primary grid grid-cols-1 xl:grid-cols-2 place-items-center  bg-black rounded-lg"
        >
          <div>
            <img
              src={demoImage}
              alt=""
              className="xl:-mt-32 w-[413px] object-cover"
            />
          </div>
          <div className="xl:mr-[100px]">
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
            <AboutModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
};

export default AboutTabs;