import AddIcon from "@mui/icons-material/Add";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import AddCoursesModal from "../../../Components/Isolated/Modals/AddCoursesModal";
import leadership from "../../../assets/images/leadership.jpg";
import life from "../../../assets/images/life.jpg";
import media from "../../../assets/images/media.jpg";
const Course = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //modal state

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ marginX: "20px" }}>
      <Button
        variant="contained"
        sx={{
          color: "black",
          marginY: "10px",
          display: "flex",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        Add Course <AddIcon className="mx-2" />
      </Button>
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
          <div className="lg:flex lg:justify-between items-center rounded-md bg-[#1E1E20]">
            <div className="md:flex space-x-3">
              <img
                src={media}
                alt=""
                className="object-cover md:w-[200px] rounded-lg"
              />
              {/* info  */}
              <div className="text-[#F6B30F] space-y-[20px] mt-2">
                <p>Course Name: &nbsp;মিডিয়া কোর্স</p>
                <p>Description: &nbsp;মিডিয়া কোর্স ডেসক্রিপশন</p>
                <p>Course ID: &nbsp;gr-mc-001</p>
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
          <div className="lg:flex lg:justify-between items-center rounded-md bg-[#1E1E20]">
            <div className="md:flex space-x-3">
              <img
                src={leadership}
                alt=""
                className="object-cover md:w-[200px] rounded-lg"
              />
              {/* info  */}
              <div className="text-[#F6B30F] space-y-[20px] mt-2">
                <p>Course Name: &nbsp;মিডিয়া কোর্স</p>
                <p>Description: &nbsp;মিডিয়া কোর্স ডেসক্রিপশন</p>
                <p>Course ID: &nbsp;gr-mc-001</p>
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
          <div className="lg:flex lg:justify-between items-center rounded-md bg-[#1E1E20]">
            <div className="md:flex space-x-3">
              <img
                src={life}
                alt=""
                className="object-cover md:w-[200px] rounded-lg"
              />
              {/* info  */}
              <div className="text-[#F6B30F] space-y-[20px] mt-2">
                <p>Course Name: &nbsp;মিডিয়া কোর্স</p>
                <p>Description: &nbsp;মিডিয়া কোর্স ডেসক্রিপশন</p>
                <p>Course ID: &nbsp;gr-mc-001</p>
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
        </TabPanel>
      </TabContext>
      <AddCoursesModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default Course;
