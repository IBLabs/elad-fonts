"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import localFont from "next/font/local";
import { NextFont } from "next/dist/compiled/@next/font";

const emulsi3 = localFont({
  src: "../fonts/emulsi3.otf",
});

const argazimBlack = localFont({
  src: "../fonts/Argazim_Font-Black.ttf",
});

const maccabiahBold = localFont({
  src: "../fonts/Maccabiah23-Bold.ttf",
});

const pixelHebrewBlack = localFont({
  src: "../fonts/PixelHebrew-Black.otf",
});

const getRandomFont = () => {
  const fonts = [emulsi3, argazimBlack, maccabiahBold, pixelHebrewBlack];
  return fonts[Math.floor(Math.random() * fonts.length)];
};

interface AnimatedLetterProps {
  letter: string;
  font: NextFont;
  progress: MotionValue<number>;
  index: number;
}

const AnimatedLetter = ({
  letter,
  font,
  progress,
  index,
}: AnimatedLetterProps) => {
  // Create different animation effects for each letter
  const rotation = useTransform(
    progress,
    [0, 1],
    [0, index % 2 === 0 ? 360 : -360]
  );
  const scale = useTransform(progress, [0, 0.5, 1], [1, 1.5, 1]);
  const x = useTransform(progress, [0, 0.5, 1], [0, index * 50, 0]);
  const y = useTransform(progress, [0, 0.5, 1], [0, Math.sin(index) * 50, 0]);

  // Add spring physics to make animations smooth
  const springConfig = { damping: 15, stiffness: 100 };
  const smoothRotation = useSpring(rotation, springConfig);
  const smoothScale = useSpring(scale, springConfig);
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  return (
    <motion.span
      className={`${font.className} text-[min(12vw,20vh)] text-white inline-block`}
      style={{
        rotate: smoothRotation,
        scale: smoothScale,
        x: smoothX,
        y: smoothY,
      }}
    >
      {letter}
    </motion.span>
  );
};

export const ScrollAnimation = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="h-screen relative flex items-center justify-center"
    >
      <div className="flex justify-center items-center gap-[1vw] w-full">
        {text.split("").map((letter, index) => (
          <AnimatedLetter
            key={index}
            letter={letter}
            font={getRandomFont()}
            progress={scrollYProgress}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
