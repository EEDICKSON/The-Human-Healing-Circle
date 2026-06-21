import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar"; // Imports your new Client Component header
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "The Human Healing Circle",
  description:
    "Healing through Human Connection. One World. One Circle. Healing Together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-healing-blue-dark bg-gradient-to-b from-healing-bg via-white to-healing-bg overflow-x-hidden">
        {/* Render your new interactive Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative w-full max-w-full overflow-x-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-healing-green-light/20 blur-3xl" />
          </div>
          <div className="relative z-10">{children}</div>
        </main>

        {/* Footer */}
        <footer className="mt-auto bg-healing-blue-dark text-healing-bg border-t border-white/10 shrink-0">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center">
            <p className="text-xs sm:text-sm opacity-90">
              © 2026 The Human Healing Circle
            </p>
            <p className="mt-2 text-[11px] sm:text-xs opacity-70 tracking-wide">
              One World • One Circle • Healing Together
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
