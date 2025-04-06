import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import GlyphsTable from "@/components/GlyphsTable";
import localFont from "next/font/local";

const simplerPro = localFont({
  src: "../../fonts/simpler.otf",
});

const emulsi = localFont({
  src: "../../fonts/emulsi.otf",
});

const emulsi1 = localFont({
  src: "../../fonts/emulsi1.otf",
});

const emulsi2 = localFont({
  src: "../../fonts/emulsi2.otf",
});

const emulsi3 = localFont({
  src: "../../fonts/emulsi3.otf",
});

const emulsi4 = localFont({
  src: "../../fonts/emulsi4.otf",
});

const fontWeights = [
  {
    weight: "קל",
    weightNumber: "300",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "emulsi",
    font: emulsi,
  },
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "emulsi1",
    font: emulsi1,
  },
  {
    weight: "מדיום",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "emulsi2",
    font: emulsi2,
  },
  {
    weight: "כבד",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "emulsi3",
    font: emulsi3,
  },
  {
    weight: "שחור",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "emulsi4",
    font: emulsi4,
  },
];

export default function EmulsiPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Header Section */}
      <div className="relative h-[50vh] md:h-[80vh] w-full">
        {/* Background image - Placeholder */}
        <div
          className="absolute inset-0 bg-[url('/emulsi-header.jpg')] bg-cover bg-center"
          style={{ backgroundPosition: "50% 30%" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

        {/* Content */}
        <div className="relative h-full flex items-end md:items-center justify-end">
          <div className="w-full px-4 pb-8 md:py-[60px]">
            <h1
              className={`${emulsi4.className} text-[15vw] md:text-[20vw] leading-[1.2em] text-white w-full text-right`}
            >
              אמולסי
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full mx-auto flex flex-col items-start gap-8 px-4 py-[60px]">
        <p
          className={`${simplerPro.className} text-lg leading-[1.3em] text-white text-right`}
        >
          פרנקסי הוא פונט עברי עם קריצה – שילוב נועז בין גיאומטריה מוקפדת לאופי
          שובב. הקווים שלו חדים אבל ידידותיים, והאותיות מתנדנדות בעדינות בין סדר
          לאי-סדר. מתאים לטקסטים שמבקשים לבלוט, לשדר ייחודיות, ולהכניס קצת אופי
          לכל מילה.
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
