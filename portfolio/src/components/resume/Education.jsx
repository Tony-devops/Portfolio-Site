import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Masters of Business Administration"
            subTitle="Aston University: Jan. 2019-Feb. 2022"
            result="Merit"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Web Development Bootcamp"
            subTitle="Bath Spa University: Sep. 2022-Nov. 2022"
            result="Pass"
            des="Bootcamp covering HTML, CSS, React and modules on NPM with a final project at the end. DVD ecommerce site created as part of this programme."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">On-Going</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ultimate Docker Fast-Track Beginner to Advanced"
            subTitle="Udemy "
            result="Online"
            des="A compressed course to bring me up-to-speed on what Docker is and how to start using it."
          />
          <ResumeCard
            title=" The Ultimate React Course 2023: React, Redux & More"
            subTitle="Udemy"
            result="Online"
            des="Run by Jonas Schmedtmann, the course covers modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
