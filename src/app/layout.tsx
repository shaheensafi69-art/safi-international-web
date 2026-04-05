import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang || "en"}>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="galaxy-bg" />
        {children}
      </body>
    </html>
  );
}