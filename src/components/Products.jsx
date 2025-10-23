import Product from "./Product";
import { motion } from "framer-motion";
import { useState } from "react";
import Video from "./Video";
import { div, video } from "framer-motion/client";
import { IoEllipseSharp } from "react-icons/io5";

function Products() {
  const product = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
  ];

  const videosData = [
    {
      url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    },
    { url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4" },
    {
      url: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
    },
    {
      url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    },
    { url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4" },
  ];

  const scenes = [
    { id: 1, color: "bg-blue-200" },
    { id: 2, color: "bg-blue-300" },
    { id: 3, color: "bg-blue-400" },
    { id: 4, color: "bg-blue-500" },
    { id: 5, color: "bg-blue-600" },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 15);
  };

  return (
    <div className="w-full mt-20   min-h-[100vh] relative bg-[#111] mb-32 ">
      {product.map((elem, index) => {
        return <Product mover={mover} val={elem} key={index} count={index} />;
      })}

      <div className=" absolute top-0  pointer-events-none w-full h-full ">
        <motion.div
          initial={{ y: pos + "rem", x: "-10%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute left-1/3 w-[20rem] h-[15rem]  -translate-x-[10%]  rounded-md  overflow-hidden "
        >
          {scenes.map((scene, index) => {
            return (
              <motion.div
                animate={{ y: -pos + `rem` }}
                className={`scene w-72 h-full rounded-md  `}
              >
                <div className="w-72 h-full  rounded-md  overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    src={videosData[index].url}
                  ></video>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
