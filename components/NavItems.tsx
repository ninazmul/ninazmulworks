"use client";

import { useEffect, useState } from "react";
import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";

interface NavItemsProps {
  onItemSelected?: () => void;
}

const NavItems = ({ onItemSelected }: NavItemsProps) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="lg:flex-between flex w-full flex-col items-start gap-1 lg:flex-row lg:gap-5">
      {headerLinks.map((link) => {
        const isActive = activeSection === link.route;

        return (
          <li
            key={link.route}
            className={cn(
              "flex-center whitespace-nowrap text-white w-full px-4 py-2 transition-all duration-300 rounded-full",
              isActive 
                ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10" 
                : "text-zinc-400 hover:text-white"
            )}
          >
            <a 
              href={link.route} 
              onClick={(e) => {
                const targetId = link.route.startsWith("#") ? link.route.substring(1) : null;
                if (targetId) {
                  e.preventDefault();
                  const elem = document.getElementById(targetId);
                  if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" });
                  } else {
                    // Fallback to standard navigation if element not found in DOM
                    window.location.hash = targetId;
                  }
                }
                onItemSelected?.();
              }}
              className="text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
