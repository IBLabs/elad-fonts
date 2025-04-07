import FontShowcasePage from "@/components/FontShowcasePage";
import { simpler, franksiMonoink } from "@/config/fonts";

const fontWeights = [
  {
    weight: "רגיל",
    weightNumber: "400",
    sampleText: "עטלף אכל פרי שלכד ברש",
    font: franksiMonoink,
  },
];

export default function FranksiMonoinkPage() {
  return (
    <FontShowcasePage
      fontName="פרנקסי מונואינק"
      description="פרנקסי מונואינק הוא גרסה מונוספייס של הפונט פרנקסי, המדמה את המראה של דיו על נייר. כל האותיות באותו הרוחב, מה שמעניק לטקסט מראה טכני ומדויק, אך עם אופי אורגני ונוכחות חזקה. מושלם לעיצוב קוד, תצוגות טכניות, או כל מקום בו נדרשת אחידות ונוכחות גרפית."
      fontWeights={fontWeights}
      displayFont={franksiMonoink}
      labelFont={simpler}
      gradientFrom="#1E293B"
    />
  );
}
