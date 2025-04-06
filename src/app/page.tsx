import Link from "next/link";
import localFont from "next/font/local";

const simplerPro = localFont({
  src: "../fonts/simpler.otf",
});

const emulsi3 = localFont({
  src: "../fonts/emulsi3.otf",
});

const argazimBlack = localFont({
  src: "../fonts/Argazim_Font-Black.ttf",
});

const maccabiahBold = localFont({
  src: "../fonts/Maccabiah23-Bold.ttf",
});

const pixelHebrewBlack = localFont({
  src: "../fonts/PixelHebrew-Black.otf",
});

const fontFamilies = [
  {
    name: "אמולסי",
    font: emulsi3,
    href: "/emulsi",
  },
  {
    name: "ארגזים",
    font: argazimBlack,
    href: "/argazim",
  },
  {
    name: "מכביה 23",
    font: maccabiahBold,
    href: "/maccabiah",
  },
  {
    name: "פיקסל עברית",
    font: pixelHebrewBlack,
    href: "/pixel-hebrew",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black py-[60px] px-4 overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col items-start gap-12">
        <h1
          className={`${simplerPro.className} text-[8vw] text-white text-right w-full`}
        >
          משפחות גופנים
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {fontFamilies.map((family) => (
            <Link
              key={family.href}
              href={family.href}
              className="block w-full group"
            >
              <div className="w-full aspect-[3/2] bg-white/5 rounded-lg p-8 flex items-center justify-center hover:bg-white/10 transition-colors">
                <h2
                  className={`${family.font.className} text-[10vw] md:text-[5vw] text-white text-center`}
                >
                  {family.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
