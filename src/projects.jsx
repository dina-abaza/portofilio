import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

const projectData = [
  {
    title: "E-Commerce Store",
    description: "An online store with product catalog, cart system, and user authentication.",
    techStack: "React.js, contextApp, React Router DOM, json-server",
    github: "https://github.com/dina-abaza/e-commerce2",
    liveDemo: "https://e-commerce2-dj5t.vercel.app"
  },
  {
    title: "Vitrine",
    description: "Vitrine is an online store for showcasing and selling modern home furniture, offering an easy and attractive shopping experience with a curated selection to suit all tastes.",
    techStack: "React.js, Tailwind CSS, zustand, React-Router-Dom, Axios",
    github: "https://github.com/dina-abaza/E-commece-vitrine",
    liveDemo: "https://e-commece-vitrine.vercel.app"
  },
  {
    title: "Booking hotel",
    description: "A web app for easy hotel and flight booking with search and price comparison features.",
    techStack: "React.js, zustand, React Router DOM, axios, server-json, tailwind css, json-server",
    github: "https://github.com/dina-abaza/booking-hotels",
    liveDemo: "https://booking-hotels-b9ka.vercel.app"
  },
  {
    title: "Dashboard",
    description: "A fully responsive and interactive admin dashboard designed for managing users, products, orders, and settings.",
    techStack: "React.js, React-Router-Dom, tailwind css, fetch-Api, zustand, json-server",
    github: "https://github.com/dina-abaza/DashBoard2",
    liveDemo: "https://dash-board2.vercel.app"
  },
  {
    title: "Simple Crud App",
    description: "A basic CRUD (Create, Read, Update, Delete) app that allows users to manage a list of items.",
    techStack: "HTML, CSS, Vanilla JavaScript",
    github: "https://github.com/dina-abaza/crud",
    liveDemo: "https://crud-hazel-nine.vercel.app"
  },
  {
    title: "Simple Quiz App",
    description: "A simple and interactive quiz application that allows users to take a quiz.",
    techStack: "HTML, CSS, Vanilla JavaScript",
    github: "https://github.com/dina-abaza/simple-quiz",
    liveDemo: "https://simple-quiz-uhc1.vercel.app"
  }
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
              className="bg-gray-900 p-6 rounded-lg border border-white/10 shadow-lg shadow-teal-400/20 hover:shadow-teal-400/50 hover:scale-105 transition duration-300 flex flex-col min-h-[340px]"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">Tech:</span> {project.techStack}
              </p>

            <div className="flex justify-between text-sm mt-auto pt-4">
              <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-teal-400 hover:underline "
              >
                🔗 GitHub
                </a>
                <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                 className="text-teal-400 hover:underline"
                 >
                  🚀 Live Demo
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
