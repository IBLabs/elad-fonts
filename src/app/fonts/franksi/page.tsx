import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, franksi } from "@/config/fonts";

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: franksi,
  },
];

export default function FranksiPage() {
  return (
    <FontShowcasePage
      fontName="פרנקסי"
      description="פרנקסי הוא פונט עברי עם קריצה – שילוב נועז בין גיאומטריה מוקפדת לאופי שובב. הקווים שלו חדים אבל ידידותיים, והאותיות מתנדנדות בעדינות בין סדר לאי-סדר. מתאים לטקסטים שמבקשים לבלוט, לשדר ייחודיות, ולהכניס קצת אופי לכל מילה."
      fontWeights={fontWeights}
      displayFont={franksi}
      labelFont={simpler}
      gradientFrom="#1E293B"
    />
  );
}
