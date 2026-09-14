import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SearchComparison from "@/components/SearchComparison";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <SearchComparison />
      <AboutSection />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
