import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, maccabiahFonts } from "@/config/fonts";

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.regular,
  },
  {
    weight: "רגיל צר",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.regularNarrow,
  },
  {
    weight: "מדיום",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.medium,
  },
  {
    weight: "מדיום צר",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.mediumNarrow,
  },
  {
    weight: "דמי-בולד",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.demiBold,
  },
  {
    weight: "דמי-בולד צר",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.demiBoldNarrow,
  },
  {
    weight: "בולד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.bold,
  },
  {
    weight: "בולד צר",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.boldNarrow,
  },
  {
    weight: "אולטרה-בולד",
    weightNumber: "800",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.ultraBold,
  },
  {
    weight: "אולטרה-בולד צר",
    weightNumber: "800",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: maccabiahFonts.ultraBoldNarrow,
  },
];

export default function MaccabiahPage() {
  return (
    <FontShowcasePage
      fontName="מכביה 23"
      description="פונט מכביה 23 הוא פונט מודרני ועוצמתי שעוצב במיוחד עבור המכביה ה-21. הפונט משלב אלמנטים ספורטיביים עם קריאות גבוהה, ומגיע במגוון משקלים ורוחבים המאפשרים גמישות עיצובית מלאה."
      fontWeights={fontWeights}
      displayFont={maccabiahFonts.ultraBold}
      labelFont={simpler}
      gradientFrom="#0066B2"
    />
  );
}
