import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section dir="ltr" className="min-h-screen flex flex-col">
      {/* پاس دادن زبان en به هیدر */}
      <Header lang="en" />
      
      <main className="flex-grow">
        {children}
      </main>

      {/* پاس دادن زبان en به فوتر */}
      <Footer lang="en" />
    </section>
  );
}