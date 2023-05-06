import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./global.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import BlogsPage from "./Pages/BlogsPage";
import Blog1 from "./Pages/Blogs/Blog1";
import AllEvents from "./Pages/AllEvents";
import { useState } from "react";
import Courses from "./Pages/Courses/Courses";
import { Toaster } from "react-hot-toast";
import PersonalBlogs from "./Pages/Blogs/PersonalBlogs";
import ProfessionalBlogs from "./Pages/Blogs/ProfessionalBlogs";
import MediaCourses from "./Pages/Courses/MediaCourses";
import LeadershipCourses from "./Pages/Courses/LeadershipCourses";
import LifeCourses from "./Pages/Courses/LifeCourses";

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
    // console.log(window.scrollY);
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
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<Blog1 />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/professional-blogs" element={<ProfessionalBlogs />} />
          <Route path="/personal-blogs" element={<PersonalBlogs />} />
          <Route path="/media-courses" element={<MediaCourses />} />
          <Route path="/leadership-courses" element={<LeadershipCourses />} />
          <Route path="/life-courses" element={<LifeCourses />} />
        </Routes>
      </div>

      <Footer />
      <Toaster
        toastOptions={{ style: { backgroundColor: "#222", color: "#fff" } }}
      />
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
