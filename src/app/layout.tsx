"use client";
import './globals.css'
import { ThemeProvider } from 'next-themes'
 import Navbar from '../components/Navbar'






export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
 
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#191c24] to-[#23272f] dark:from-[#1a1c22] dark:to-[#121212]">
            {children}
          </main>
          <footer className="text-center py-6 text-blue-200">
            © {year} SnowRSPS
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
