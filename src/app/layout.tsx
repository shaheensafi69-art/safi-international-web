import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  // داده‌های ساختاریافته برای شناسایی هویت شاهین صافی توسط گوگل
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shaheen Safi",
    "url": "https://shaheensafi.blog",
    "jobTitle": "Tech Entrepreneur & Founder",
    "description": "Founder of SafiPay, Safi International Capital, and SafiPro. Specialist in Fintech, Digital Banking, and AI solutions.",
    "brand": [
      { "@type": "Brand", "name": "SafiPay", "url": "https://www.safipay.net" },
      { "@type": "Brand", "name": "Safi TopUp", "url": "https://www.safitopup.site" },
      { "@type": "Brand", "name": "SafiPro", "url": "https://www.safipro.site" }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/shaheen-safi-b73a30299/",
      "https://www.crunchbase.com/person/shaheen-safi",
      "https://x.com/shaheensafi011",
      "https://www.instagram.com/top_g_official1/",
      "https://www.facebook.com/share/1H1vuV1i9Z/",
      "https://www.tiktok.com/@safi_sahib6",
      "https://www.ted.com/profiles/51476914",
      "https://www.f6s.com/member/shaheen-safi",
      "https://medium.com/@shaheensafi09",
      "https://medium.com/@safipro011"
    ],
    "subjectOf": [
      {
        "@type": "CreativeWork",
        "name": "The Future of Digital Banking in Afghanistan",
        "url": "https://medium.com/@shaheensafi09/the-future-of-digital-banking-in-afghanistan-the-vision-behind-safipay-3ff10c6bfaa3"
      },
      {
        "@type": "CreativeWork",
        "name": "The Vision of an Entrepreneur: Who is Shaheen Safi?",
        "url": "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd"
      }
    ]
  };

  return (
    <html lang={lang}>
      <head>
        {/* اسکریپت شناسایی هویت (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* کد ادسنس */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2430648749257681"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="galaxy-bg" />
        {children}
      </body>
    </html>
  );
}