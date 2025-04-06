import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import localFont from "next/font/local";

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
    <div className="min-h-screen bg-black py-[60px] px-4 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col items-start gap-8">
        <h1
          className={`${pixelHebrewBlack.className} text-[15vw] leading-[1.2em] text-white w-full text-right`}
        >
          טטרא
        </h1>

        <p
          className={`${simplerPro.className} text-[20px] leading-[1.3em] text-white text-right`}
        >
          פונט טטרא הוא פונט ייחודי המשלב אסתטיקה של משחקי מחשב רטרו עם
          טיפוגרפיה עברית מודרנית. הפונט מגיע בשלושה משקלים ומתאים במיוחד
          לעיצובים המבקשים להעביר תחושה נוסטלגית או משחקית.
        </p>

        <div className="h-8" />

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

        <PurchaseButton />
      </div>
    </div>
  );
}
