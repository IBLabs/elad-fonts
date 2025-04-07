import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, hemarPereFonts } from "@/config/fonts";

const fontWeights = [
  {
    weight: "קל",
    weightNumber: "300",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: hemarPereFonts.light,
  },
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: hemarPereFonts.regular,
  },
  {
    weight: "בינוני",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: hemarPereFonts.medium,
  },
  {
    weight: "חצי-כבד",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: hemarPereFonts.semiBold,
  },
  {
    weight: "כבד",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: hemarPereFonts.bold,
  },
  {
    weight: "שחור",
    weightNumber: "900",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: hemarPereFonts.black,
  },
];

export default function ZavatHalavPage() {
  return (
    <FontShowcasePage
      fontName="חימר פרא"
      description="חימר פרא הוא פונט עברי מסוגנן המתאפיין בזוויות רכות וזרימה אלגנטית. הפונט משלב צורות אורגניות עם קריאות מעולה, מה שמאפשר לו לתפקד היטב הן בכותרות גדולות והן בטקסט רץ. הוא מגיע במגוון משקלים, החל מקל ועד שחור, ומתאים לכל שימוש מיתוג ועיצוב המבקש לשלב רכות וייחודיות."
      fontWeights={fontWeights}
      displayFont={hemarPereFonts.black}
      labelFont={simpler}
      gradientFrom="#1E293B"
    />
  );
}
