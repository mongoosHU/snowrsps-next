"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/download", label: "Letöltés" },
  { href: "/toplist", label: "Toplista" },
  { href: "/donate", label: "Donate" }
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#191c24] to-[#23272f] shadow-lg">
      <Link href="/" className="text-2xl font-extrabold tracking-widest text-blue-200 drop-shadow flex items-center">
        SnowRSPS
      </Link>
      <div className="flex items-center gap-4">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-200 hover:text-blue-400 font-medium transition"
          >
            {link.label}
          </Link>
        ))}
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
