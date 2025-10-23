import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex  justify-between items-center border-b-zinc-700 border-[1px] ">
      <div className="max-w-screen bg-zinc-[#161618] py-7   flex gap-20">
        <div>
          <img className="  " src="./refokus logo.svg" alt="" />
        </div>
        <div className="links flex gap-14  ">
          {["Home", "Work", "Carriers", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[.1px] h-5 bg-zinc-700"> </span>
            ) : (
              <NavLink
                className=" flex text-sm items-center text-white gap-1 "
                key={index}
                to={"#"}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: " 0 0 .25em #00FF19" }}
                    className="inline-block w-[.3vw] h-[.3vw] rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </NavLink>
            )
          )}
          <hr />
        </div>
      </div>
      <Button></Button>
    </div>
  );
}

export default Navbar;
