"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CustomCursor from "@/components/custom-cursor"

type Project = {
  id: number
  title: string
  category: string
  description: string
  image: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Immersive Digital Experience",
    category: "Web Design",
    description: "An interactive website for a virtual art exhibition that pushes the boundaries of web technology.",
    image: "/images/digital-interaction.png",
    year: "2023",
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Branding",
    description: "A comprehensive brand identity for a tech startup, including logo, typography, and visual language.",
    image: "/images/digital-city.png",
    year: "2023",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Development",
    description: "A custom e-commerce solution with unique product visualization and seamless checkout experience.",
    image: "/images/digital-commerce.png",
    year: "2022",
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "UI/UX",
    description: "A user-centered mobile application design for a health and wellness platform.",
    image: "/images/digital-connectivity.png",
    year: "2022",
  },
  {
    id: 5,
    title: "Marketing Campaign",
    category: "Strategy",
    description: "A multi-channel marketing campaign that increased brand awareness by 40%.",
    image: "/images/digital-experience.png",
    year: "2021",
  },
  {
    id: 6,
    title: "Interactive Installation",
    category: "Experience",
    description: "A physical installation that combines digital technology with tactile elements.",
    image: "/images/digital-interaction.png",
    year: "2021",
  },
]

const categories = ["All", "Web Design", "Branding", "Development", "UI/UX", "Strategy", "Experience"]

export default function WorkPage() {
  const [cursorHovered, setCursorHovered] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleMouseEnter = () => setCursorHovered(true)
  const handleMouseLeave = () => setCursorHovered(false)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <CustomCursor hovered={cursorHovered} />

      <div className="relative">
        {/* Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="grid-pattern absolute inset-0 z-0"></div>
          <div className="noise-bg absolute inset-0 z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Work</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Explore our portfolio of creative projects spanning digital design, branding, and development.
              </p>
            </motion.div>
          </div>

          <div className="absolute -bottom-48 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* Filter */}
        <section className="py-8 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-muted/30 text-foreground hover:bg-muted",
                  )}
                  onClick={() => setActiveCategory(category)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onMouseEnter={() => {
                    setHoveredProject(project.id)
                    handleMouseEnter()
                  }}
                  onMouseLeave={() => {
                    setHoveredProject(null)
                    handleMouseLeave()
                  }}
                >
                  <Link href={`#project-${project.id}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={cn(
                          "object-cover transition-all duration-700",
                          hoveredProject === project.id ? "scale-105" : "scale-100",
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block text-sm text-primary font-medium mb-2">{project.category}</span>
                        <h3 className="text-xl font-heading font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-heading font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted/30 clip-path-diagonal relative">
          <div className="noise-bg absolute inset-0 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-heading font-bold mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                Have a project in mind?
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We're always looking for new challenges and exciting projects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/contact">
                    Let's talk
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
