import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import GlyphsTable from "@/components/GlyphsTable";
import localFont from "next/font/local";
import Link from "next/link";

const simplerPro = localFont({
  src: "../../fonts/simpler.otf",
});

const zavatHalavLight = localFont({
  src: "../../fonts/ZavatHalav-Light.otf",
});

const zavatHalavRegular = localFont({
  src: "../../fonts/ZavatHalav-Regular.otf",
});

const zavatHalavMedium = localFont({
  src: "../../fonts/ZavatHalav-Medium.otf",
});

const zavatHalavSemiBold = localFont({
  src: "../../fonts/ZavatHalav-SemiBold.otf",
});

const zavatHalavBold = localFont({
  src: "../../fonts/ZavatHalav-Bold.otf",
});

const zavatHalavBlack = localFont({
  src: "../../fonts/ZavatHalav-Black.otf",
});

const fontWeights = [
  {
    weight: "קל",
    weightNumber: "300",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "zavathalav-light",
    font: zavatHalavLight,
  },
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "zavathalav-regular",
    font: zavatHalavRegular,
  },
  {
    weight: "בינוני",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "zavathalav-medium",
    font: zavatHalavMedium,
  },
  {
    weight: "חצי-כבד",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "zavathalav-semibold",
    font: zavatHalavSemiBold,
  },
  {
    weight: "כבד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "zavathalav-bold",
    font: zavatHalavBold,
  },
  {
    weight: "שחור",
    weightNumber: "900",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "zavathalav-black",
    font: zavatHalavBlack,
  },
];

export default function ZavatHalavPage() {
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
              className={`${zavatHalavBold.className} text-[20vw] md:text-[25vw] leading-[0.9em] text-white w-full text-right clear-both`}
            >
              חימר פרא
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full mx-auto flex flex-col items-start gap-8 px-4 py-[60px]">
        <p
          className={`${simplerPro.className} text-lg leading-[1.3em] text-white text-right`}
        >
          זוות חלב הוא פונט עברי מסוגנן המתאפיין בזוויות רכות וזרימה אלגנטית.
          הפונט משלב צורות אורגניות עם קריאות מעולה, מה שמאפשר לו לתפקד היטב הן
          בכותרות גדולות והן בטקסט רץ. הוא מגיע במגוון משקלים, החל מקל ועד שחור,
          ומתאים לכל שימוש מיתוג ועיצוב המבקש לשלב רכות וייחודיות.
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
