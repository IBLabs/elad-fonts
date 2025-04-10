import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { argazim, argazimFonts, emulsi, emulsiFonts, franksiMonoink } from "@/config/fonts";
gsap.registerPlugin(ScrollTrigger);

export interface EmptyHeroSectionProps {
  className?: string;
}

export default function EmptyHeroSection({
  className = "",
}: EmptyHeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const horizontalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const fontsContainerRef = useRef<HTMLDivElement>(null);
  const fontLinesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !contentRef.current ||
      !backgroundRef.current ||
      !fontsContainerRef.current
    )
      return;

    const section = sectionRef.current;
    const background = backgroundRef.current;
    const fontsContainer = fontsContainerRef.current;
    const horizontalLines = horizontalLinesRef.current.filter(
      (line): line is HTMLDivElement => line !== null
    );
    const verticalLines = verticalLinesRef.current.filter(
      (line): line is HTMLDivElement => line !== null
    );
    const fontLines = fontLinesRef.current.filter(
      (line): line is HTMLDivElement => line !== null
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    // Set initial state for horizontal lines
    horizontalLines.forEach((line) => {
      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "right center",
      });
    });

    // Set initial state for vertical lines
    verticalLines.forEach((line) => {
      gsap.set(line, {
        scaleY: 0,
        transformOrigin: "top center",
      });
    });

    // Set initial state for font lines
    gsap.set(fontLines, {
      y: 100,
      opacity: 0,
    });

    // Animate background margins and border radius
    tl.to(
      background,
      {
        margin: "1rem",
        borderRadius: "0.5rem",
        duration: 1,
        ease: "expo.inOut",
      }
    )
    // Animate horizontal lines
    .to(
      horizontalLines,
      {
        scaleX: 1,
        duration: 1,
        ease: "expo.inOut",
        stagger: 0.1,
      },
      "<"
    )
    // Animate vertical lines
    .to(
      verticalLines,
      {
        scaleY: 1,
        duration: 1,
        ease: "expo.inOut",
        stagger: 0.1,
      },
      "<"
    )
    // Animate font lines
    .to(
      fontLines,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
      },
      ">-0.5"
    );

    // Create a separate scroll animation for the fonts container
    gsap.to(fontsContainer, {
      y: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen w-full flex flex-col items-center justify-center bg-background relative ${className}`}
    >
      <div
        ref={backgroundRef}
        className="flex flex-col absolute inset-0 bg-[#e92c05] -z-10 overflow-hidden"
      >
        {/* Horizontal Lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={`h-line-${i}`}
              ref={(el) => {
                horizontalLinesRef.current[i] = el;
              }}
              className="h-[1px] bg-white/30 w-full"
            />
          ))}
        </div>

        {/* Vertical Lines */}
        <div className="absolute inset-0 flex flex-row justify-between px-20">
          {[...Array(3)].map((_, i) => (
            <div
              key={`v-line-${i}`}
              ref={(el) => {
                verticalLinesRef.current[i] = el;
              }}
              className="w-[1px] bg-white/30 h-full"
            />
          ))}
        </div>

        <div 
          ref={fontsContainerRef}
          className="flex flex-col gap-4 overflow-hidden leading-[0.8] items-center absolute top-0 left-0 w-full text-[#fff2dc]"
        >
          <div 
            ref={(el) => { fontLinesRef.current[0] = el; }}
            className={`${argazimFonts.blackItalic.className} whitespace-nowrap text-[4.5em]`}
          >
            שליחות
          </div>
          <div 
            ref={(el) => { fontLinesRef.current[1] = el; }}
            className={`${argazimFonts.regularItalic.className} whitespace-nowrap text-[4em]`}
          >
            קטלנית
          </div>
          <div 
            ref={(el) => { fontLinesRef.current[2] = el; }}
            className={`${argazimFonts.regular.className} whitespace-nowrap text-[3.8em] bg-black pb-2`}
          >
            <span className="text-[#e92c05]">פונט</span> <span className="text-white">ארגזים</span>
          </div>

        </div>
      </div>
      <div ref={contentRef} className="text-center relative z-10">
        
      </div>
    </section>
  );
} 