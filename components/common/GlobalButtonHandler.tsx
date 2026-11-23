"use client";

import { useEffect } from "react";

export function GlobalButtonHandler() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href*='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      // Check if it's an internal hash anchor
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);

      if (hash === "#enquiry" || hash === "#enquiry-desktop") {
        e.preventDefault();
        const isDesktop = window.innerWidth >= 1024;
        const targetId = isDesktop ? "enquiry-desktop" : "enquiry";
        const targetEl = document.getElementById(targetId) || document.getElementById("enquiry");

        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      // Handle other sections with smooth scrolling
      const targetId = hash.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
