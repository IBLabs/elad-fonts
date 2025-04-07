"use client";

import HeroSection from "@/components/main-page/HeroSection";
import FontList from "@/components/main-page/FontList";
import { argazim, emulsi } from "@/config/fonts";

// Example data - replace with real data later
const SAMPLE_FONTS = [
  {
    id: "argazim",
    name: "ארגזים",
    weights: 9,
    styles: 18,
    previewText: "ארגזים",
  },
  {
    id: "emulsi",
    name: "אמולסי",
    weights: 7,
    styles: 14,
    previewText: "אמולסי",
  },
  {
    id: "maccabiah",
    name: "מכביה",
    weights: 7,
    styles: 14,
    previewText: "מכביה",
  },
  {
    id: "tetra",
    name: "טטרא",
    weights: 7,
    styles: 14,
    previewText: "טטרא",
  },
  {
    id: "zaidner",
    name: "זאידנר",
    weights: 7,
    styles: 14,
    previewText: "זאידנר",
  },
  {
    id: "franksi",
    name: "פרנקסי",
    weights: 7,
    styles: 14,
    previewText: "פרנקסי",
  },
  {
    id: "franksiMonoink",
    name: "פרנקסי מונוינק",
    weights: 7,
    styles: 14,
    previewText: "פרנקסי מונוינק",
  },
  {
    id: "hemarPere",
    name: "חמר פרה",
    weights: 7,
    styles: 14,
    previewText: "חמר פרה",
  },
];
export default function NewMainPage() {
  return (
    <main className={`min-h-screen ${argazim.variable} ${emulsi.variable}`}>
      <HeroSection title="אינקטראפ" subtitle="אלעד אליקים" />
      <FontList fonts={SAMPLE_FONTS} />
    </main>
  );
}
