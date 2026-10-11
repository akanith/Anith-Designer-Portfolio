"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isPointerVisible, setIsPointerVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 40, stiffness: 600, mass: 0.2 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    setMounted(true);

    // Detect touch device or reduced motion
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isPointerVisible) setIsPointerVisible(true);

      // Check if hovering over an interactive or labeled element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"], [data-cursor-text]'
      );

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsPointerVisible(false);
    };

    const handleMouseEnter = () => {
      setIsPointerVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isPointerVisible]);

  if (!mounted || isTouch || !isPointerVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer context ring / pill */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorText ? 1.6 : isHovered ? 1.4 : 1,
          width: cursorText ? "auto" : isHovered ? 44 : 32,
          height: cursorText ? "auto" : isHovered ? 44 : 32,
          paddingLeft: cursorText ? 12 : 0,
          paddingRight: cursorText ? 12 : 0,
          paddingTop: cursorText ? 5 : 0,
          paddingBottom: cursorText ? 5 : 0,
          borderRadius: 9999,
          backgroundColor: cursorText
            ? "rgba(53, 92, 255, 0.95)"
            : isHovered
            ? "rgba(255, 90, 69, 0.12)"
            : "rgba(23, 23, 23, 0.04)",
          borderColor: cursorText
            ? "#355CFF"
            : isHovered
            ? "rgba(255, 90, 69, 0.5)"
            : "rgba(23, 23, 23, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className="fixed top-0 left-0 flex items-center justify-center border backdrop-blur-[1px] shadow-sm"
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-white uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      {!cursorText && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isHovered ? 0.6 : 1,
            backgroundColor: isHovered ? "#FF5A45" : "#171717",
          }}
          className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full"
        />
      )}
    </div>
  );
}
