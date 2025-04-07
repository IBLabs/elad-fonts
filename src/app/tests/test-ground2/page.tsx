"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure refs are current
    const sectionElement = sectionRef.current;
    const imageElement = imageRef.current;
    const textElement = textRef.current;
    // Direct children selector for features to avoid grabbing nested elements if any
    const featureElements = gsap.utils.toArray<HTMLDivElement>(
      featuresRef.current?.children ?? []
    );

    if (
      !sectionElement ||
      !imageElement ||
      !textElement ||
      !featureElements.length
    ) {
      console.warn("Refs not ready for GSAP animation");
      return;
    }

    // Pin the section and define the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: "top top",
        end: "+=3000", // Adjust based on desired scroll length
        scrub: 1, // Smoother scrubbing
        pin: true,
        markers: process.env.NODE_ENV === "development", // Only show markers in dev
      },
    });

    // Define animation steps
    tl.to(imageElement, {
      scale: 1.5,
      duration: 1,
    })
      .to(
        textElement,
        {
          opacity: 1,
          y: -50,
          duration: 1,
        },
        "-=0.5" // Overlap with image scaling
      )
      .from(featureElements, {
        x: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      });
    // Optional: Fade out the content before unpinning if desired
    // .to([imageElement, textElement, featuresRef.current], {
    //   opacity: 0,
    //   duration: 0.5
    // })

    // Cleanup function to kill ScrollTrigger instance on component unmount
    return () => {
      tl.kill(); // Kills the timeline and its ScrollTrigger
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Kill any other stray triggers
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <main ref={mainRef} className="min-h-[500vh] bg-gray-100">
      {" "}
      {/* Add extra space for scrolling */}
      <div className="h-[100vh] flex items-center justify-center">
        Scroll Down
      </div>
      <section
        ref={sectionRef}
        className="product-section w-full h-screen bg-blue-200 overflow-hidden flex flex-col items-center justify-center relative"
      >
        <div
          ref={imageRef}
          className="image w-48 h-48 bg-red-500 rounded-lg mb-8"
        ></div>
        <div
          ref={textRef}
          className="text text-3xl font-bold text-white opacity-0 mb-8"
        >
          Amazing Product
        </div>
        <div ref={featuresRef} className="features flex space-x-4">
          {/* Features will be animated in */}
          <div className="feature p-4 bg-green-500 text-white rounded">
            Speed
          </div>
          <div className="feature p-4 bg-yellow-500 text-white rounded">
            Design
          </div>
          <div className="feature p-4 bg-purple-500 text-white rounded">
            Battery
          </div>
        </div>
      </section>
      <div className="h-[100vh] flex items-center justify-center">
        End of Scroll Area
      </div>
    </main>
  );
}
