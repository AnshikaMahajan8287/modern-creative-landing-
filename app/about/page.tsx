"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"

export default function AboutPage() {
  const [cursorHovered, setCursorHovered] = useState(false)

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
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We're a team of designers, developers, and strategists passionate about creating exceptional digital
                experiences.
              </p>
            </motion.div>
          </div>

          <div className="absolute -bottom-48 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2018, our studio began with a simple mission: to create digital experiences that matter.
                  What started as a small team of three has grown into a diverse group of creative professionals united
                  by a passion for design and technology.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that great design is more than just aesthetics—it's about solving problems, telling
                  stories, and creating meaningful connections between brands and their audiences.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we work with clients across industries, from startups to established brands, helping them
                  navigate the digital landscape and stand out in a crowded market.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl image-mask">
                  <Image
                    src="/images/digital-experience.png"
                    alt="Digital experience elements"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary rounded-full -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/30 clip-path-diagonal relative">
          <div className="noise-bg absolute inset-0 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Creativity",
                  description:
                    "We approach every project with fresh eyes and innovative thinking, pushing boundaries and exploring new possibilities.",
                  icon: "✦",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork, both within our studio and with our clients, to create the best possible outcomes.",
                  icon: "✧",
                },
                {
                  title: "Excellence",
                  description:
                    "We're committed to quality in everything we do, from the smallest details to the big picture strategy.",
                  icon: "✢",
                },
              ].map((value, index) => (
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
                  <div className="text-4xl text-primary mb-6">{value.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Meet Our Team</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "Creative Director",
                  image: "/images/digital-interaction.png",
                },
                {
                  name: "Jamie Chen",
                  role: "Lead Designer",
                  image: "/images/digital-city.png",
                },
                {
                  name: "Sam Taylor",
                  role: "Developer",
                  image: "/images/digital-commerce.png",
                },
                {
                  name: "Jordan Lee",
                  role: "Strategist",
                  image: "/images/digital-connectivity.png",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Process</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, and audience to lay the foundation for success.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "We develop a tailored approach that aligns with your objectives and addresses your unique challenges.",
                },
                {
                  step: "03",
                  title: "Creation",
                  description:
                    "Our team brings the strategy to life through design, development, and content creation.",
                },
                {
                  step: "04",
                  title: "Refinement",
                  description: "We test, iterate, and optimize to ensure the final product exceeds expectations.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="text-6xl font-heading font-bold text-primary/20 mb-4">{process.step}</div>
                  <h3 className="text-xl font-heading font-bold mb-4">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>

                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2">
                      <ArrowRight className="h-6 w-6 text-primary/40" />
                    </div>
                  )}
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
                Want to work with us?
              </motion.h2>

              <motion.p
                className="text-xl text-white/80 mb-8"
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
                  variant="secondary"
                  className="group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/contact">
                    Get in touch
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
