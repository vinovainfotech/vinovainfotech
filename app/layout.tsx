import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "lenis/dist/lenis.css"
import { LenisProvider } from "@/contexts/LenisContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinova Infotech | Production-Grade Software Solutions",
  description:
    "Building production-grade applications that scale. Enterprise-quality web development, app development, and UI/UX design services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}

