import Header from "@/components/Header";
import Footer from "@/components/Footer";

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