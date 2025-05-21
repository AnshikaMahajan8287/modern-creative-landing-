"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CustomCursor from "@/components/custom-cursor"
import Image from "next/image"

export default function ContactPage() {
  const [cursorHovered, setCursorHovered] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleMouseEnter = () => setCursorHovered(true)
  const handleMouseLeave = () => setCursorHovered(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <>
      <CustomCursor hovered={cursorHovered} />

      <div className="relative">
        {/* Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="grid-pattern absolute inset-0 z-0"></div>
          <div className="noise-bg absolute inset-0 z-0"></div>
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src="/images/digital-commerce.png" alt="Digital commerce background" fill className="object-cover" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Have a project in mind or just want to say hello? We'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="absolute -bottom-48 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6">Send us a message</h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-muted/30"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        required
                        className="bg-muted/30"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="bg-muted/30"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Your message"
                      required
                      className="min-h-[150px] bg-muted/30"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="w-24 h-1 bg-primary mb-8"></div>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground mb-1">For general inquiries:</p>
                      <a
                        href="mailto:hello@creativestudio.com"
                        className="text-primary hover:underline"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        hello@creativestudio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-1">Monday to Friday, 9am to 6pm:</p>
                      <a
                        href="tel:+1234567890"
                        className="text-primary hover:underline"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Creative Street
                        <br />
                        Design District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Visit Our Studio</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620751714782!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What services do you offer?",
                  answer:
                    "We offer a range of services including web design, development, branding, UI/UX design, and digital strategy. Our team can help with everything from concept to execution.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive brand identity and digital platform could take 3-4 months.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We provide custom quotes based on project requirements. We work with clients of various sizes and can adapt our approach to suit different budgets and needs.",
                },
                {
                  question: "Do you work with clients remotely?",
                  answer:
                    "Yes, we work with clients globally. Our collaborative process is designed to be effective regardless of location, using tools like Zoom, Slack, and Figma.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-muted/30 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
                Let's create something amazing together.
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
                  <a href="#top">
                    Get in touch now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
