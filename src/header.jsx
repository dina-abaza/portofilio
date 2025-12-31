import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaProjectDiagram,
  FaHome,
  FaBook,
} from "react-icons/fa";

export default function Header({ refs }) {
  const [animateImage, setAnimateImage] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Dina 👋";

  useEffect(() => {
    // Typing effect
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);

    // Animate profile image
    setTimeout(() => setAnimateImage(true), 100);

    // Animate menu icons from right
    const elements = document.querySelectorAll(".menu-item");
    elements.forEach((element, idx) => {
      element.style.transform = "translateX(50px)";
      element.style.opacity = "0";
      element.style.transition = "all 0.5s ease-out";
      setTimeout(() => {
        element.style.transform = "translateX(0)";
        element.style.opacity = "1";
      }, idx * 300); // كل أيقونة تتأخر 0.3 ثانية
    });

    return () => clearInterval(interval);
  }, []);

  // دالة scroll للـ refs
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-black text-white flex items-center justify-center  w-full"
    >
   <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center w-2/3 gap-6 mt-10">
  <img
    src="/profile1.jpg"
    alt="صورة شخصية"
    className={`w-40 h-40 md:w-60 md:h-60 rounded-full mb-4 lg:mb-0 lg:mr-6 shadow-2xl transition-all duration-1000 ease-out ${animateImage ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
  />

  <div className="text-center lg:text-left">
    <h2 className="text-3xl md:text-5xl font-semibold mb-4 pulse-effect">
      {typedText}
    </h2>
    <p className="text-lg md:text-xl leading-relaxed">
      A passionate Front-End Developer
      <br />
      I build modern, responsive websites using React.
    </p>
    <a href="/MYCV.pdf" target="_blank" rel="noopener noreferrer">
      <button className="text-teal-600 text-lg border-2 border-teal-600 rounded-md hover:text-white transform transition-colors duration-700 focus:outline-none mt-3">
        View My CV
      </button>
    </a>
  </div>
</div>


      {/* Menu Icons */}
      <div
        id="menu"
        className="fixed top-10 right-5 md:right-10 z-50 flex justify-center items-center"
      >
        <ul className="flex flex-col gap-4 text-xl sm:text-2xl md:text-3xl px-0.5 md:px-1">
          <li
            className="menu-item cursor-pointer"
            onClick={() =>
              scrollToSection({ current: document.getElementById("home") })
            }
          >
            <FaHome className="text-white transition duration-300 hover:opacity-50" />
          </li>

          <li className="menu-item cursor-pointer" onClick={() => scrollToSection(refs.skillsRef)}>
            <FaBook className="text-white transition duration-300 hover:opacity-50" />
          </li>

          <li className="menu-item cursor-pointer" onClick={() => scrollToSection(refs.aboutRef)}>
            <FaUser className="text-white transition duration-300 hover:opacity-50" />
          </li>

          <li className="menu-item cursor-pointer" onClick={() => scrollToSection(refs.educationRef)}>
            <FaGraduationCap className="text-white transition duration-300 hover:opacity-50" />
          </li>

          <li className="menu-item cursor-pointer" onClick={() => scrollToSection(refs.projectsRef)}>
            <FaProjectDiagram className="text-white transition duration-300 hover:opacity-50" />
          </li>

          <li className="menu-item cursor-pointer" onClick={() => scrollToSection(refs.contactRef)}>
            <FaEnvelope className="text-white transition duration-300 hover:opacity-50" />
          </li>
        </ul>
      </div>
    </section>
  );
}
