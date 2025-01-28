"use client"
import { motion } from "framer-motion";
const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="timeline-item flex flex-col md:flex-row items-center gap-6 md:gap-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline Icon */}
      <div
        className="timeline-icon flex items-center justify-center w-16 h-16 rounded-full"
        style={{ background: experience.iconBg }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Timeline Content */}
      <div className="timeline-content bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        <p className="text-secondary text-lg font-medium mt-1">
          {experience.company_name}
        </p>
        <p className="text-gray-400 text-sm">{experience.date}</p>

        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-gray-300 text-base leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
