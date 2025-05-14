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
    title: "Task Manager App",
    description: "A To-Do List application that allows users to manage their tasks efficiently. Users can add new tasks, mark them as completed or incomplete, edit task details, and delete tasks. It helps users organize and prioritize their daily activities.",
    techStack: "React.js, contextApp",
    github: "",
    liveDemo: "",
  },
  {
    title: "Simple To-Do List",
    description: "A task management web app that allows users to create, edit, and manage tasks, organize them by priority, and track deadlines.",
    techStack: "React.js, Tailwind CSS, zustand",
    github: "",
    liveDemo: "",
  },
  {
    title: "Life Organizer",
    description: "A daily life organization app designed to help users structure their day, prioritize tasks, and achieve their goals.",
    techStack: "React.js, contextApp, React Router DOM",
    github: "",
    liveDemo: "",
  },
  {
    title: "Simple CRUD App",
    description: "A simple CRUD application built with vanilla JavaScript to demonstrate basic CRUD operations: Create, Read, Update, and Delete.",
    techStack: "HTML, CSS, JavaScript",
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
