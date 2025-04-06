import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const emulsi1 = localFont({
  src: "../../public/fonts/emulsi1.otf",
});

const emulsi2 = localFont({
  src: "../../public/fonts/emulsi2.otf",
});

const emulsi3 = localFont({
  src: "../../public/fonts/emulsi3.otf",
});

const emulsi4 = localFont({
  src: "../../public/fonts/emulsi4.otf",
});

const simplerPro = localFont({
  src: "../../public/fonts/simpler.otf",
});

export const metadata: Metadata = {
  title: "אמולסי - פונט עברי עם קריצה",
  description:
    "פונט עברי עם קריצה – שילוב נועז בין גיאומטריה מוקפדת לאופי שובב",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${emulsi1} ${emulsi2.className} ${emulsi3.className} ${emulsi4.className} ${simplerPro.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
