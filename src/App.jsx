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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
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
