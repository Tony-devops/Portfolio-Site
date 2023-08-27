import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaGoogleDrive } from "react-icons/fa";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">PDF Resume</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tony Arora"
            subTitle="Junior Full Stack Software Engineer"
            result="Click Google Drive Icon"
            des=<span className="bannerIcon">
              <a
                href="https://drive.google.com/file/d/1PGgUgzhUjZjRBYNxlWrKf2LgHQR4s5aJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleDrive />
              </a>
            </span>
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
