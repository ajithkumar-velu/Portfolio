import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Optional icon (Install with: npm install lucide-react)

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-14 right-5 p-3 rounded-full bg-btn-unique text-black animate-bounce hover:animate-none hover:bg-custom-gradient hover:text-white transition-all duration-300 shadow-[-4px_-2px_10px_#000000,2.5px_1.5px_1px_#152b2b]"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default BackToTop;