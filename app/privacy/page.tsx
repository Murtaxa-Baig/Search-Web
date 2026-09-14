import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <div className="py-12 md:py-20">
        <PrivacyContent />
      </div>
      <Footer />
    </main>
  );
}
