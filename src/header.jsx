import React, { useEffect,useState } from "react";
import { FaUser, FaEnvelope, FaGraduationCap, FaProjectDiagram, FaHome, FaBook } from 'react-icons/fa';

export default function Header() {
  const [animateImage,setAnimateImage]=useState(false)
  useEffect(() => {
    const elements = document.querySelectorAll('.menu-item');
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.3}s`;
    });
    setAnimateImage(true)
  }, []);

    return (
      <section id="home" className=" bg-black text-white flex items-center justify-between gap-20 w-full">
        
        <div className="flex flex-col md:flex-row items-center md:items-start w-2/3 gap-10 mt-10">
          <img
            src="/profile1.jpg"
            alt="صورة شخصية"
           className={`w-40 h-40 md:w-64 md:h-64 rounded-full mb-4 md:mb-0 md:mr-6 shadow-2xl transition-all duration-1000 ease-out ${
            animateImage ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
          />
          <div className="text-center md:text-left ">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 pulse-effect" >Hi, I'm Dina 👋</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              A passionate Front-End Developer<br />
              I build modern, responsive websites using React.
            </p>
<a href="#end-of-page">
  <button
    className="text-teal-600 text-2xl border-2 border-teal-600 rounded-md hover:text-white transform transition-colors duration-700 focus:outline-none"
  >
    Let's Talk
  </button>
</a>


          </div>
        </div>
  
    
        <div id="menu" className=" flex justify-center items-center w-1/3">
          <ul className="flex flex-col gap-4 text-3xl">
            <li className="menu-item"><a href="#home"><FaHome className="text-white  hover:opacity-50 hover:scale-140 transition duration-300" /></a></li>
            <li className="menu-item"><a href="#skills"><FaBook className="text-white  hover:opacity-50 hover:scale-140 transition duration-300" /></a></li>
            <li className="menu-item" ><a href="#about"><FaUser className="text-white hover:opacity-50 hover:scale-140 transition duration-300" /></a></li>
            <li className="menu-item"><a href="#education"><FaGraduationCap className="text-white hover:opacity-50 hover:scale-140 transition duration-300" /></a></li>
            <li className="menu-item"><a href="#projects"><FaProjectDiagram className="text-white hover:opacity-50 hover:scale-140 transition duration-300" /></a></li>
            <li className="menu-item"><a href="#contact"><FaEnvelope className="text-white hover:opacity-50 hover:scale-140 transition duration-300" /></a></li>
          </ul>
        </div>
        
      </section>
    );
  }
  