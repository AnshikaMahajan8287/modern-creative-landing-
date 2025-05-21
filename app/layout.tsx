import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Creative Studio",
  description: "A modern creative studio specializing in digital experiences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageTransition>
            <Navigation />
            <main className="min-h-screen">{children}</main>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
