import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "A Full Stack Developer.",
      "A Critical Thinker",
      "An Ai & ML enthusiast",
      "Into Exploring Cloud Computing & ORM",
    ],
    loop: false,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Tony Arora</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "Results-driven MBA graduate with a background in hospitality and
          retail management, seeking to transition into the tech industry.
          Competent understanding of HTML, CSS, JavaScript, React, Node, MySQL
          and excited to gain a deeper understanding. Currently working on Cloud
          computing, ORM and Full stack Projects "
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
