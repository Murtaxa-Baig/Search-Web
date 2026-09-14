import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsContent from "@/components/TermsContent";

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="py-12 md:py-20">
                <TermsContent />
            </div>
            <Footer />
        </main>
    );
}
