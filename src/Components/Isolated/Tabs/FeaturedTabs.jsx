import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import PropTypes from "prop-types";
import * as React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../Styles/FeaturedTabs.css";
import AudioCard from "../Cards/AudioCard";
import NewsCards from "../Cards/NewsCards";
import OnnanoCard from "../Cards/OnnanoCard";
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

export default function FeaturedTabs() {
  const longText =
    "I Golam Rabby would like to learn from everywhere even it may be from my junior, uneducated & general people like Rickshaw-Puller. In addition, I have much affection for teaching & facilitating a class, discussion, and seminar as well. Also, I am very fond of knowing about Bangladesh & World Affairs; especially on Youth activities as well as Dream, Ethical, Positive, Inspiring & Energizing words & works. \nI am a Founder of Dream Deviser, it’s a Good Education related Online Tutorial Platform As well as I am doing as Senior News Anchor & Radio Jockey in various Radio & TV Channel. Also, I am working as a Lead Feature Writer to weekly job related supplement named Chakrir Khoj in the Daily Jugantor. And, I am working as a Senior News Presenter & Current Affairs related talk show Anchor in Somoy Television. Before that, I had been working here as a Senior Newsroom Editor in International Desk from 1st December, 2010 to 20th November, 2014. Also, I am working as a Media, Communications & Current Affairs Consultant. \nAs well, I have completed BSS and MSS degree in the Department of International Relations with very good result from University of Dhaka. Also, I have vast experience about Education, Teaching, Training, Media, Public Relations, Media Managing, and Consulting of News & Program. Plus, very important thing is that I am an experienced teaching assistant of Journalism, Public Relations and Communications. \nNow-a-days, I am attending as a Senior Trainer of Inspiration & Motivation, News, Program Presentation, Report Writing, Debating & Creative Workshop, Media & Communications Schooling, Youth Leadership and Skill Development course in various renowned Institutions. Personally, I love to learn, discover and write. Furthermore I have very passion to teach through entertaining by using my knowledge and behavior. On the other hand, I am more interested to attach myself as a development worker of Public engagement related Advocacy, Civil Society, Democracy, Good Governance, Youth, Woman Engagement & Empowerment and related work. Finally, I would like to say that, always, I could keep busy my soul with PEOPLE specially youth-minds and their development. Truly speaking, all time, I am eagerly waiting for joining Training, Seminar, Discussion’s Session, Workshop or Event either an Instructor or a Participant. Because of, I want to learn the lot from all over the place.";
  const text = longText.split("\n");
  console.log(text);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={{
            borderRadius: "8px",
            background: "#111118",
            margin: "0 5px",
            color: "#D89F17",
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {/* className="bg-[#222] text-primary lg:bg-[#B8084F] lg:my-7 w-40 py-2 cursor-pointer lg:text-[#fff] text-xl text-center" */}
          <Tab
            sx={{ color: "#E0E0E0", fontSize: "16px" }}
            label="টিভি"
            {...a11yProps(0)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
          <Tab
            sx={{ color: "#E0E0E0", fontSize: "16px" }}
            label="নিউজ পেপার"
            {...a11yProps(1)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
          <Tab
            sx={{ color: "#E0E0E0", fontSize: "16px" }}
            label="রেডিও"
            {...a11yProps(2)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
          <Tab
            sx={{ color: "#E0E0E0", fontSize: "16px" }}
            label="অন্যান্য"
            {...a11yProps(3)}
            style={{ fontFamily: "Hind Siliguri", fontWeight: 500 }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="-mx-5 relative rounded-xl bg-[#111118] cursor-pointer p-5">
          {/* tv slider container */}
          <div className="select-none">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              // loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
              }}
              modules={[Navigation, Pagination]}
              className="w-full md:w-4/5"
            >
              <SwiperSlide className="mb-5 py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                <div>
                  <iframe
                    className="border-[3px] border-[#D89F17] md:w-[600px] md:h-[400px] lg:w-[1100px] lg:h-[450px] rounded-md"
                    src="https://www.youtube.com/embed/Lq5yXrYSVzg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                <div>
                  <iframe
                    className="md:w-[600px] md:h-[400px] lg:w-[1100px] lg:h-[450px] rounded-md"
                    src="https://www.youtube.com/embed/gYOlzeTsgAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                <div>
                  <iframe
                    className="md:w-[600px] md:h-[400px] lg:w-[1100px] lg:h-[450px] rounded-md"
                    src="https://www.youtube.com/embed/gYOlzeTsgAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                <div>
                  <iframe
                    className="md:w-[600px] md:h-[400px] lg:w-[1100px] lg:h-[450px] rounded-md"
                    src="https://www.youtube.com/embed/gYOlzeTsgAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide className="py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                <div>
                  <iframe
                    className="md:w-[600px] md:h-[400px] lg:w-[1100px] lg:h-[450px] rounded-md"
                    src="https://www.youtube.com/embed/gYOlzeTsgAE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* previous btn */}
            <div className="hidden md:block btn-prev cursor-pointer absolute top-16 md:top-[240px]  md:left-6 lg:left-[150px]  bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            {/* next btn */}
            <div className="hidden md:block btn-next cursor-pointer absolute  top-16 md:top-[240px] md:right-6 lg:right-[150px] bg-primary  rounded-full p-1 lg:p-3 lg:w-[45px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </div>
          {/* shapes */}
          {/* shape 1 */}
          <div className="absolute top-0 left-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 border-dashed border-[#D89F17] rounded-tl-[500px] rounded-br-full"></div>
          {/* shape 2 */}
          <div className="absolute top-5 right-1 md:top-12 md:right-6 lg:top-8 lg:right-[200px]  md:w-[120px] w-[50px] h-[50px] md:h-[120px] lg:w-[180px] lg:h-[180px] rounded-full bg-[#D89F17]"></div>
          {/* shape 3 */}
          <div className="absolute bottom-[40px] left-1 md:bottom-[90px] md:left-8 lg:bottom-8 lg:left-[200px]   md:w-[120px] w-[50px] h-[50px] md:h-[120px] lg:w-[180px] lg:h-[180px] border-2 border-dashed border-[#D89F17] rounded-full"></div>
          {/* shape 4 */}
          <div className="absolute bottom-0 right-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#D89F17] rounded-tl-full rounded-br-[500px]"></div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="-mx-5 relative  cursor-pointer">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // loop={true}
            navigation={{
              prevEl: ".btn-prev",
              nextEl: ".btn-next",
            }}
            modules={[Navigation]}
            breakpoints={{
              668: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className=""
          >
            <SwiperSlide>
              <NewsCards />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCards />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCards />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCards />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCards />
            </SwiperSlide>
          </Swiper>
          {/* previous btn */}
          <div className="btn-prev cursor-pointer absolute top-1/2  -left-9 lg:-left-16  bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div>
          {/* next btn */}
          <div className="btn-next cursor-pointer absolute top-1/2  -right-9 lg:-right-16 bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="-mx-5 relative rounded-xl bg-[#111118] cursor-pointer p-5">
          {/* audio slider container */}
          <div className="select-none">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              // loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".btn-prev",
                nextEl: ".btn-next",
              }}
              modules={[Navigation, Pagination]}
              className="w-full md:w-4/5"
            >
              <SwiperSlide className="mb-5 py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                  <AudioCard />
              </SwiperSlide>
              <SwiperSlide className="mb-5 py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                  <AudioCard />
              </SwiperSlide>
              <SwiperSlide className="mb-5 py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                  <AudioCard />
              </SwiperSlide>
              <SwiperSlide className="mb-5 py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                  <AudioCard />
              </SwiperSlide>
              <SwiperSlide className="mb-5 py-5 w-full h-1/2 flex justify-center items-center md:pt-16 md:pb-20">
                  <AudioCard />
              </SwiperSlide>
            </Swiper>
            {/* previous btn */}
            <div className="hidden md:block btn-prev cursor-pointer absolute top-16 md:top-[240px]  md:left-6 lg:top-1/2 lg:left-[150px]  bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowLeft />
              </span>
            </div>
            {/* next btn */}
            <div className="hidden md:block btn-next cursor-pointer absolute  top-16 md:top-[240px] md:right-6 lg:top-1/2 lg:right-[150px] bg-primary  rounded-full p-1 lg:p-3 lg:w-[45px] ">
              <span className="font-bold text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
          </div>
          {/* shapes */}
          {/* shape 1 */}
          <div className="absolute top-0 left-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 border-dashed border-[#D89F17] rounded-tl-[500px] rounded-br-full"></div>
          {/* shape 2 */}
          <div className="absolute top-5 right-1 md:top-12 md:right-12 lg:top-8 lg:right-[200px]  md:w-[120px] w-[50px] h-[50px] md:h-[120px] lg:w-[180px] lg:h-[180px] rounded-full bg-[#D89F17]"></div>
          {/* shape 3 */}
          <div className="absolute bottom-[40px] left-1 md:bottom-[90px] md:left-8 lg:bottom-8 lg:left-[200px]   md:w-[120px] w-[50px] h-[50px] md:h-[120px] lg:w-[180px] lg:h-[180px] border-2 border-dashed border-[#D89F17] rounded-full"></div>
          {/* shape 4 */}
          <div className="absolute bottom-0 right-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#D89F17] rounded-tl-full rounded-br-[500px]"></div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="-mx-5 relative  cursor-pointer">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // loop={true}
            navigation={{
              prevEl: ".btn-prev",
              nextEl: ".btn-next",
            }}
            modules={[Navigation]}
            breakpoints={{
              668: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className=""
          >
            <SwiperSlide>
              <OnnanoCard />
            </SwiperSlide>
            <SwiperSlide>
              <OnnanoCard />
            </SwiperSlide>
            <SwiperSlide>
              <OnnanoCard />
            </SwiperSlide>
            <SwiperSlide>
              <OnnanoCard />
            </SwiperSlide>
            <SwiperSlide>
              <OnnanoCard />
            </SwiperSlide>
          </Swiper>
          {/* previous btn */}
          <div className="btn-prev cursor-pointer absolute top-1/2  -left-9 lg:-left-16  bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowLeft />
            </span>
          </div>
          {/* next btn */}
          <div className="btn-next cursor-pointer absolute top-1/2  -right-9 lg:-right-16 bg-primary rounded-full p-1 lg:p-3 lg:w-[45px] ">
            <span className="font-bold text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
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
