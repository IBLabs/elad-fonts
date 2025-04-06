import React from "react";

interface FontShowcaseProps {
  sampleText: string;
  weight: string;
  weightNumber: string;
  fontName: string;
  labelFontName?: string;
}

const FontShowcase: React.FC<FontShowcaseProps> = ({
  sampleText,
  weight,
  weightNumber,
  fontName,
  labelFontName = "simplerPro",
}) => {
  return (
    <div className="flex flex-col items-end w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-4 border-white" />
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <span
          className={`font-[${labelFontName}] text-[13px] tracking-[0.12em] leading-[1.3em] text-white`}
        >
          {weight} / {weightNumber}
        </span>
      </div>
      <span
        className={`font-[${fontName}] text-[96px] leading-[0.86em] text-white w-full text-right`}
      >
        {sampleText}
      </span>
    </div>
  );
};

export default FontShowcase;
