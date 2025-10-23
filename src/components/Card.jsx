import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../index.css";
import Button from "./Button";
import { hover, motion } from "framer-motion";

function Card({ width, startProj, btn, para, hoverColor = "false" }) {
  return (
    <>
      <motion.div
        className={` ${width}   min-h-52 flex flex-col  justify-between gap-24  p-5 text-white rounded-lg bg-zinc-800  `}
        whileHover={{
          backgroundColor: hoverColor === "true" && "#7443FF",
          padding: "25px",
        }}
      >
        <div className={`flex  flex-col  justify-between gap-4`}>
          <div className="flex justify-between">
            <h3 className="text-md font-regular font-['font-md']  leading-none ">
              Get In Touch
            </h3>
            <FaLongArrowAltRight />
          </div>
          <div>
            <h2 className="text-2xl font-regular font-['font-md'] tracking-tight leading-none">
              Let's get to it, together.
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5">
          <div className="">
            {startProj === "true" ? (
              <h1 className=" text-[7.5vw]  font-extrabold font-['font-md]  tracking-wide leading-none">
                Start a Project
              </h1>
            ) : null}
          </div>
          {btn === "true" ? <Button></Button> : null}
          {para === "true" ? (
            <p className=" text-zinc-400 text-base font-medium font-['font-md'] ">
              Exlplore what drives our team.
            </p>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
