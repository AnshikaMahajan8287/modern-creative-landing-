"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  const [cursorHovered, setCursorHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => setCursorHovered(true)
  const handleMouseLeave = () => setCursorHovered(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <>
      <CustomCursor hovered={cursorHovered} />

      <div ref={containerRef} className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="grid-pattern absolute inset-0 z-0"></div>
          <div className="noise-bg absolute inset-0 z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 md:pt-0">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Creative Studio
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We craft <span className="text-primary">digital</span> experiences that{" "}
                <span className="text-outline">inspire</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We're a creative studio specializing in design, development, and digital strategy. We help brands stand
                out in the digital landscape.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/work">
                    View our work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/about">About us</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground scroll-indicator" />
          </motion.div>

          <div className="absolute -bottom-48 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-20 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  title: "Immersive Digital Experience",
                  category: "Web Design",
                  image: "/images/digital-interaction.png",
                },
                {
                  title: "Brand Identity System",
                  category: "Branding",
                  image: "/images/digital-connectivity.png",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl hover-lift"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/work" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 z-10">
                      <span className="inline-block text-sm text-primary font-medium mb-2">{project.category}</span>
                      <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/work" className="group">
                  View all projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-muted/30 clip-path-diagonal relative">
          <div className="noise-bg absolute inset-0 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
              <div className="w-24 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Design",
                  description: "We create visually stunning interfaces that engage users and elevate your brand.",
                  icon: "✦",
                },
                {
                  title: "Web Development",
                  description: "We build fast, responsive, and accessible websites using the latest technologies.",
                  icon: "✧",
                },
                {
                  title: "Brand Strategy",
                  description: "We help define your brand's voice, vision, and position in the market.",
                  icon: "✢",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-8 rounded-xl hover-lift"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-4xl text-primary mb-6">{service.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Experience */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Digital Experience</h2>
              <div className="w-24 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  Elements of Digital Employee Experience
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We create comprehensive digital experiences that address all aspects of user interaction, from
                  technology implementation to accessibility and personalized workflows.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our holistic approach ensures that every digital touchpoint is optimized for maximum engagement and
                  usability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src="/images/digital-experience.png"
                    alt="Elements of Digital Employee Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Clients Say</h2>
              <div className="w-24 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Working with this team was a game-changer for our brand. They delivered beyond our expectations.",
                  author: "Sarah Johnson",
                  role: "Marketing Director",
                },
                {
                  quote: "Their creative approach and technical expertise helped us stand out in a crowded market.",
                  author: "Michael Chen",
                  role: "CEO, TechStart",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-muted/30 p-8 rounded-xl relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-6xl text-primary/20 absolute top-4 left-4">"</div>
                  <div className="relative z-10">
                    <p className="text-lg mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">{testimonial.author.charAt(0)}</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary clip-path-diagonal-reverse relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                Ready to start your project?
              </motion.h2>

              <motion.p
                className="text-xl text-white/80 mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let's create something amazing together. Get in touch with our team.
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
                  variant="secondary"
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/contact">
                    Contact us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <div className="marquee-container py-4 bg-primary/80">
              <div className="marquee-content">
                {Array(10)
                  .fill("CREATIVE STUDIO • DESIGN • DEVELOPMENT • STRATEGY • ")
                  .map((text, index) => (
                    <span key={index} className="mx-4 text-white/70">
                      {text}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
