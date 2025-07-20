
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollTargets = [
      document.documentElement,
      document.body,
      document.getElementById("root"),
    ];

    for (const target of scrollTargets) {
      if (target?.scrollTop > 0) {
        target.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      }
    }
  };

  

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 text-teal-500 hover:text-teal-700 transition duration-300 animate-bounce"
      title="Scroll to top"
    >
      <FaArrowUp className="text-3xl" />
    </button>
  );
}
