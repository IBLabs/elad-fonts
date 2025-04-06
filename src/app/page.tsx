import FontWeightDisplay from "@/components/FontWeightDisplay";
import FontShowcase from "@/components/FontShowcase";
import PurchaseButton from "@/components/PurchaseButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-black py-[60px] px-[3px]">
      <div className="max-w-[387px] mx-auto p-[14px] flex flex-col items-start gap-8">
        <h1 className="font-[emulsi] text-[96px] leading-[1.6em] text-white">
          אמולסי
        </h1>

        <p className="font-simplerPro text-[20px] leading-[1.3em] text-white text-right">
          פרנקסי הוא פונט עברי עם קריצה – שילוב נועז בין גיאומטריה מוקפדת לאופי
          שובב. הקווים שלו חדים אבל ידידותיים, והאותיות מתנדנדות בעדינות בין סדר
          לאי-סדר. מתאים לטקסטים שמבקשים לבלוט, לשדר ייחודיות, ולהכניס קצת אופי
          לכל מילה.
        </p>

        <div className="h-8" />

        <div className="flex flex-col items-end gap-[18px]">
          <FontWeightDisplay
            weight="רגיל"
            weightNumber="400"
            sampleText="עטלף אכל פרי שלכד ברשת"
            fontName="emulsi1"
          />
          <FontWeightDisplay
            weight="מדיום"
            weightNumber="500"
            sampleText="עטלף אכל פרי שלכד ברש"
            fontName="emulsi2"
          />
          <FontWeightDisplay
            weight="כבד"
            weightNumber="600"
            sampleText="עטלף אכל פרי שלכד ברש"
            fontName="emulsi3"
          />
          <FontWeightDisplay
            weight="שחור"
            weightNumber="800"
            sampleText="עטלף אכל פרי שלכד ברש"
            fontName="emulsi4"
          />
        </div>

        <FontShowcase
          weight="שחור"
          weightNumber="800"
          sampleText="עטלף אכל פרי שלכד ברש"
          fontName="emulsi4"
        />

        <div className="h-8" />

        <PurchaseButton />
      </div>
    </div>
  );
}
