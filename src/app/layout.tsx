import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Link from "next/link"; // Importing the fast routing component
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
      <body className="bg-healing-bg text-healing-blue-dark antialiased min-h-screen flex flex-col">
        {/* Responsive Layout Header */}
        <header className="border-b border-healing-slate bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Clickable Brand Logo linking back Home */}
            <Link
              href="/"
              className="font-serif font-bold text-base md:text-lg text-healing-green-dark tracking-wide hover:opacity-80 transition-opacity"
            >
              The Human Healing Circle
            </Link>

            {/* Navigation Link Items */}
            <nav className="flex items-center gap-6 font-sans text-sm font-medium">
              <Link
                href="/services"
                className="hover:text-healing-green transition-colors"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="hover:text-healing-green transition-colors"
              >
                Memberships
              </Link>
              <Link
                href="/contact"
                className="hover:text-healing-green transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Primary Page Canvas */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <footer className="bg-healing-blue-dark text-healing-bg py-8 mt-auto border-t border-healing-blue-dark/20">
          <div className="max-w-6xl mx-auto px-6 text-center text-xs opacity-80 font-sans">
            © 2026 The Human Healing Circle. One World. One Circle. Healing
            Together.
          </div>
        </footer>
      </body>
    </html>
  );
}
