import Link from "next/link";
import { FontShowcaseProps } from "@/types/font";
import FontWeightDisplay from "./FontWeightDisplay";
import GlyphsTable from "./GlyphsTable";
import PurchaseButton from "./PurchaseButton";
import { CSSProperties } from "react";

export default function FontShowcasePage({
  fontName,
  description,
  fontWeights,
  displayFont,
  labelFont,
  gradientFrom = "#1E293B", // Default gradient color
  backgroundImage,
  backgroundPosition = "center",
}: FontShowcaseProps) {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="relative h-[50vh] md:h-[80vh] w-full">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundPosition: backgroundPosition,
            }}
          />
        )}
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-b to-black ${
            backgroundImage ? "from-black/30 via-black/60" : ""
          }`}
          style={
            {
              "--tw-gradient-from": backgroundImage ? undefined : gradientFrom,
            } as CSSProperties
          }
        />

        {/* Content */}
        <div className="relative h-full flex items-end md:items-center justify-end">
          <div className="w-full px-4 pb-8 md:pb-[60px]">
            <Link
              href="/"
              className="text-white bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors inline-block mb-8 float-left text-lg"
            >
              ←
            </Link>

            <h1
              className={`${displayFont.className} text-[20vw] md:text-[25vw] leading-[0.9em] text-white w-full text-right clear-both`}
            >
              {fontName}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full mx-auto flex flex-col items-start gap-8 px-4 py-[60px]">
        <p
          className={`${labelFont.className} text-lg leading-[1.3em] text-white text-right`}
        >
          {description}
        </p>

        <div className="flex flex-col items-start gap-[18px]">
          {fontWeights.map((fontWeight, index) => (
            <FontWeightDisplay
              key={index}
              {...fontWeight}
              labelFont={labelFont}
            />
          ))}
        </div>

        <div className="h-8" />

        <GlyphsTable fontWeights={fontWeights} labelFont={labelFont} />

        <div className="h-8" />

        <PurchaseButton />
      </div>
    </div>
  );
}
