import React from "react";

function Stripe({ val }) {
  return (
    <div className="mt-20 max-w-96 flex  items-center justify-center gap-20 py-6 px-10 border border-zinc-500 w-full">
      <img src={val.url} alt="" />
      <p className="text-white font-bold ">{val.num}</p>
    </div>
  );
}

export default Stripe;
