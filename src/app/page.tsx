import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";

const emulsi3 = localFont({
  src: "../fonts/emulsi/emulsi3.otf",
});

const argazimBlack = localFont({
  src: "../fonts/argazim/Argazim_Font-Black.ttf",
});

const maccabiahBold = localFont({
  src: "../fonts/maccabiah23/Maccabiah23-Bold.ttf",
});

const pixelHebrewBlack = localFont({
  src: "../fonts/tetra/PixelHebrew-Black.otf",
});

const zaidnerRegular = localFont({
  src: "../fonts/zaidner/Zaidner_Font-Regular.ttf",
});

const franksiRegular = localFont({
  src: "../fonts/franksi/Franksi_Font-02.ttf",
});

const franksiMonoink = localFont({
  src: "../fonts/franksi-monoink/Franksi_Monoink-02.otf",
});

const zavatHalavBold = localFont({
  src: "../fonts/hemar-pere/ZavatHalav-Bold.otf",
});

const fontFamilies = [
  {
    name: "אמולסי",
    font: emulsi3,
    href: "/fonts/emulsi",
  },
  {
    name: "ארגזים",
    font: argazimBlack,
    href: "/fonts/argazim",
  },
  {
    name: "מכביה 23",
    font: maccabiahBold,
    href: "/fonts/maccabiah",
  },
  {
    name: "טטרא",
    font: pixelHebrewBlack,
    href: "/fonts/pixel-hebrew",
  },
  {
    name: "זיידנר",
    font: zaidnerRegular,
    href: "/fonts/zaidner",
  },
  {
    name: "פרנקסי",
    font: franksiRegular,
    href: "/fonts/franksi",
  },
  {
    name: "פרנקסי מונואינק",
    font: franksiMonoink,
    href: "/fonts/franksi-monoink",
  },
  {
    name: "חימר פרא",
    font: zavatHalavBold,
    href: "/fonts/zavat-halav",
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      <div className="px-4 py-6 mt-8 mb-2 text-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={60}
          className="mx-auto opacity-90"
        />
      </div>
      <section className="px-4 pt-4 pb-16">
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
