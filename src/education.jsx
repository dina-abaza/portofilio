import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="w-full bg-black text-white mt-20 px-4 md:px-0">
      <div >
        
        <h2 className="text-3xl font-bold mb-6 text-center  flex flex-col sm:flex-row justify-center items-center pulse-effect uppercase">
          <FaGraduationCap className="hidden sm:block md:block mr-2 text-teal-400 text-2xl" />
          Education & Certifications
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mt-10">

          
          <div>
            <h3 className="text-xl font-semibold text-white">
              Bachelor's Degree in French Language
            </h3>
            <p>Faculty of Arts, Tanta University – 2015</p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-white">
              General Diploma in Education
            </h3>
            <p>Faculty of Education, Tanta University – 2016</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Diploma in Learning Disabilities
            </h3>
            <p>Faculty of Rehabilitation and Disability Sciences, Zagazig University – 2021</p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-white">ICDL Certificate</h3>
            <p>International Computer Driving License, Tanta University – 2016</p>
          </div>

    
          <div>
            <h3 className="text-xl font-semibold text-white">
              Self-Taught Front-End Development
            </h3>
            <p>
              I have independently learned front-end development through self-study and practice.
              My skill set includes HTML, CSS, JavaScript, React, TypeScript, Zustand, Tailwind CSS, Next.js, Git, and GitHub.
              I enjoy building modern, responsive websites and continuously expanding my knowledge in web development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
