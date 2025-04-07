"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import { useState } from "react";

interface FontWeight {
  weight: string;
  weightNumber: string;
  font: NextFont;
}

interface GlyphsTableProps {
  fontWeights: FontWeight[];
  labelFont: NextFont;
}

const hebrewGlyphs = [
  ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י"],
  ["כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ"],
  ["ף", "צ", "ץ", "ק", "ר", "ש", "ת"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
  ["-", "+", "=", "[", "]", "{", "}", ":", ";", '"'],
  ["'", ",", ".", "/", "?", "\\", "|", "<", ">", " "],
];

// Flatten the array for continuous display
const flattenedGlyphs = hebrewGlyphs.flat();

export default function GlyphsTable({
  fontWeights,
  labelFont,
}: GlyphsTableProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeFont = fontWeights[activeTab];
  const [selectedGlyph, setSelectedGlyph] = useState<string | null>(null);

  const handleContainerClick = () => {
    setSelectedGlyph(null);
  };

  return (
    <div className="w-full">
      <div className="w-full h-px bg-white/30 mb-6" />

      <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
        {fontWeights.map((weight, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${labelFont.className}
              px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === index
                  ? "bg-white text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
          >
            {weight.weight}
          </button>
        ))}
      </div>

      <div className="w-full">
        <div
          className={`${activeFont.font.className} glyph-container relative`}
          onClick={handleContainerClick}
        >
          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-12 gap-2 glyph-container relative">
            {flattenedGlyphs.map((glyph, index) => (
              <div
                key={index}
                className={`flex items-center justify-center cursor-pointer transition-all duration-75 rounded-lg
                  ${
                    selectedGlyph === glyph
                      ? "scale-[1.5] transform z-10 bg-gray-800 p-0 w-auto h-auto"
                      : "bg-white/5 hover:bg-white/10 p-2 aspect-square"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedGlyph(glyph === selectedGlyph ? null : glyph);
                }}
              >
                <span className="text-3xl text-white flex items-center justify-center leading-none">
                  {glyph}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
