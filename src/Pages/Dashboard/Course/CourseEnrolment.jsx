import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { useState } from 'react';
const CourseEnrolment = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ marginX: "20px" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            background: "#F6B30F",
            borderRadius: "5px",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab
              sx={{
                color: "black",
                fontWeight: 700,
                fontFamily: "Hind Siliguri",
              }}
              label="মিডিয়া"
              value="1"
            />
            <Tab
              sx={{
                color: "black",
                fontWeight: 700,
                fontFamily: "Hind Siliguri",
              }}
              label="লিডারশীপ"
              value="2"
            />
            <Tab
              sx={{
                color: "black",
                fontWeight: 700,
                fontFamily: "Hind Siliguri",
              }}
              label="লাইফ কোর্স"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel
          sx={{
            height: "100vh",
            bgcolor: "black",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
          value="1"
        >
          {/* container media*/}
          <div className="p-5 rounded-md bg-[#1E1E20]">
            <div className="space-x-3">
              <div className="text-[#F6B30F] space-y-[20px] mt-2">
                <p>
                  <span className="font-bold">এনরোলমেন্ট আইডিঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;6w57csf7s7f5sfcs5s75fsf8s5f
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্টের নামঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ছালেহ
                  আহমেদ মাহিন
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্ট ইমেইলঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saleh.ahmed.mahin@gmail.com
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্ট ফোন নাম্বারঃ </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+880 1111
                  11111111
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          sx={{
            height: "100vh",
            bgcolor: "black",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
          value="2"
        >
          {/* container leadership*/}
          <div className="p-5 rounded-md bg-[#1E1E20]">
            <div className="space-x-3">
              <div className="text-[#F6B30F] space-y-[20px] mt-2">
                <p>
                  <span className="font-bold">এনরোলমেন্ট আইডিঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;6w57csf7s7f5sfcs5s75fsf8s5f
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্টের নামঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ছালেহ
                  আহমেদ মাহিন
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্ট ইমেইলঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saleh.ahmed.mahin@gmail.com
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্ট ফোন নাম্বারঃ </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+880 1111
                  11111111
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          sx={{
            height: "100vh",
            bgcolor: "black",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
          value="3"
        >
          {/* container life*/}
          <div className="p-5 rounded-md bg-[#1E1E20]">
            <div className="space-x-3">
              <div className="text-[#F6B30F] space-y-[20px] mt-2">
                <p>
                  <span className="font-bold">এনরোলমেন্ট আইডিঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;6w57csf7s7f5sfcs5s75fsf8s5f
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্টের নামঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ছালেহ
                  আহমেদ মাহিন
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্ট ইমেইলঃ</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saleh.ahmed.mahin@gmail.com
                </p>
                <p>
                  <span className="font-bold">স্টুডেন্ট ফোন নাম্বারঃ </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+880 1111
                  11111111
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default CourseEnrolment;