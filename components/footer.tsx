"use client"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">STUDIO</h3>
            <p className="text-muted-foreground mb-4">
              Creating exceptional digital experiences that inspire and engage.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Work", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Design", "Development", "Branding", "Strategy"].map((item) => (
                <li key={item}>
                  <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Creative Studio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
