import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Search | Simultaneous Multi-Browser Search & Offline AI Search",
  description: "Search across multiple browsers simultaneously in one go. Run WebViews inside the application, download offline AI models, and customize your search experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="font-sans antialiased min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400">
        {children}
      </body>
    </html>
  );
}

