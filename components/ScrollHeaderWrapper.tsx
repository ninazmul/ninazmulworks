"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function ScrollHeaderWrapper({
  children,
  headerHeight = 80,
}: {
  children: React.ReactNode;
  headerHeight?: number;
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Hide/Show logic
        if (currentScrollY > lastScrollY.current && currentScrollY > 300) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }

        // Transparency logic
        if (currentScrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl transition-all duration-500 z-50 ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0"
        } ${
            isScrolled 
            ? "bg-black/40 backdrop-blur-xl border border-white/10 py-1 rounded-2xl shadow-2xl" 
            : "bg-transparent py-2 px-0"
        }`}
      >
        {children}
      </div>
      {/* Spacer removed or minimized for fixed floating nav */}
    </>
  );
}
