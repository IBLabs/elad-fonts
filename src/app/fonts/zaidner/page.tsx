import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, zaidner } from "@/config/fonts";

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: zaidner,
  },
];

export default function ZaidnerPage() {
  return (
    <FontShowcasePage
      fontName="זיידנר"
      description="זיידנר הוא פונט עברי וקריא, המשלב אלמנטים של פונט סריף קלאסי עם נגיעות מודרניות. הוא מתאפיין באות דקה וברורה, עם סיומות קלות שמקנות לטקסט חן מיוחד. הפונט יוצר מראה מכובד ועדין, אך עדיין שומר על קריאות וקלות קריאה."
      fontWeights={fontWeights}
      displayFont={zaidner}
      labelFont={simpler}
      gradientFrom="#1E293B"
    />
  );
}
