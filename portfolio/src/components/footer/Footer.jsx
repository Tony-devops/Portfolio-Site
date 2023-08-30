import React from "react";
import Media from "../banner/Media";

const Footer = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()}. All rights reserved by Tony Arora
      </p>
      <Media />
    </div>
  );
};

export default Footer;
