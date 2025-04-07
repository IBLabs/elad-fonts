import { NextFont } from "next/dist/compiled/@next/font";

export interface FontWeight {
  weight: string;
  weightNumber: string;
  sampleText: string;
  font: NextFont;
}

export interface FontShowcaseProps {
  fontName: string; // The display name of the font
  description: string; // The font description text
  fontWeights: FontWeight[]; // Array of font weights
  displayFont: NextFont; // The font to use for the main display (usually the boldest weight)
  labelFont: NextFont; // The font to use for labels (usually simplerPro)
  gradientFrom?: string; // Optional custom gradient start color
  backgroundImage?: string; // Optional background image URL
  backgroundPosition?: string; // Optional background position
}
