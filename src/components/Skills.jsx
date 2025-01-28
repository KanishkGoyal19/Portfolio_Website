"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


export default function Skills({ skills }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    // Split skills into two columns
    const midIndex = Math.ceil(skills.length / 2);
    const firstColumn = skills.slice(0, midIndex);
    const secondColumn = skills.slice(midIndex);

    return (
        <section className="relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 px-10 md:px-16 2xl:px-48 3xl:px-72 pt-10 md:pt-20 pb-20">
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
                            Skills
                        </h1>
                    </div>
                    <h2 className="mt-0 mb-2 font-semibold text-2xl text-black md:text-4xl">
                        My Expertise
                    </h2>
                </div>
            </motion.div>

            <div className="md:flex justify-between items-start lg:px-48 2xl:px-72 gap-8">
                {/* First Column */}
                <div className="md:w-full">
                    <div className="w-full">
                        {firstColumn.map((skill, index) => (
                            <div key={index} className="my-10 w-full">
                                <div className="flex justify-between mb-2 w-full">
                                    <h1 className="mt-0 mb-0 font-normal text-base md:text-lg text-black">
                                        {skill.name}
                                    </h1>
                                    <p className="mt-0 mb-0 font-normal text-base md:text-lg text-black">
                                        {skill.percentage}%
                                    </p>
                                </div>
                                <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                                    <div
                                        ref={elementRef}
                                        className={`transition-opacity duration-[1500ms] ${isVisible ? "animate-slideRight" : ""
                                            } bg-black rounded-3xl h-full`}
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Column */}
                <div className="md:w-full">
                    <div className="w-full">
                        {secondColumn.map((skill, index) => (
                            <div key={index} className="my-10 w-full">
                                <div className="flex justify-between mb-2 w-full">
                                    <h1 className="mt-0 mb-0 font-normal text-base md:text-lg text-black">
                                        {skill.name}
                                    </h1>
                                    <p className="mt-0 mb-0 font-normal text-base md:text-lg text-black">
                                        {skill.percentage}%
                                    </p>
                                </div>
                                <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                                    <div
                                        ref={elementRef}
                                        className={`transition-opacity duration-[1500ms] ${isVisible ? "animate-slideRight" : ""
                                            } bg-black rounded-3xl h-full`}
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
