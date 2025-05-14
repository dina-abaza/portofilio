import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp  } from 'react-icons/fa';
export default function Contact() {
  return (
    <section id="contact" className="w-full  bg-black text-white py-20">
      <div className="w-full max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center uppercase mb-6 flex justify-center items-center pulse-effect">
          <FaEnvelope className="mr-2 text-teal-400 text-2xl" />
          Contact Me
        </h2>
        <p className="text-lg text-center mb-12">Feel free to reach out via the form below!</p>

        <form
          action="https://formspree.io/f/mjkwozqb" 
          method="POST"
          className="bg-gray-900 p-6 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  bg-gray-800 text-white py-2 rounded hover:bg-teal-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div id='end-of-page'  className="flex justify-center gap-8 mt-20 text-2xl">
  <a
    href="https://github.com/dina-abaza"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors "
  >
    <FaGithub/>
  </a>
  <a
    href="https://www.linkedin.com/in/dina-nabil-abaza-b9b222365?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAuaDIQLtRJmA4ZFFmi%2Byiw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-white transition-colors"
  >
   <FaLinkedin/>
  </a>
  <a
    href="https://www.facebook.com/share/1AiFFHXhoJ/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-white transition-colors"
  >
    <FaFacebook/>
  </a>
  <a
          href="https://wa.me/01064013102" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-white transition-colors"
        >
          <FaWhatsapp />
        </a>
</div>

    </section>
  );
}
