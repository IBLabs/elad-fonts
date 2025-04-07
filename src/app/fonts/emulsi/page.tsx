import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, emulsiFonts } from "@/config/fonts";

const fontWeights = [
  {
    weight: "קל",
    weightNumber: "300",
    sampleText: "עטלף אכל פרי שלכד ברשת",
    font: emulsiFonts.light,
  },
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברשת",
    font: emulsiFonts.regular,
  },
  {
    weight: "מדיום",
    weightNumber: "500",
    sampleText: "עטלף אכל פרי שלכד ברשת",
    font: emulsiFonts.medium,
  },
  {
    weight: "כבד",
    weightNumber: "600",
    sampleText: "עטלף אכל פרי שלכד ברשת",
    font: emulsiFonts.bold,
  },
  {
    weight: "שחור",
    weightNumber: "700",
    sampleText: "עטלף אכל פרי שלכד ברשת",
    font: emulsiFonts.black,
  },
];

export default function EmulsiPage() {
  return (
    <FontShowcasePage
      fontName="אמולסי"
      description="אמולסי הוא פונט עברי עם קריצה – שילוב נועז בין גיאומטריה מוקפדת לאופי שובב. הקווים שלו חדים אבל ידידותיים, והאותיות מתנדנדות בעדינות בין סדר לאי-סדר. מתאים לטקסטים שמבקשים לבלוט, לשדר ייחודיות, ולהכניס קצת אופי לכל מילה."
      fontWeights={fontWeights}
      displayFont={emulsiFonts.black}
      labelFont={simpler}
      gradientFrom="#1E293B"
    />
  );
}
