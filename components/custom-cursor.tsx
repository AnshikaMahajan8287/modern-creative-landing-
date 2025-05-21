"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface CustomCursorProps {
  hovered: boolean
}

export default function CustomCursor({ hovered }: CustomCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 custom-cursor",
          visible ? "opacity-100" : "opacity-0",
        )}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 custom-cursor",
          visible ? "opacity-100" : "opacity-0",
        )}
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: hovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 300,
        }}
      />
    </>
  )
}
