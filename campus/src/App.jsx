import React, { useContext } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./Routes/home";
import Contact from "./Routes/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextGlobal } from "./components/utils/global.context";

function App() {
  const { theme } = useContext(ContextGlobal);
  return (
      <BrowserRouter>
        <div className={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;