import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stream Flix | AI Movie Recommendations & Summaries",
  description: "Get personalized AI-based movie recommendations, explore movie details, and read custom summaries with or without spoilers based on your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Material+Symbols+Outlined:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
