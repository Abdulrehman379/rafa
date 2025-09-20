import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Abdul Rehman Portfolio",
  description: "Modern Next.js Portfolio Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Abdul Rehman
            </Link>

            {/* 👇 Button Group */}
            <div className="flex space-x-3">
              <Link
                href="/"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition"
              >
                About
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="container mx-auto px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-10">
          <div className="container mx-auto text-center">
            <p>
              © {new Date().getFullYear()} Abdul Rehman Portfolio. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
