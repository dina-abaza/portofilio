import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBook,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";

import { IoIosPaper } from "react-icons/io";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
  { name: "Zustand", icon: <IoIosPaper className="text-gray-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  {
    name: "Next.js",
    icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        className="w-10 h-10"
      />
    ),
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 uppercase flex items-center justify-center">
          <FaBook className="mr-2 text-teal-400 text-2xl" />
          My Skills
        </h2>
        <p className="text-lg text-center mb-12">
          Here are the technologies I use to build modern web applications:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
