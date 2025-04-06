import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import localFont from "next/font/local";

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
    <div className="min-h-screen bg-black py-[60px] px-4 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col items-start gap-8">
        <h1
          className={`${maccabiahBold.className} text-[96px] leading-[1.6em] text-white`}
        >
          מכביה 23
        </h1>

        <p
          className={`${simplerPro.className} text-[20px] leading-[1.3em] text-white text-right`}
        >
          פונט מכביה 23 הוא פונט מודרני ועוצמתי שעוצב במיוחד עבור המכביה ה-21.
          הפונט משלב אלמנטים ספורטיביים עם קריאות גבוהה, ומגיע במגוון משקלים
          המאפשרים גמישות עיצובית מלאה.
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
