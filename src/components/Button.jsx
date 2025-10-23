import React from "react";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-36 h-9 bg-[#F1ECFF]  rounded-full items-center flex  text-center justify-center gap-5">
      <p className="text-sm font-semibold text-black">{title}</p>
      <div>
        <img className="w-[85%]" src="button.svg" alt="" />
      </div>
    </div>
  );
}

export default Button;
