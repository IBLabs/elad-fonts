import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
