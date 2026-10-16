import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "شاهین صافی | کارآفرین فین‌تک و بنیان‌گذار",
    template: "%s | شاهین صافی",
  },
  description:
    "وب‌سایت رسمی شاهین صافی، بنیان‌گذار و مدیر هلدینگ Safi International Capital LTD (شماره ثبت انگلستان ۱۷۰۶۳۲۸۶)، صافی‌پی و اکوسیستم صافی.",
  alternates: {
    canonical: "https://shaheensafi.blog/fa",
    languages: {
      "x-default": "https://shaheensafi.blog/en",
      en: "https://shaheensafi.blog/en",
      fa: "https://shaheensafi.blog/fa",
    },
  },
};

export default function PersianLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" className="relative min-h-screen flex flex-col">
      <Header lang="fa" />
      <main className="flex-grow relative z-0">
        {children}
      </main>
      <Footer lang="fa" />
    </div>
  );
}