import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, argazimFonts } from "@/config/fonts";

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.regular,
  },
  {
    weight: "רגיל נטוי",
    weightNumber: "400i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.regularItalic,
  },
  {
    weight: "מדיום",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.medium,
  },
  {
    weight: "מדיום נטוי",
    weightNumber: "500i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.mediumItalic,
  },
  {
    weight: "בולד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.bold,
  },
  {
    weight: "בולד נטוי",
    weightNumber: "700i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.boldItalic,
  },
  {
    weight: "בלאק",
    weightNumber: "900",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.black,
  },
  {
    weight: "בלאק נטוי",
    weightNumber: "900i",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: argazimFonts.blackItalic,
  },
];

export default function ArgazimPage() {
  return (
    <FontShowcasePage
      fontName="ארגזים"
      description="פונט ארגזים הוא פונט עברי מודרני המשלב גיאומטריה נקייה עם אופי ייחודי. הפונט מגיע בארבעה משקלים וגרסאות נטויות תואמות, ומתאים במיוחד לכותרות ולטקסטים קצרים המבקשים להדגיש את הייחודיות שלהם."
      fontWeights={fontWeights}
      displayFont={argazimFonts.black}
      labelFont={simpler}
      gradientFrom="#2D3748"
    />
  );
}
