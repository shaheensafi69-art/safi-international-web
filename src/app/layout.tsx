import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shaheensafi.blog"),
  title: {
    default: "Shaheen Safi | Founder & Tech Entrepreneur",
    template: "%s | Shaheen Safi",
  },
  description:
    "Official personal website of Shaheen Safi. Founder & Director of Safi International Capital LTD (CRN: 17063286, London, UK), SafiPay, Safi TopUp, and Safi Academy. Certified Financial Technician (CFTe).",
  keywords: [
    "Shaheen Safi",
    "شاهین صافی",
    "Safi International Capital LTD",
    "SafiPay",
    "Safi TopUp",
    "Safi Academy",
    "ZEV App",
    "SafiPro",
    "Fintech Entrepreneur",
    "Digital Banking",
    "Certified Financial Technician",
    "CFTe",
    "CRN 17063286",
    "London UK",
    "Wikidata Q138427366",
    "Wikidata Q139502306",
  ],
  authors: [{ name: "Shaheen Safi", url: "https://shaheensafi.blog" }],
  creator: "Shaheen Safi",
  publisher: "Safi International Capital LTD",
  alternates: {
    canonical: "https://shaheensafi.blog",
    languages: {
      "x-default": "https://shaheensafi.blog/en",
      en: "https://shaheensafi.blog/en",
      fa: "https://shaheensafi.blog/fa",
    },
  },
  openGraph: {
    type: "profile",
    title: "Shaheen Safi | Founder, Director & Tech Entrepreneur",
    description:
      "Official personal website and portfolio of Shaheen Safi, Founder of Safi International Capital LTD, SafiPay, and Safi Group.",
    url: "https://shaheensafi.blog",
    siteName: "Shaheen Safi",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    images: [
      {
        url: "/shaheensafi.jpeg",
        width: 1200,
        height: 630,
        alt: "Shaheen Safi - Founder & Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaheen Safi | Founder, Director & Tech Entrepreneur",
    description:
      "Official personal website and portfolio of Shaheen Safi, Founder of Safi International Capital LTD and SafiPay.",
    creator: "@shaheensafi011",
    images: ["/shaheensafi.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  // ساختار رسمی اسکیما گراف دانش (Unified Schema.org Knowledge Graph)
  const knowledgeGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://www.wikidata.org/wiki/Q139502306",
        "name": "Safi International Capital LTD",
        "legalName": "Safi International Capital LTD",
        "url": "https://safiinternationalcapitalltd.site",
        "logo": "https://shaheensafi.blog/saficapital.png",
        "identifier": "17063286",
        "taxID": "85677 13611",
        "duns": "234621356",
        "email": "info@safiinternationalcapitalltd.site",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "71-75 Shelton Street, Covent Garden",
          "addressLocality": "London",
          "postalCode": "WC2H 9JQ",
          "addressCountry": "GB",
        },
        "founder": {
          "@id": "https://www.wikidata.org/wiki/Q138427366",
        },
        "subOrganization": [
          {
            "@type": "FinancialService",
            "@id": "https://www.wikidata.org/wiki/Q141694711",
            "name": "SafiPay",
            "url": "https://safipay.net",
          },
          {
            "@type": "Organization",
            "@id": "https://www.wikidata.org/wiki/Q138820214",
            "name": "Safi TopUp",
            "url": "https://safitopup.site",
          },
          {
            "@type": "EducationalOrganization",
            "@id": "https://www.wikidata.org/wiki/Q140546286",
            "name": "Safi Academy",
            "url": "https://safiacademy.org",
          },
          {
            "@type": "Organization",
            "name": "ZEV App",
            "url": "https://www.zevapp.com",
          },
          {
            "@type": "Organization",
            "name": "SafiPro",
            "url": "https://safipro.site",
          },
        ],
        "sameAs": [
          "https://www.wikidata.org/wiki/Q139502306",
          "https://find-and-update.company-information.service.gov.uk/company/17063286",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.wikidata.org/wiki/Q138427366",
        "name": "Shaheen Safi",
        "alternateName": ["شاهین صافی", "Shaheen Safi"],
        "jobTitle": "Founder, Director & Chief Visionary Architect",
        "url": "https://shaheensafi.blog",
        "image": "https://shaheensafi.blog/shaheensafi.jpeg",
        "birthDate": "2003-04-02",
        "gender": "Male",
        "nationality": "Afghan",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Istanbul Technical University (ITU)",
        },
        "worksFor": {
          "@id": "https://www.wikidata.org/wiki/Q139502306",
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Certified Financial Technician (CFTe)",
            "recognizedBy": {
              "@type": "Organization",
              "name": "International Federation of Technical Analysts (IFTA)",
            },
          },
        ],
        "sameAs": [
          "https://www.wikidata.org/wiki/Q138427366",
          "https://www.ted.com/profiles/51476914",
          "https://medium.com/@shaheensafi09",
          "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd",
          "https://www.linkedin.com/in/shaheen-safi-b73a30299/",
          "https://www.crunchbase.com/person/shaheen-safi",
          "https://x.com/shaheensafi011",
          "https://www.instagram.com/top_g_official1/",
          "https://www.facebook.com/share/18h8Drdg6z/",
          "https://www.facebook.com/share/1H1vuV1i9Z/",
          "https://www.tiktok.com/@safi_sahib6",
          "https://www.f6s.com/member/shaheen-safi",
          "https://safiinternationalcapitalltd.site/about/shaheen-safi",
        ],
        "brand": [
          { "@type": "Brand", "name": "SafiPay", "url": "https://safipay.net" },
          { "@type": "Brand", "name": "Safi TopUp", "url": "https://safitopup.site" },
          { "@type": "Brand", "name": "Safi Academy", "url": "https://safiacademy.org" },
          { "@type": "Brand", "name": "ZEV App", "url": "https://www.zevapp.com" },
          { "@type": "Brand", "name": "SafiPro", "url": "https://safipro.site" },
          {
            "@type": "Brand",
            "name": "Safi International Capital LTD",
            "url": "https://safiinternationalcapitalltd.site",
          },
        ],
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "name": "The Future of Digital Banking in Afghanistan",
            "url": "https://medium.com/@shaheensafi09/the-future-of-digital-banking-in-afghanistan-the-vision-behind-safipay-3ff10c6bfaa3",
          },
          {
            "@type": "CreativeWork",
            "name": "The Vision of an Entrepreneur: Who is Shaheen Safi?",
            "url": "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://shaheensafi.blog/#website",
        "url": "https://shaheensafi.blog",
        "name": "Shaheen Safi | Official Personal Hub",
        "description":
          "Official personal website, portfolio, and insights of Shaheen Safi, Founder and Director of Safi International Capital LTD, SafiPay, and Safi Group.",
        "publisher": {
          "@id": "https://www.wikidata.org/wiki/Q138427366",
        },
        "inLanguage": ["en", "fa"],
      },
      {
        "@type": "FAQPage",
        "@id": "https://shaheensafi.blog/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Shaheen Safi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Shaheen Safi (شاهین صافی) is an international fintech entrepreneur, Certified Financial Technician (CFTe), and the Founder, Director & Chief Visionary Architect of Safi International Capital LTD, SafiPay, Safi TopUp, Safi Academy, and ZEV App.",
            },
          },
          {
            "@type": "Question",
            "name": "What is Safi International Capital LTD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Safi International Capital LTD is a UK-incorporated corporate investment and holding entity (Company Number: 17063286, DUNS: 234621356, Tax ID: 85677 13611) headquartered at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK.",
            },
          },
          {
            "@type": "Question",
            "name": "Who is the founder of Safi International Capital LTD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Shaheen Safi is the Founder and Director of Safi International Capital LTD.",
            },
          },
          {
            "@type": "Question",
            "name": "What companies and ventures are part of the Safi ecosystem?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The ecosystem encompasses SafiPay (digital banking and EU multi-currency Visa rails), Safi TopUp (global airtime & mobile data across 150+ countries), Safi Academy (EdTech and digital skills foundation), ZEV App (decentralized privacy social network), and SafiPro (contemporary lifestyle & luxury fashion).",
            },
          },
          {
            "@type": "Question",
            "name": "What are Shaheen Safi's professional qualifications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Shaheen Safi studied at Istanbul Technical University (ITU) and holds the Certified Financial Technician (CFTe) designation accredited by the International Federation of Technical Analysts (IFTA).",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang={lang}>
      <head>
        {/* اسکریپت رسمی شناسایی هویت و گراف دانش (Schema.org Knowledge Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraphSchema) }}
        />

        {/* تأیید مالکیت و اتصال حساب گوگل ادسنس */}
        <meta name="google-adsense-account" content="ca-pub-6551903544426492" />

        {/* کد اصلی گوگل ادسنس */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6551903544426492"
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