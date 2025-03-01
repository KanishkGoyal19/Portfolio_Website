"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function About() {
   return (
      <section id="about" className="relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 px-10 md:px-16 2xl:px-48 3xl:px-72 pt-10 md:pt-20 pb-20">
         <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 1.25 }}
         >
            {/* Header Section */}
            <div className="mb-10 text-center">
               <div className="inline bg-black">
                  <h1 className="inline bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-black bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 px-4 py-2 font-normal text-base text-transparent sm:text-lg md:text-lg ">
                     About Me
                  </h1>
               </div>
               <h2 className="mt-0 mb-2 font-semibold text-2xl text-black md:text-4xl">
                  Know Me More
               </h2>
            </div>
         </motion.div>

         {/* Two Column Layout */}
         <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Section: Text */}
            <div className="lg:w-[60%]">
               <p className="text-base text-black sm:text-lg md:text-xl leading-relaxed mb-6">
                  I have a strong foundation in programming languages like Java, JavaScript, C, Python, R, and HTML/CSS, and I enjoy tackling complex problems while developing efficient, innovative solutions. I have experience working with modern development tools such as React, Next.js, and Tailwind CSS, as well as version control systems like Git and GitHub, enabling me to build scalable and user-friendly applications.
               </p>
               <p className="text-base text-black sm:text-lg md:text-xl leading-relaxed mb-6">
                  Academically, I have consistently demonstrated excellence, earning a place on the Dean’s List and receiving multiple scholarships for my performance. Beyond technical skills, I take pride in my ability to manage time effectively, think critically, and adapt to new challenges. I am always looking for opportunities to expand my knowledge and apply my skills to meaningful projects.
               </p>
            </div>

            {/* Right Section: Personal Details */}
            <div className="lg:w-[35%] p-6">
               {/* Personal Info */}
               <ul className="divide-y divide-black text-black text-base sm:text-lg">
                  <li className="py-2 flex justify-between">
                     <strong>Name:</strong>
                     <span>Kanishk Goyal</span>
                  </li>
                  <li className="py-2 flex justify-between">
                     <strong>Age:</strong>
                     <span>19</span>
                  </li>
                  <li className="py-2 flex justify-between">
                     <strong>Major:</strong>
                     <span>Computer Science</span>
                  </li>
                  <li className="py-2 flex justify-between">
                     <strong>Minor:</strong>
                     <span>Mathematics</span>
                  </li>
                  <li className="py-2 flex justify-between">
                     <strong>Email:</strong>
                     <span>Kanishkgoyal19@gmail.com</span>
                  </li>
               </ul>
            </div>
         </div>

         {/* Centered Social Icons */}
         <div className="flex items-center justify-center gap-10 mt-12">
            {/* LinkedIn Icon */}
            <a
               href="https://www.linkedin.com/in/kanishkgoyal19/"
               target="_blank"
               rel="noopener noreferrer"
               className="transition-transform duration-300 hover:scale-110"
            >
               <img
                  src="Images/linkedin.svg"
                  alt="LinkedIn Icon"
                  className="w-16 h-16"
               />
            </a>

            {/* GitHub Icon */}
            <a
               href="https://github.com/KanishkGoyal19"
               target="_blank"
               rel="noopener noreferrer"
               className="transition-transform duration-300 hover:scale-110"
            >
               <img
                  src="../Images/github.svg"
                  alt="GitHub Icon"
                  className="w-16 h-16"
               />
            </a>

            {/* Resume Download Icon */}
            <a
               href="Images/Resume.pdf"
               download
               className="transition-transform duration-300 hover:scale-110"
            >
               <img
                  src="Images/download.svg"
                  alt="Download Icon"
                  className="w-16 h-16"
               />
            </a>
         </div>

      </section>
   );
}
