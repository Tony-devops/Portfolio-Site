import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Employment & Training</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Decisioning Consultant"
            subTitle="Adqura Limited: March 2023- Ongoing"
            result="United Kingdom"
            des="Adqura, is a specialized consulting firm and partner of PEGA Ventures, empowers businesses with customized customer and employee-centric strategies, decisioning programs, and delivery services. My role currently is within the Logic team supporting an ongoing project with HMRC."
          />
          <ResumeCard
            title="Operations Director"
            subTitle="GSM. Traders Limited: June 2016- July 2022"
            result="United Kingdom"
            des="Online Retail company specializing in Giftware, Homeware, Cookware and Toys. "
          />
          <ResumeCard
            title="General Manager"
            subTitle="The Glebe Hotel, Warwickshire: July 2014- May 2016"
            result="United Kingdom"
            des="Grade two listed property in Warwickshire, West Midlands. Has expansive grounds and its own leisure centre just one mile off the M40. Delivered a 22% LFL growth in Revenue."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Volunteering</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tech Trainee & Volunteer"
            subTitle="Code Your Future: Sept. 2022- Ongoing"
            result="United Kingdom"
            des="CodeYourFuture (CYF) is a UK based non-profit organization that trains people to become web developers and helps them to find work in the tech industry"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
