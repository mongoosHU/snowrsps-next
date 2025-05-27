"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#191c24] to-[#23272f] shadow-lg">
      {/* Bal oldal: Logo */}
      <Link href="/" className="text-2xl font-extrabold tracking-widest text-blue-200 drop-shadow flex items-center">
        SnowRSPS
      </Link>

      {/* Középen: Download gomb */}
      <div className="flex-1 flex justify-center">
        <Link
          href="https://snowrsps.com/SnowEASY.jar"
          className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold px-6 py-2 rounded-lg shadow-lg transition border-2 border-blue-400 animate-pulse"
        >
          Download
        </Link>
      </div>

      {/* Jobb oldal: Menüpontok + Theme váltó */}
      <div className="flex items-center gap-4">
        <Link href="/toplist" className="text-gray-200 hover:text-blue-400 font-medium transition">Toplist</Link>
        
        {mounted && (
          <button
            className="ml-4 p-2 rounded-full hover:bg-gray-700/40 dark:hover:bg-gray-300/20"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        )}
      </div>
    </nav>
  );
}
