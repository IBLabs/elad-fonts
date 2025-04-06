import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import GlyphsTable from "@/components/GlyphsTable";
import localFont from "next/font/local";
import Link from "next/link";

const simplerPro = localFont({
  src: "../../fonts/simpler.otf",
});

const pixelHebrewRegular = localFont({
  src: "../../fonts/PixelHebrew-Regular.otf",
});

const pixelHebrewBold = localFont({
  src: "../../fonts/PixelHebrew-Bold.otf",
});

const pixelHebrewBlack = localFont({
  src: "../../fonts/PixelHebrew-Black.otf",
});

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "pixel-hebrew-regular",
    font: pixelHebrewRegular,
  },
  {
    weight: "בולד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "pixel-hebrew-bold",
    font: pixelHebrewBold,
  },
  {
    weight: "בלאק",
    weightNumber: "900",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "pixel-hebrew-black",
    font: pixelHebrewBlack,
  },
];

export default function PixelHebrewPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="relative h-[50vh] md:h-[80vh] w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('/tetra-header.png')] bg-cover bg-center"
          style={{ backgroundPosition: "50% 30%" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

        {/* Content */}
        <div className="relative h-full flex items-end md:items-center justify-end">
          <div className="w-full px-4 pb-8 md:py-[60px]">
            <Link
              href="/"
              className="text-white bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors inline-block mb-8 float-left text-lg"
            >
              ←
            </Link>

            <h1
              className={`${pixelHebrewBlack.className} text-[20vw] md:text-[25vw] leading-[0.9em] text-white w-full text-right clear-both`}
            >
              טטרא
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col items-start gap-8 px-4 py-[8px]">
        <p
          className={`${simplerPro.className} text-lg leading-[1.3em] text-white text-right`}
        >
          פונט טטרא הוא פונט ייחודי המשלב אסתטיקה של משחקי מחשב רטרו עם
          טיפוגרפיה עברית מודרנית. הפונט מגיע בשלושה משקלים ומתאים במיוחד
          לעיצובים המבקשים להעביר תחושה נוסטלגית או משחקית.
        </p>

        <div className="flex flex-col items-start gap-[18px]">
          {fontWeights.map((fontWeight) => (
            <FontWeightDisplay
              key={fontWeight.fontName}
              {...fontWeight}
              labelFont={simplerPro}
            />
          ))}
        </div>

        <div className="h-8" />

        <GlyphsTable fontWeights={fontWeights} labelFont={simplerPro} />

        <div className="h-8" />

        <PurchaseButton />
      </div>
    </div>
  );
}
