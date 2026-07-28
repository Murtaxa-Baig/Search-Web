import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <ContactHero />
            <section className="pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <ContactForm />
                    </div>
                    <FAQ />
                </div>
            </section>
            <Footer />
        </main>
    );
}
