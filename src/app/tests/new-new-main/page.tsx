"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { argazimFonts, emulsiFonts, maccabiahFonts, tetraFonts } from "@/config/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function NewNewMainPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const font1Container = useRef<HTMLDivElement>(null);
  const font2Container = useRef<HTMLDivElement>(null);
  const font3Container = useRef<HTMLDivElement>(null);
  const font4Container = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const font1 = font1Container.current;
    const font2 = font2Container.current;
    const font3 = font3Container.current;
    const font4 = font4Container.current;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        }
    });

    tl.to(container, {
        top: 30,
        left: 30,
        right: 30,
        bottom: 30,
        duration: 1,
        ease: 'power2.inOut'        
    });

    tl.to(font1, {
        x: 200,
        duration: 1,
        ease: 'power2.inOut'
    }, '<');

    tl.to(font2, {
        x: -200,
        duration: 1,
        ease: 'power2.inOut'
    }, '<');

    tl.to(font3, {
        x: 300,
        duration: 1,
        ease: 'power2.inOut'
    }, '<');

    tl.to(font4, {
        x: -300,
        duration: 1,
        ease: 'power2.inOut'
    }, '<');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <section ref={sectionRef} className="flex flex-col items-center h-[200vh] bg-gray-100">
        <div className="sticky top-0 w-full h-screen bg-green-500">
            <div ref={containerRef} className="absolute left-0 top-0 right-0 bottom-0 flex flex-col items-center bg-purple-500 overflow-hidden whitespace-nowrap">
                <h1 ref={font1Container} className={`${emulsiFonts.bold.className} text-white text-[12em] leading-[0.9]`}>נפץ שנפל על גוזל שנכנע תחת הלחץ</h1>
                <h1 ref={font2Container} className={`${argazimFonts.bold.className} text-white text-[9em] leading-[1.3]`}>עטלף שלכד פרי שנשבר בזריזות</h1>
                <h1 ref={font3Container} className={`${tetraFonts.bold.className} text-white text-[14em] leading-[0.6]`}>חדשות לבקרים ונהרות בטבע</h1>
                <h1 ref={font4Container} className={`${maccabiahFonts.ultraBold.className} text-white text-[9em] leading-[1.8]`}>נפץ שנפל על גוזל שנכנע תחת הלחץ</h1>
            </div>
        </div>
      </section>

      <section className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-2xl">Next Section</div>
        
      </section>
    </main>
  );
}
