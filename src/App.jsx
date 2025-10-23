import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Video from "./components/Video";
import LocomotiveScroll from "locomotive-scroll";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div
      className="w-full bg-[#111]   min-h-screen "
      style={{ fontFamily: "font-lig" }}
    >
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
      {/* <Video /> */}
    </div>
  );
}

export default App;
