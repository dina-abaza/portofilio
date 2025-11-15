import React, { forwardRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBook,
  FaPaperPlane,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiReactquery, SiZod } from "react-icons/si";
import { IoIosPaper } from "react-icons/io";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-white" /> },
  { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
  { name: "Zustand", icon: <IoIosPaper className="text-gray-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  {
    name: "Next.js",
    icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        className="w-14 h-14 object-contain"
      />
    ),
  },
  { name: "Axios", icon: <FaPaperPlane className="text-cyan-300" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Zod", icon: <SiZod className="text-purple-500" /> },
  { name: "ShadCN", icon: <FaBook className="text-teal-400" /> },
  { name: "Framer Motion", icon: <FaReact className="text-pink-300" /> },
];

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills" className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 uppercase flex items-center justify-center gap-2">
          <FaBook className="mr-2 text-teal-400 text-3xl" />
          My Skills
        </h2>
        <p className="text-xl text-center mb-12">
          Here are the technologies I use to build modern web applications:
        </p>

        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-10 justify-center items-center">
            {skills.map((skill, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ x: isLeft ? -200 : 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-4xl sm:text-6xl md:text-8xl mb-4">{skill.icon}</div>
                  <span className="text-lg md:text-xl font-semibold">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
