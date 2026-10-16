import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Shaheen Safi | Founder & Tech Entrepreneur",
    template: "%s | Shaheen Safi",
  },
  description:
    "Official personal website and insights of Shaheen Safi. Founder & Director of Safi International Capital LTD (CRN: 17063286, London, UK), SafiPay, and Safi Group.",
  alternates: {
    canonical: "https://shaheensafi.blog/en",
    languages: {
      "x-default": "https://shaheensafi.blog/en",
      en: "https://shaheensafi.blog/en",
      fa: "https://shaheensafi.blog/fa",
    },
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" className="relative min-h-screen flex flex-col">
      <Header lang="en" />
      <main className="flex-grow relative z-0">
        {children}
      </main>
      <Footer lang="en" />
    </div>
  );
}