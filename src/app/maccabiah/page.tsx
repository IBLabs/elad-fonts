import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import GlyphsTable from "@/components/GlyphsTable";
import localFont from "next/font/local";
import Link from "next/link";

const simplerPro = localFont({
  src: "../../fonts/simpler.otf",
});

const maccabiahRegular = localFont({
  src: "../../fonts/Maccabiah23-Regular.ttf",
});

const maccabiahMedium = localFont({
  src: "../../fonts/Maccabiah23-Medium.ttf",
});

const maccabiahDemiBold = localFont({
  src: "../../fonts/Maccabiah23-DemiBold.ttf",
});

const maccabiahBold = localFont({
  src: "../../fonts/Maccabiah23-Bold.ttf",
});

const maccabiahUltraBold = localFont({
  src: "../../fonts/Maccabiah23-UltraBold.ttf",
});

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "maccabiah-regular",
    font: maccabiahRegular,
  },
  {
    weight: "מדיום",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "maccabiah-medium",
    font: maccabiahMedium,
  },
  {
    weight: "דמי-בולד",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "maccabiah-demibold",
    font: maccabiahDemiBold,
  },
  {
    weight: "בולד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "maccabiah-bold",
    font: maccabiahBold,
  },
  {
    weight: "אולטרה-בולד",
    weightNumber: "800",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "maccabiah-ultrabold",
    font: maccabiahUltraBold,
  },
];

export default function MaccabiahPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="relative h-[50vh] md:h-[80vh] w-full">
        {/* Background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0066B2] to-black" />

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
              className={`${maccabiahUltraBold.className} text-[20vw] md:text-[25vw] leading-[0.9em] text-white w-full text-right clear-both`}
            >
              מכביה 23
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full mx-auto flex flex-col items-start gap-8 px-4 py-[60px]">
        <p
          className={`${simplerPro.className} text-lg leading-[1.3em] text-white text-right`}
        >
          פונט מכביה 23 הוא פונט מודרני ועוצמתי שעוצב במיוחד עבור המכביה ה-21.
          הפונט משלב אלמנטים ספורטיביים עם קריאות גבוהה, ומגיע במגוון משקלים
          המאפשרים גמישות עיצובית מלאה.
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

        {/* Add GlyphsTable */}
        <GlyphsTable fontWeights={fontWeights} labelFont={simplerPro} />

        <div className="h-8" />

        <PurchaseButton />
      </div>
    </div>
  );
}
