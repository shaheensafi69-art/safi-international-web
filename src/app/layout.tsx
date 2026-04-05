import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // تغییر به Promise
}) {
  // منتظر ماندن برای دریافت پارامترها
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="galaxy-bg" />
        {children}
      </body>
    </html>
  );
}