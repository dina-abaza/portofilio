import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

const projectData = [
  {
    title: "E-Commerce Store",
    description: "An online store with product catalog, cart system, and user authentication.",
    techStack: "React.js, contextApp, React Router DOM",
    github: "",
    liveDemo: "",
  },
  {
    title: "vitrine",
    description: "Vitrine is an online store for showcasing and selling modern home furniture, offering an easy and attractive shopping experience with a curated selection to suit all tastes",
    techStack: "React.js, Tailwind CSS, zustand, React-Router-Dom, Axios",
    github: "",
    liveDemo: "",
  },
  {
    title: "booking hotel",
    description: "A web app for easy hotel and flight booking with search and price comparison features",
    techStack: "React.js, zustand, React Router DOM ,axios ,server-json, tailwind css",
    github: "",
    liveDemo: "",
  },
  {
    title: "dashboard",
    description: ".",
    techStack: " React.js , React-Router-Dom , tailwind css , fetch-Api , zustand",
    github: "",
    liveDemo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black text-white py-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center uppercase mb-6 flex justify-center items-center pulse-effect">
          <FaProjectDiagram className="mr-2 text-teal-400 text-2xl" />
          My Projects
        </h2>
        <p className="text-lg text-center mb-16">
          Some of the projects I’ve built using modern web technologies:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-white/10 shadow-lg shadow-teal-400/20 hover:shadow-teal-400/50 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-semibold text-white">Tech:</span> {project.techStack}
              </p>
              <div className="flex justify-between text-sm text-teal-300">
                <a href={project.github} target="_blank" rel="noreferrer" className="hover:underline">
                  <span className="text-teal-400">GitHub</span>
                </a>
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="hover:underline">
                  <span className="text-teal-400">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
