"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import { useState } from "react";

interface FontWeight {
  weight: string;
  weightNumber: string;
  font: NextFont;
  fontName: string;
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

export default function GlyphsTable({
  fontWeights,
  labelFont,
}: GlyphsTableProps) {
  const [activeTab, setActiveTab] = useState(0);
  const activeFont = fontWeights[activeTab];

  return (
    <div className="w-full">
      <div className="w-full h-px bg-white/30 mb-6" />

      <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
        {fontWeights.map((weight, index) => (
          <button
            key={weight.fontName}
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

      <div className="w-full overflow-x-auto">
        <div className={`${activeFont.font.className} min-w-[600px]`}>
          {hebrewGlyphs.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-10 gap-2 mb-2">
              {row.map((glyph, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className={`text-3xl text-white`}>{glyph}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
