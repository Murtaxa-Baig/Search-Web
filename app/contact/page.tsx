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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                        {/* Contact Info Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                                        <span className="material-symbols-outlined text-2xl">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Email Us</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Our support team is online and ready to assist you.</p>
                                        <a
                                            href="mailto:supportappnaya@gmail.com"
                                            className="text-primary font-semibold hover:underline text-sm break-all"
                                        >
                                            supportappnaya@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                                        <span className="material-symbols-outlined text-2xl">schedule</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Response Time</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">We respond to all inquiries within 24 hours, Monday through Friday.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl brand-gradient text-white shadow-lg space-y-3">
                                <h4 className="font-bold text-lg">Need immediate help?</h4>
                                <p className="text-sm text-white/80 leading-relaxed">
                                    Check out our frequently asked questions below for quick answers to common issues regarding subscriptions and tools.
                                </p>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                    <FAQ />
                </div>
            </section>
            <Footer />
        </main>
    );
}
