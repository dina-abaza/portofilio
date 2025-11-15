import React, { forwardRef } from "react";
import { FaUser } from "react-icons/fa";

// forwardRef علشان نقدر نمرر ref من App.js
const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full max-w-[90%] mx-auto md:max-w-6xl  bg-black text-white py-12 px-4 md:px-6 mt-20"
    >
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center uppercase pulse-effect flex items-center justify-center gap-2 whitespace-nowrap">
          <FaUser className="mr-2 text-teal-400 text-2xl" />
          About Me
        </h2>
<div className="text-lg text-gray-300 leading-relaxed space-y-6 text-center sm:text-center md:text-left">

          <p>
            I'm a passionate Front-End Developer who enjoys crafting responsive and interactive web experiences.
            I believe in clean code, great UI, and continuous learning.
          </p>

          <p>
            I love front-end development because it combines creativity and logic.
            It allows me to bring designs to life and solve real-world problems through code.
          </p>

          <p>
            I started my journey by learning HTML, CSS, and JavaScript, then advanced to frameworks like React and tools like Tailwind and Git.
            I'm always exploring new technologies to improve my skills.
          </p>

          <p>
            I'm looking for opportunities where I can grow as a developer, work on exciting projects, and collaborate with talented teams.
          </p>

          <p>
            Outside of coding, I enjoy reading, learning new things, and staying updated with design trends.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
