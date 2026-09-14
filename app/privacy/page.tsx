import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="py-12 md:py-20">
                <PrivacyContent />
            </div>
            <Footer />
        </main>
    );
}
