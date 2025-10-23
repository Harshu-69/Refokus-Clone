import React from "react";
import Button from "./Button";3
import "../index.css";

function Product({ val, mover, count }) {


  return (
    <div
      onMouseEnter={() => {
        mover(count);
      }}
      className="w-full text-white p-10 h-[15rem]   items-center flex justify-between  "
    >
      <h3 className="text-4xl font-regular " style={{ fontFamily: "font-md" }}>
        {val.title}
      </h3>
      {/* <div className="vdo-div w-72 h-56  "></div> */}
      <div className="info flex flex-col gap-5 items-start mr-16">
        <p className="w-[23rem] text-lg ">{val.description}</p>
        <div className="flex gap-5 ">
          {val.live && <Button title="Live Website" />}
          {val.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
}

export default Product;
