"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-border" : "py-6",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-heading font-bold">
            STUDIO
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={item.path}
                className={cn(
                  "text-sm uppercase tracking-wider hover:text-primary transition-colors",
                  pathname === item.path ? "text-primary font-medium" : "text-foreground",
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "block py-2 text-lg font-medium hover:text-primary transition-colors",
                      pathname === item.path ? "text-primary" : "text-foreground",
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
