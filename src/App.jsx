
import React, { useRef } from "react";
import Header from "./header";
import Skills from "./skills";
import About from "./about";
import Education from "./education";
import Projects from "./projects";
import Contact from "./contact";

function App() {
  // refs لكل السيكشنات اللي بعد الهيدر
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen px-4 md:px-10 bg-black text-white">
      {/* الهيدر نفسه هو الهوم */}
      <Header
        refs={{
          skillsRef,
          aboutRef,
          educationRef,
          projectsRef,
          contactRef,
        }}
      />

      <Skills ref={skillsRef} />
      <About ref={aboutRef} />
      <Education ref={educationRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
