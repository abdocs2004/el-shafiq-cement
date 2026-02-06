"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    const heroHeight = hero ? hero.offsetHeight : 0;

    const handleScroll = () => {
      setVisible(window.scrollY > heroHeight - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black shadow-lg transition-all duration-300 hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="text-xl">↑</span>
    </button>
  );
}
