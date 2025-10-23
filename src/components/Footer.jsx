import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl flex flex-col   h-72  mx-auto text-white  py-4">
        <div className=" flex justify-between w-full h-3/4">
          <h1 className="text-[9rem] font-['font-md'] leading-none text-left tracking-tight  ">
            Refokus.
          </h1>
          <div className="flex">
            <div className="flex  flex-col">
              <div className="flex w-80 gap-20 text-left ">
                <h3 className="text-zinc-500 w-1/2  ">Social</h3>
                <h3 className="text-zinc-500 w-1/2  ">Sitemap</h3>
              </div>
              <div className="flex w-80  gap-20 text-left">
                <div className=" w-1/2 text-zinc-500 mt-10">
                  <h4>Instagram</h4>
                  <h4>Twitter</h4>
                  <h4>LinkedIn</h4>
                </div>
                <div className=" w-1/2 text-white mt-10">
                  <h4>Home</h4>
                  <h4>Work</h4>
                  <h4>Carriers</h4>
                  <h4>Contact</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 w-full h-1/4 px-2 text-zinc-500" >
            <h2>Privacy Policies</h2>
            <h2>Cookcies</h2>
            <h2>Impressum</h2>
            <h2>Terms</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
