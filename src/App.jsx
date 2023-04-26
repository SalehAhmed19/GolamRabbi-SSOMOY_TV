import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./global.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import MediaCourse from "./Components/Isolated/Courses/MediaCourse";
import LeaderShipCourse from "./Components/Isolated/Courses/LeaderShipCourse";
import LifeCourse from "./Components/Isolated/Courses/LifeCourse";
import BlogsPage from "./Pages/BlogsPage";
import Blog1 from "./Pages/Blogs/Blog1";
import Ancor from "./Components/Isolated/Invite/Ancor";
import Consultant from "./Components/Isolated/Invite/Consultant";
import Webinar from "./Components/Isolated/Invite/Webinar";
import AllEvents from "./Pages/AllEvents";
import { useState } from "react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F3B004",
      },
      secondary: {
        main: "#F80264",
      },
      accent: {
        main: "#B8084F",
      },
    },
  });
  const [active, setActive] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MediaCourse />} />
            <Route
              path="/course/leadership-course"
              element={<LeaderShipCourse />}
            />
            <Route path="/course/life-course" element={<LifeCourse />} />
          </Route>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Ancor />} />
            <Route path="/invite/consultant" element={<Consultant />} />
            <Route path="/invite/webinar" element={<Webinar />} />
          </Route>
          <Route path="/events" element={<AllEvents />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<Blog1 />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop
        style={{
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#333",
          backgroundColor: "#D89F17",
        }}
        component={<TbArrowBigUpLinesFilled />}
        smooth
      />
    </ThemeProvider>
  );
}

export default App;
