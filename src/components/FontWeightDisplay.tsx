import React from "react";
import { NextFont } from "next/dist/compiled/@next/font";

interface FontWeightDisplayProps {
  weight: string;
  weightNumber: string;
  sampleText: string;
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
    <div className={`flex flex-col items-start w-full ${labelFont.className}`}>
      <span className="text-[13px] tracking-[0.12em] leading-[1.3em] text-[#B3B3B3]">
        {weight} / {weightNumber}
      </span>
      <div className="w-full overflow-hidden">
        <span
          className={`${font.className} text-[76px] leading-[0.7em] text-white whitespace-nowrap`}
        >
          {sampleText}
        </span>
      </div>
    </div>
  );
};

export default FontWeightDisplay;
