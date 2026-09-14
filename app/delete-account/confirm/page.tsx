import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteConfirmForm from "@/components/DeleteConfirmForm";

export default function DeleteAccountConfirmPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white flex flex-col justify-between">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <DeleteConfirmForm />
            </div>
            <Footer />
        </main>
    );
}

