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

  useLayoutEffect(() => {
    if (!sectionRef.current || !contentRef.current || !titleRef.current) return;

    const section = sectionRef.current;
    const title = titleRef.current;

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

    // Animate font width from normal to condensed
    tl.to(title, {
      fontVariationSettings: "'wdth' 150",
      duration: 1,
      ease: "expo.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen w-full flex flex-col items-center justify-center bg-background ${className}`}
    >
      <div ref={contentRef} className="text-center">
        <h1
          ref={titleRef}
          style={{ fontVariationSettings: "'wdth' 0" }}
          className={`text-6xl md:text-6xl font-bold text-foreground ${emulsiFonts.variable.className}`}
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
