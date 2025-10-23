// import { Component } from "react"

// Architecture

// App
//     Navbar
//         Btn Component
//     Work
//     Stripes
//         Stripe
//     Products
//         Product
//     Marquee
//     Blocks
//         Block
//     Footer

//? max-w-screen-xl -> means it gives 1280px & when screen width decrses from 1280px then this elem also shrinks with it

//? max-w-screen-xl & mx-auto fixed space ko center krna. Ex - Navbar

//? <sup>
// The <sup> tag defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font.

// In React JS  inline style -> 1st brac{} JSX ,2nd {} is for styling and value should be in a " " quote
//? style={{ boxShadow: " 0 0 .25em #00FF19" }}

//~ Smoothscrolling - use Locomotive Js

import LocomotiveScroll from 'locomotive-scroll';

// inside the App.jsx
// const locomotiveScroll = new LocomotiveScroll();

// ! useScroll() Hook gives us 4 things

// scrollX
// scrollXProgress
// scrollY
// scrollYProgress

//* scrollY → gives you current Vertical scroll position (in pixels).

//* scrollYProgress - how much scroll is done from starting in %age form
//?  gives values from (0 to 1), if mltiplyd by *100 then it gives values in %age

// In Work Main Logic for dynamically images loading

const {scrollYProgress} = useScroll(); //! Framer Motion

scrollYProgress.on("change", (data) = > {
    console.log(data); // data is value of ScrollYProgress  from (0 to 1)

    function showImages(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 8:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    } });


          
//~ Jab bhe initial me trsltX (x:"") lgate ha to it stops working for that hme us x dubara se likhna hota hai initial={{ y: pos, x: "-10%" }}