import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PersianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section dir="rtl" className="min-h-screen flex flex-col">
      {/* پاس دادن زبان fa به هیدر */}
      <Header lang="fa" />
      
      <main className="flex-grow">
        {children}
      </main>

      {/* پاس دادن زبان fa به فوتر */}
      <Footer lang="fa" />
    </section>
  );
}