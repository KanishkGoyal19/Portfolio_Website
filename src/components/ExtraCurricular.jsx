"use client";

import React from "react";
import { GraduationCap, Users, BookOpen } from "lucide-react"; // Icons for each section
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export default function Extras() {
    const sections = [
        {
            title: "Academic Achievements",
            icon: <GraduationCap size={30} className="text-orange-300" />,
            items: [
                {
                    title: "Dean's Honours List",
                    description: "Recognized for academic excellence in Computer Science (2023, 2024).",
                },
                {
                    title: "Entrance International Students Scholarship",
                    description: "Awarded for outstanding academic performance in high school.",
                },
            ],
        },
        {
            title: "Clubs & Organizations",
            icon: <Users size={30} className="text-orange-300" />,
            items: [
                {
                    title: "Events Associate - Guelph Grand Prix Club",
                    description: "Organized and managed events, ensuring smooth execution and member engagement.",
                },
                {
                    title: "Member - Google Developer Student Club",
                    description: "Participated in workshops and hackathons to enhance technical and collaborative skills.",
                },
                {
                    title: "Member - Guelph Trivia Club",
                    description: "Engaged in weekly trivia competitions to foster teamwork and general knowledge.",
                },
            ],
        },
        {
            title: "Tutoring Experiences",
            icon: <BookOpen size={30} className="text-orange-300" />,
            items: [
                {
                    title: "Peer Tutor - Mathematics",
                    description: "Provided guidance to undergraduates on Statistics, Calculus, and Linear Algebra concepts.",
                },
            ],
        },
    ];

    return (
        <section className="relative px-10 md:px-16 2xl:px-48 3xl:px-72 pt-10 md:pt-20 pb-20">
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
                            Extras
                        </h1>
                    </div>
                    <h2 className="mt-0 mb-2 font-semibold text-2xl text-white md:text-4xl">
                        Academic Achievements and Experiences
                    </h2>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="p-6 border border-orange-500 rounded-2xl shadow-lg hover:bg-opacity-80 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-[1.05]"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            {section.icon}
                            <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                        </div>
                        <ul className="space-y-4">
                            {section.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-white bg-gray-900 bg-opacity-40 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-opacity-70"
                                >
                                    <strong className="text-orange-300">{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
