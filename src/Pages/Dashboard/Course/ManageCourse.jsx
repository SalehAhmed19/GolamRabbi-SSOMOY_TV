import AddIcon from "@mui/icons-material/Add";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import AddCoursesModal from "../../../Components/Isolated/Modals/AddCoursesModal";
import Leadership from "./Leadership";
import Life from "./Life";
import Media from "./Media";

const ManageCourse = () => {
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
            bgcolor: "black",
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
                color: "#f6b30f",
                fontWeight: 700,
                fontFamily: "Hind Siliguri",
              }}
              label="মিডিয়া"
              value="1"
            />
            <Tab
              sx={{
                color: "#f6b30f",
                fontWeight: 700,
                fontFamily: "Hind Siliguri",
              }}
              label="লিডারশীপ"
              value="2"
            />
            <Tab
              sx={{
                color: "#f6b30f",
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
            bgcolor: "black",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
          value="1"
        >
          {/* container media*/}
          <Media />
        </TabPanel>
        <TabPanel
          sx={{
            bgcolor: "black",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
          value="2"
        >
          {/* container leadership*/}
          <Leadership />
        </TabPanel>
        <TabPanel
          sx={{
            bgcolor: "black",
            color: "white",
            fontFamily: "Hind Siliguri",
          }}
          value="3"
        >
          {/* container life*/}
          <Life />
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

export default ManageCourse;
