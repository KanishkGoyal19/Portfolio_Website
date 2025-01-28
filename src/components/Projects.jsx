"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ index, title, description, tags, image, source_code_link }) => {
  return (
    <div>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-black p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] group">
          {/* Project Image */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub Icon (Appears on Hover) */}
          <div className="absolute inset-0 flex justify-end items-end m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="/Images/github.svg" alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        {/* Project Title and Description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        {/* Tags Section */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color} bg-gray-200 px-2 py-1 rounded`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  return (
    <div id = "projects"className="projects-section">
      {/* Full-width background */}
      <section className="w-full min-h-screen relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100">
        {/* Content Wrapper */}
        <div className="px-10 md:px-16 pt-10 md:pt-20 pb-20 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            variants={textVariant()} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 1.25 }}
          >
            <div className="mb-10 text-center">
              {/* Black Box with Gradient Text */}
              <div className="inline-block bg-black px-4 py-2">
                <h1 className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-100 bg-clip-text text-transparent text-lg font-semibold">
                  Portfolio
                </h1>
              </div>
              <h2 className="mt-4 font-semibold text-2xl text-black md:text-4xl">
                My Most Recent Projects That I Have Worked On
              </h2>
            </div>
          </motion.div>

          {/* Projects Section */}
          <div className="mt-20 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

