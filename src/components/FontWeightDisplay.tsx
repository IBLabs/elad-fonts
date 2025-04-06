import React from "react";

interface FontWeightDisplayProps {
  weight: string;
  weightNumber: string;
  sampleText: string;
  fontName: string;
}

const FontWeightDisplay: React.FC<FontWeightDisplayProps> = ({
  weight,
  weightNumber,
  sampleText,
  fontName,
}) => {
  return (
    <div className="flex flex-col items-end">
      <span className="text-[13px] tracking-[0.12em] leading-[1.3em] text-white">
        {weight} / {weightNumber}
      </span>
      <span
        className={`font-[${fontName}] text-[76px] leading-[1.6em] text-white`}
      >
        {sampleText}
      </span>
    </div>
  );
};

export default FontWeightDisplay;
