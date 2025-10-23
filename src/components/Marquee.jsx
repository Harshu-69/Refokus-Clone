import { motion } from "framer-motion";
import React from "react";
import { GiDuration } from "react-icons/gi";

function Marquee({ imagesurls, direction }) {
  return (
    <>
      <div className="w-full flex  overflow-hidden ">
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex shrink-0 gap-20 py-5  pr-30  "
        >
          {imagesurls.map((url, index) => (
            <img className=" " key={index} src={url} alt="" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex shrink-0 gap-20 py-5 pr-30"
        >
          {imagesurls.map((url, index) => (
            <img className=" " key={index} src={url} alt="" />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Marquee;
