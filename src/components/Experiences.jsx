"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", // Dark card background
        color: "#fff", // White text for readability
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }} // Arrow styling
      date={experience.date}
      dateClassName="custom-date" // Custom class for date styling
      iconStyle={{
        background: experience.iconBg, // Icon background color from data
        color: "#fff",
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // Glowing effect for icons
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id="experience" className="experience-section pt-12 md:pt-14 scroll-mt-14"> {/* Wrapper for the entire section */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay: 1.25 }}
      >
        <div className="mb-10 text-center">
          <div className="inline bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 py-1">
            <h1 className="inline bg-black bg-clip-text mt-0 mb-0 px-4 font-normal text-base text-transparent sm:text-lg md:text-lg">
              Experience
            </h1>
          </div>
          <h2 className="mt-0 mb-2 font-semibold text-2xl text-white md:text-4xl">
            Some Places I have Worked
          </h2>
        </div>
      </motion.div>


      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#ffffff"> {/* White line for contrast */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
