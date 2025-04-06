import FontWeightDisplay from "@/components/FontWeightDisplay";
import PurchaseButton from "@/components/PurchaseButton";
import localFont from "next/font/local";

const simplerPro = localFont({
  src: "../../fonts/simpler.otf",
});

const argazimRegular = localFont({
  src: "../../fonts/Argazim_Font-Regular.ttf",
});

const argazimRegularItalic = localFont({
  src: "../../fonts/Argazim_Font-RegularItalic.ttf",
});

const argazimMedium = localFont({
  src: "../../fonts/Argazim_Font-Medium.ttf",
});

const argazimMediumItalic = localFont({
  src: "../../fonts/Argazim_Font-MediumItalic.ttf",
});

const argazimBold = localFont({
  src: "../../fonts/Argazim_Font-Bold.ttf",
});

const argazimBoldItalic = localFont({
  src: "../../fonts/Argazim_Font-BoldItalic.ttf",
});

const argazimBlack = localFont({
  src: "../../fonts/Argazim_Font-Black.ttf",
});

const argazimBlackItalic = localFont({
  src: "../../fonts/Argazim_Font-BlackItalic.ttf",
});

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-regular",
    font: argazimRegular,
  },
  {
    weight: "רגיל נטוי",
    weightNumber: "400i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-regular-italic",
    font: argazimRegularItalic,
  },
  {
    weight: "מדיום",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-medium",
    font: argazimMedium,
  },
  {
    weight: "מדיום נטוי",
    weightNumber: "500i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-medium-italic",
    font: argazimMediumItalic,
  },
  {
    weight: "בולד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-bold",
    font: argazimBold,
  },
  {
    weight: "בולד נטוי",
    weightNumber: "700i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-bold-italic",
    font: argazimBoldItalic,
  },
  {
    weight: "בלאק",
    weightNumber: "900",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-black",
    font: argazimBlack,
  },
  {
    weight: "בלאק נטוי",
    weightNumber: "900i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    fontName: "argazim-black-italic",
    font: argazimBlackItalic,
  },
];

export default function ArgazimPage() {
  return (
    <div className="min-h-screen bg-black py-[60px] px-4 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col items-start gap-8">
        <h1
          className={`${argazimBlack.className} text-[15vw] leading-[1.2em] text-white w-full text-right`}
        >
          ארגזים
        </h1>

        <p
          className={`${simplerPro.className} text-[20px] leading-[1.3em] text-white text-right`}
        >
          פונט ארגזים הוא פונט עברי מודרני המשלב גיאומטריה נקייה עם אופי ייחודי.
          הפונט מגיע בארבעה משקלים וגרסאות נטויות תואמות, ומתאים במיוחד לכותרות
          ולטקסטים קצרים המבקשים להדגיש את הייחודיות שלהם.
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
