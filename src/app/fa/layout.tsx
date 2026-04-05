import Header from "@/components/Header";
import Footer from "@/components/Footer";

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