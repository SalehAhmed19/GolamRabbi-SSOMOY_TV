import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./global.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Shared/Footer";

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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
