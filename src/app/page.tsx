'use client';
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="p-1 rounded-3xl bg-gradient-to-br from-purple-300 via-pink-300 to-white shadow-lg">
            <Image
              src="/abdulrehman.jpg" // 👈 apni image ko public folder me rakho
              alt="Abdul Rehman"
              width={300}
              height={300}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Abdul Rehman
            </span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            A passionate <span className="font-semibold">Web Developer</span>{" "}
            crafting sleek, scalable, and modern applications using{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">TailwindCSS</span>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/about"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-center"
            >
              About Me
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition duration-200 text-center"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
