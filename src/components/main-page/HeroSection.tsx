import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { emulsiFonts, simpler } from "@/config/fonts";

gsap.registerPlugin(ScrollTrigger);

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function HeroSection({
  title = "אלעד פונטס",
  subtitle,
  className = "",
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const horizontalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !contentRef.current ||
      !titleRef.current ||
      !backgroundRef.current
    )
      return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const background = backgroundRef.current;
    const horizontalLines = horizontalLinesRef.current.filter(
      (line): line is HTMLDivElement => line !== null
    );
    const verticalLines = verticalLinesRef.current.filter(
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

    // Set initial scale and line widths/heights
    gsap.set(title, {
      scale: 1.5,
      lineHeight: 1.3,
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

    // Animate font width, size, and background simultaneously
    tl.to(title, {
      fontVariationSettings: "'wdth' 150",
      scale: 1,
      lineHeight: 1,
      duration: 1,
      ease: "expo.inOut",
    })
      // Animate background margins and border radius
      .to(
        background,
        {
          margin: "1rem",
          borderRadius: "0.5rem",
          duration: 1,
          ease: "expo.inOut",
        },
        "<"
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
      );

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
        className="flex flex-col absolute inset-0 bg-blue-600 -z-10"
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
      </div>
      <div ref={contentRef} className="text-center relative z-10">
        <h1
          ref={titleRef}
          style={{ fontVariationSettings: "'wdth' 0" }}
          className={`text-6xl md:text-6xl font-bold text-foreground transform-gpu tracking-tight ${emulsiFonts.variable.className}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`-mt-3 text-xl md:text-2xl text-foreground ${simpler.className}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
