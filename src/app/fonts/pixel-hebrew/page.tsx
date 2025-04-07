import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, tetraFonts } from "@/config/fonts";

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: tetraFonts.regular,
  },
  {
    weight: "בולד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: tetraFonts.bold,
  },
  {
    weight: "בלאק",
    weightNumber: "900",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: tetraFonts.black,
  },
];

export default function PixelHebrewPage() {
  return (
    <FontShowcasePage
      fontName="טטרא"
      description="פונט טטרא הוא פונט ייחודי המשלב אסתטיקה של משחקי מחשב רטרו עם טיפוגרפיה עברית מודרנית. הפונט מגיע בשלושה משקלים ומתאים במיוחד לעיצובים המבקשים להעביר תחושה נוסטלגית או משחקית."
      fontWeights={fontWeights}
      displayFont={tetraFonts.black}
      labelFont={simpler}
      backgroundImage="/tetra-header.png"
      backgroundPosition="50% 30%"
    />
  );
}
