import React from "react";
import { NextFont } from "next/dist/compiled/@next/font";

interface FontWeightDisplayProps {
  weight: string;
  weightNumber: string;
  sampleText: string;
  fontName: string;
  font: NextFont;
  labelFont: NextFont;
}

const FontWeightDisplay: React.FC<FontWeightDisplayProps> = ({
  weight,
  weightNumber,
  sampleText,
  font,
  labelFont,
}) => {
  return (
    <div className={`flex flex-col items-start ${labelFont.className}`}>
      <span className="text-[13px] tracking-[0.12em] leading-[1.3em] text-white">
        {weight} / {weightNumber}
      </span>
      <span
        className={`${font.className} text-[76px] leading-[1.6em] text-white whitespace-nowrap overflow-hidden w-full`}
      >
        {sampleText}
      </span>
    </div>
  );
};

export default FontWeightDisplay;
