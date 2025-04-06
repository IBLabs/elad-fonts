import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
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
    <div className="min-h-screen bg-black py-[60px] px-4 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col items-start gap-8">
        <h1
          className={`${emulsi3.className} text-[15vw] leading-[1.2em] text-white w-full text-right`}
        >
          אמולסי
        </h1>

        <p
          className={`${simplerPro.className} text-[20px] leading-[1.3em] text-white text-right`}
        >
          פרנקסי הוא פונט עברי עם קריצה – שילוב נועז בין גיאומטריה מוקפדת לאופי
          שובב. הקווים שלו חדים אבל ידידותיים, והאותיות מתנדנדות בעדינות בין סדר
          לאי-סדר. מתאים לטקסטים שמבקשים לבלוט, לשדר ייחודיות, ולהכניס קצת אופי
          לכל מילה.
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
