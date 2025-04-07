"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText"; // Removed SplitText import

// Register plugins
gsap.registerPlugin(ScrollTrigger); // Removed SplitText registration

export default function TestGround() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Select all elements with the class "box" within the container
      const boxes = gsap.utils.toArray<Element>(".box");

      // Animate each box as it enters the viewport
      boxes.forEach((box: Element) => {
        // 1. Entrance Animation (Fade in & Slide up)
        gsap.fromTo(
          box,
          { autoAlpha: 0, y: 50 }, // Start state: invisible and slightly down
          {
            autoAlpha: 1, // End state: fully visible
            y: 0, // End state: original position
            // duration: 0.8, // Duration is less relevant with scrub
            scrollTrigger: {
              trigger: box, // Element that triggers the animation
              start: "top 80%", // Start animation when top of the box hits 80% of viewport height
              end: "bottom 60%", // End animation when bottom of the box hits 60% of viewport height
              scrub: true, // Link animation progress to scroll position
              // toggleActions: "play none none reverse", // Remove toggleActions
              // markers: true, // Uncomment for debugging entry trigger
            },
          }
        );

        // 2. Exit Animation (Spin)
        gsap.to(box, {
          rotation: 90, // Rotate 360 degrees
          ease: "elastic", // Linear rotation
          scrollTrigger: {
            trigger: box,
            start: "top 30%", // Start spinning when the top of the box hits the top of the viewport
            end: "+=700", // Complete the spin 300px of scrolling after the start
            scrub: true, // Link rotation progress to scroll position during exit
            // markers: true, // Uncomment for debugging exit trigger (use different color)
          },
        });
      });

      // --- Text Reveal Animation (Manual Spans) ---
      const textElement = containerRef.current?.querySelector(".reveal-text");
      if (textElement) {
        // Select all the spans *inside* the reveal-text element
        const chars = gsap.utils.toArray<HTMLSpanElement>(
          textElement.querySelectorAll("span")
        );

        if (chars.length > 0) {
          // Check if spans were found
          gsap.from(chars, {
            // Animate the spans
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: textElement,
              start: "top 80%",
              // end: "bottom 40%", // End trigger is less relevant now
              // scrub: true, // Remove scrub
              toggleActions: "play none none none", // Play animation once on enter
              // markers: true,
            },
          });
        }
      }
    }, containerRef); // Scope the context to the container

    // Cleanup function to kill ScrollTriggers when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      ref={containerRef}
      className="min-h-screen p-8 flex flex-col items-center space-y-16"
    >
      <h1 className="text-3xl font-bold mb-16">
        Scroll Down to See Animations
      </h1>

      {/* Add some space at the top to ensure scrolling */}
      <div className="h-screen"></div>

      {/* Boxes to animate */}
      <div className="box w-64 h-64 bg-blue-500 rounded-lg shadow-lg"></div>
      <div className="box w-64 h-64 bg-green-500 rounded-lg shadow-lg"></div>

      {/* Text Reveal Element (Manual Spans) */}
      <p className="reveal-text text-4xl md:text-6xl font-bold text-center overflow-hidden py-2">
        {"זה טקסט שמקבל אנימציה".split("").map((char, index) => (
          <span key={index} className="inline-block">
            {" "}
            {/* Wrap each char */}
            {char === " " ? "\u00A0" : char} {/* Handle spaces */}
          </span>
        ))}
      </p>

      <div className="box w-64 h-64 bg-red-500 rounded-lg shadow-lg"></div>
      <div className="box w-64 h-64 bg-yellow-500 rounded-lg shadow-lg"></div>
      <div className="box w-64 h-64 bg-purple-500 rounded-lg shadow-lg"></div>

      {/* Add some space at the bottom */}
      <div className="h-screen"></div>
    </div>
  );
}
