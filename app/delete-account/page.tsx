import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccount from "@/components/DeleteAccount";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      <Navbar />
      <DeleteAccount />
      <Footer />
    </main>
  );
}
