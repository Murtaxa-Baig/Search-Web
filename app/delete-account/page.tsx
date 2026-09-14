import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccount from "@/components/DeleteAccount";

export default function DeleteAccountPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <DeleteAccount />
            <Footer />
        </main>
    );
}
