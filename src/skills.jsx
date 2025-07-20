import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,FaBook } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiReactquery} from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';

export default function Skills(){
    return(
        <section id="skills" className="w-full bg-black text-white">
<div className="w-full">
    <h2  className="text-3xl font-semibold text-center mb-6 mt-36 uppercase pulse-effect flex items-center justify-center">
      <FaBook className="mr-2 text-teal-400 text-2xl"/>
      
      my skills</h2>
    <p className="text-lg text-center mb-20">Here are the technologies I use to build modern web applications:</p>

    <div className="flex flex-wrap justify-center items-center gap-20">

      <div className="flex flex-col items-center w-24 text-center">
        <FaHtml5 className="text-6xl mb-2 text-orange-500"/>
        <span>HTML</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <FaCss3Alt  className="text-6xl mb-2 text-blue-500"/>
        <span>CSS</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <FaJs className="text-6xl mb-2 text-yellow-500"/>
        <span >JavaScript</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <SiTypescript className="text-6xl mb-2 text-blue-600" />
        <span>TypeScript</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <FaReact className="text-6xl mb-2 text-blue-400"/>
        <span>React</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <SiReactquery className="text-6xl mb-2 text-pink-500" />
      <span>React Query</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <IoIosPaper className="text-6xl mb-2 text-gray-600" />
        <span >Zustand</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <SiTailwindcss className="text-6xl mb-2 text-teal-400"/>
        <span >Tailwind CSS</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <SiNextdotjs  className="text-6xl mb-2 text-red"/>
        <span >Next.js</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <FaGitAlt  className="text-6xl mb-2 text-orange-600"/>
        <span >Git</span>
      </div>

      <div className="flex flex-col items-center w-32 text-center">
        <FaGithub  className="text-6xl mb-2 text-gray-800" />
        <span>GitHub</span>
      </div>

    </div>
</div>
        </section>
    )
}