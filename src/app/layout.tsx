import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Link from "next/link";
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
        {/* Premium Header */}
        <header className="sticky top-0 z-50 border-b border-healing-slate/30 bg-white/80 backdrop-blur-xl shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 md:py-0 md:h-20 gap-4">
              {/* Brand */}
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/"
                  className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-healing-green-dark hover:opacity-90 transition-all duration-300"
                >
                  The Human Healing Circle
                </Link>
              </div>

              {/* Navigation */}
              <nav className="flex justify-center overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-5 sm:gap-8 text-sm font-medium whitespace-nowrap">
                  <a
                    href="/"
                    className="hover:text-healing-green transition-colors duration-300"
                  >
                    Home
                  </a>

                  <a
                    href="/services"
                    className="hover:text-healing-green transition-colors duration-300"
                  >
                    Services
                  </a>

                  <a
                    href="/pricing"
                    className="hover:text-healing-green transition-colors duration-300"
                  >
                    Pricing
                  </a>

                  <a
                    href="/community"
                    className="px-4 py-2 rounded-full bg-healing-green-light text-healing-green-dark font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    🤝 Friendship Hub
                  </a>

                  <a
                    href="/contact"
                    className="hover:text-healing-green transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-healing-green-light/20 blur-3xl" />
          </div>

          <div className="relative">{children}</div>
        </main>

        {/* Footer */}
        <footer className="mt-auto bg-healing-blue-dark text-healing-bg border-t border-white/10">
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
