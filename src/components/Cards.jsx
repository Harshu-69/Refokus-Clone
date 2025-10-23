import React from "react";
import Card from "./Card";
function Cards() {
  return (
    <div className="w-full mt-80 mb-44 ">
      <div className=" flex gap-5 my-20 max-w-screen-xl relative mx-auto">
        <Card
          width={"basis-1/3"}
          startProj={"false"}
          btn={"false"}
          para={"true"}
        />
        <Card
          width={"basis-2/3"}
          startProj={"true"}
          hoverColor="true"
          btn={"true"}
          para={"false"}
        />
      </div>
    </div>
  );
}

export default Cards;
