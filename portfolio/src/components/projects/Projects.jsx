import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets1/index.jsx";
import ProjectsCard from "./ProjectsCards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Click on the GitHub icon for code OR the Globe for hosted link."
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Book Me"
          des=" Hosted on Render so might need a refresh to load: A collaborative project for an external client. A service booking website which allows customers to book a specialist service provider to choose, book, pay and get a Google meet link created in one go. Utilized Google auth, sequelize, React, NPM for the project."
          src={projectOne}
          githubLink="https://github.com/Tony-devops/final-project-gp2"
          websiteLink="https://starter-kit-all6.onrender.com/"
        />
        <ProjectsCard
          title="Rock Papers Scissors"
          des=" A collaborative project with our own version of rock, papers, scissors. Capability of playing against friends or computer. Built using React App."
          src={projectTwo}
          githubLink="https://github.com/Tony-devops/team-game-rock-paper-scissors"
          websiteLink="https://rock-paper-scissors-team.netlify.app/"
        />
        <ProjectsCard
          title="Carbon Check Project"
          des="Our world is in crisis - from climate change to the pollution in our oceans and devastation of our forests. It's up to all of us to fix it. We want more people to be-Aware, calculate and reduce their Carbon Footprint"
          src={projectThree}
          githubLink="https://github.com/Tony-devops/carboncheck.com"
          websiteLink="https://carboncheck.netlify.app/"
        />
        <ProjectsCard
          title="Game Of Thrones Series"
          des=" Basic rendering of GOT API to showcase all episodes and allow filtering based on word search"
          src={projectFour}
          githubLink="https://github.com/Tony-devops/tv-show-dom-project"
          websiteLink="https://cyf-tony-devops-tv.netlify.app/"
        />
        <ProjectsCard
          title="DVD HUT"
          des=" Part of the final project for Bath Spa University. An e-commerce project for DVD site. Cart functionality along with search. Based on HTML, CSS and Javascript"
          src={projectFive}
          githubLink="https://github.com/Tony-devops/DVD_Hut"
          websiteLink="https://joyful-elf-b446fd.netlify.app/"
        />
        <ProjectsCard
          title="Cafe Menu"
          des="A cafe menu with admin panel utilizing CRUD operations. Basic filtering of menu items with editing capability.Hosted on Render and server might be slow to load."
          src={projectSix}
          githubLink="https://github.com/Tony-devops/Cafe-Menu"
          websiteLink="https://teamwork-cafe-menu.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
