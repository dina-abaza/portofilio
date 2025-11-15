import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

const projectData = [
  {
    title: "E-Commerce Store",
    description: "An online store with product catalog, cart system, and user authentication. Users can browse categories, view product details, and manage their cart with ease. The app supports login and registration, and maintains cart state dynamically using Context API. It's styled with responsive Tailwind CSS and simulates a full-stack experience with JSON Server.",
    techStack: "React.js, Tailwind css, ContextApp, React Router DOM, json-server",
    github: "https://github.com/dina-abaza/e-commerce2",
    liveDemo: "https://e-commerce2-dj5t.vercel.app"
  },
  {
    title: "Vitrine (e-commerce & dashboard)",
    description: "An online furniture store offering a smooth shopping experience with product browsing, cart, checkout, and Stripe payment integration. Includes an admin dashboard for managing products and tracking orders.",
    techStack: "React.js, Tailwind CSS, zustand, React-Router-Dom, Axios, node.js",
    github: "https://github.com/dina-abaza/E-commece-vitrine",
    liveDemo: "http://e-commece-vitrine-jm7x.vercel.app"
  },
 
  {
    title: "restaurant reservation",
    description: "A full-stack restaurant reservation system that allows users to book tables, log in, and communicate with the restaurant. Connected to a real Laravel back-end for managing reservations and users.",
    techStack: " React.js, Tailwind css, React Router DOM, Axios, Zustand, larvel",
    github: "https://github.com/dina-abaza/food-corner",
    liveDemo: "http://food-corner-roan.vercel.app"
  },
   {
    title: "Down Center & Dashboard Platform",
    description: "Down Syndrome Center platform providing personalized content, articles, videos, tips, and events based on the child’s age and specific challenges through a detailed survey. Includes fast AI-powered chat for instant support and appointment booking, fully optimized for mobile devices.",
    techStack: " React.js, Tailwind css, React Router DOM, Axios, Zustand, framer-motion, toastify, lottiefiles, node.js",
    github: "https://github.com/dina-abaza/down-syndrome",
    liveDemo: "https://down-syndrome-one.vercel.app/"
  },
  {
    title: "booking-hotels",
    description: "A full-featured hotel booking app with a real backend, allowing users to browse hotels, book rooms, pay securely via Stripe, and communicate with hotel management—all in a sleek, responsive interface built with React and Tailwind CSS.",
    techStack: " React.js, Tailwind css, React Router DOM, Axios, Zustand, framer-motion, toastify, node.js",
    github: "https://github.com/dina-abaza/portofilio",
    liveDemo: "https://booking-hotels-ue7g.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black text-white py-20">
      <div className="w-full max-w-7xl mx-auto px-1 sm:px-2 md:px-4">
       <h2 className="text-2xl sm:text-3xl font-semibold text-center uppercase mb-6 flex justify-center items-center pulse-effect">
  <FaProjectDiagram className="hidden sm:block md:block mb-2 sm:mb-0 sm:mr-2 text-teal-400 text-2xl" />
  My Projects
</h2>

        <p className="text-lg text-center mb-16">
          Some of the projects I’ve built using modern web technologies:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
          
            <div
              key={index}
              className="bg-gray-900 w-full p-4 sm:p-5 md:p-6 rounded-lg border border-white/10 shadow-lg shadow-teal-400/20 hover:shadow-teal-400/50 hover:scale-105 transition duration-300 flex flex-col min-h-[340px]"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              
              <p className="text-gray-300 mb-4 flex-grow ">{project.description}</p>
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
