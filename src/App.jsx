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

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MediaCourse />} />
            <Route
              path="course/leadership-course"
              element={<LeaderShipCourse />}
            />
            <Route path="course/life-course" element={<LifeCourse />} />
          </Route>
          <Route path="/blogs" element={<BlogsPage />}></Route>
          <Route path="/blogs/blog-1" element={<Blog1 />} />
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
