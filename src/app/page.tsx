import Link from "next/link";
import localFont from "next/font/local";

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
    name: "טטרא",
    font: pixelHebrewBlack,
    href: "/pixel-hebrew",
  },
];

export default function Home() {
  // Get the letters of "אינקטראפ"
  const letters = "אינקטראפ".split("");

  return (
    <main className="bg-black">
      <div className="px-4 py-6 pb-2 text-center">
        <h1 className="text-white flex justify-center items-baseline">
          {letters.map((letter, index) => {
            // Get a random font family
            const randomFont =
              fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
                .font;

            return (
              <span
                key={index}
                className={`${randomFont.className} text-[12vw] md:text-[8vw]`}
              >
                {letter}
              </span>
            );
          })}
        </h1>
      </div>
      <section className="px-4 pt-2 pb-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {fontFamilies.map((family) => (
            <Link
              key={family.href}
              href={family.href}
              className="block w-full group"
            >
              <div className="w-full aspect-[4/1.5] bg-white/5 rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
                <h2
                  className={`${family.font.className} text-[8vw] md:text-[4vw] text-white text-center`}
                >
                  {family.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
