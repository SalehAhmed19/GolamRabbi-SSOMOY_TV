import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import "./global.css";
import AllEvents from "./Pages/AllEvents";
import Blog1 from "./Pages/Blogs/Blog1";
import PersonalBlogs from "./Pages/Blogs/PersonalBlogs";
import ProfessionalBlogs from "./Pages/Blogs/ProfessionalBlogs";
import BlogsPage from "./Pages/BlogsPage";
import Courses from "./Pages/Courses/Courses";
import LeadershipCourses from "./Pages/Courses/LeadershipCourses";
import LifeCourses from "./Pages/Courses/LifeCourses";
import MediaCourses from "./Pages/Courses/MediaCourses";
import About from "./Pages/Dashboard/About";
import Books from "./Pages/Dashboard/Books";
import Circular from "./Pages/Dashboard/Circular";
import Course from "./Pages/Dashboard/Course/Course";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import Events from "./Pages/Dashboard/Events";
import FeaturedIn from "./Pages/Dashboard/FeaturedIn";
import Invite from "./Pages/Dashboard/Invite";
import Quotes from "./Pages/Dashboard/Quotes";
import Testimonials from "./Pages/Dashboard/Testimonials";
import Home from "./Pages/Home";
import IimageGalleryPage from "./Pages/IimageGalleryPage";
import Jobs from "./Pages/Jobs";

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
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/professional-blogs" element={<ProfessionalBlogs />} />
          <Route path="/personal-blogs" element={<PersonalBlogs />} />
          <Route path="/media-courses" element={<MediaCourses />} />
          <Route path="/leadership-courses" element={<LeadershipCourses />} />
          <Route path="/life-courses" element={<LifeCourses />} />
          <Route path="/gallery" element={<IimageGalleryPage />} />
          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="course" element={<Course />} />
            <Route path="events" element={<Events />} />
            <Route path="circular" element={<Circular />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="featured-in" element={<FeaturedIn />} />
            <Route path="invite" element={<Invite />} />
            <Route path="about" element={<About />} />
            <Route path="books" element={<Books />} />
            <Route path="quotes" element={<Quotes />} />
          </Route>
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
