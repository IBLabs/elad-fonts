import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import GlyphsTable from "@/components/GlyphsTable";
import localFont from "next/font/local";
import Link from "next/link";

const simplerPro = localFont({
  src: "../../fonts/simpler.otf",
});

const franksiMonoink = localFont({
  src: "../../fonts/Franksi_Monoink-02.otf",
});

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "franksi-monoink",
    font: franksiMonoink,
  },
];

export default function FranksiMonoinkPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="relative h-[50vh] md:h-[80vh] w-full">
        {/* Background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B] to-black" />

        {/* Content */}
        <div className="relative h-full flex items-end">
          <div className="w-full px-4 pb-8 md:pb-[60px]">
            <Link
              href="/"
              className="text-white bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-colors inline-block mb-8 float-left text-lg"
            >
              ←
            </Link>

            <h1
              className={`${franksiMonoink.className} text-[20vw] md:text-[25vw] leading-[0.9em] text-white w-full text-right clear-both`}
            >
              פרנקסי מונואינק
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full mx-auto flex flex-col items-start gap-8 px-4 py-[60px]">
        <p
          className={`${simplerPro.className} text-lg leading-[1.3em] text-white text-right`}
        >
          פרנקסי מונואינק הוא גרסה מונוספייס של הפונט פרנקסי, המדמה את המראה של
          דיו על נייר. כל האותיות באותו הרוחב, מה שמעניק לטקסט מראה טכני ומדויק,
          אך עם אופי אורגני ונוכחות חזקה. מושלם לעיצוב קוד, תצוגות טכניות, או כל
          מקום בו נדרשת אחידות ונוכחות גרפית.
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
