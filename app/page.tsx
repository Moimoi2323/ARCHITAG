import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectPreview from "./components/ProjectPreview"

export default function Home() {
  // Architecture categories
  const categories = ["All", "Interiors", "Construction", "Landscape", "Urban Planning", "Residential"]

  // Project data
  const projects = [
    {
      id: 1,
      title: "VDB Cardinall",
      category: "Residential",
      image: "/1_3 - Photo.jpg",
    },
    {
      id: 2,
      title: "Law office",
      category: "Construction",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "John's Studio",
      category: "Landscape",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Downtown Revitalization",
      category: "Urban Planning",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Luxury Apartment",
      category: "Interiors",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Modern Office Interior",
      category: "Interiors",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Sustainable Housing",
      category: "Residential",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Public Square",
      category: "Urban Planning",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      <header className="sticky top-0 z-50 w-full border-b border-[#2a2a2a]/10 bg-[#f8f7f4]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f7f4]/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-light tracking-tight text-[#2a2a2a]">ARCHITAG</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#projects"
              className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]"
            >
              Projects
            </Link>
            <Link href="#about" className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]">
              About
            </Link>
            <Link
              href="#approach"
              className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]"
            >
              Approach
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]"
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f8f7f4]"
          >
            Get in Touch
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden text-[#2a2a2a]">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Architecture that inspires
                  </h1>
                  <p className="max-w-[600px] text-[#2a2a2a]/70 md:text-xl">
                    We create thoughtful, sustainable spaces that enhance the way people live, work, and interact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button size="lg" className="gap-1 bg-[#2a2a2a] text-[#f8f7f4] hover:bg-[#2a2a2a]/90">
                      View Projects
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f8f7f4]"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/Screenshot 2025-03-21 012109.png"
                  width={750}
                  height={550}
                  alt="Inspiring architecture showcase"
                  className="w-full h-auto object-cover overflow-hidden rounded-[30px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-[#e9e6e0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl">
                  Our Projects
                </h2>
                <p className="max-w-[900px] text-[#2a2a2a]/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of our most innovative and impactful architectural designs.
                </p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="border-[#2a2a2a]/20 text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f8f7f4] rounded-full px-4"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="group">
                  <div className="relative overflow-hidden rounded-[3mm]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={600}
                      height={800}
                      alt={project.title}
                      className="h-[400px] w-full object-cover transition-all duration-500 group-hover:scale-105 rounded-[3mm]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-[#f8f7f4] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {project.title === "VDB Cardinall" ? (
                        <ProjectPreview
                          trigger={
                            <h3 className="text-xl font-light flex items-center">
                              {project.title}
                              <Info size={16} className="ml-2 text-[#f8f7f4]/70" />
                            </h3>
                          }
                          position="top"
                          className="z-50"
                        />
                      ) : (
                        <h3 className="text-xl font-light">{project.title}</h3>
                      )}
                      <p className="text-sm text-[#f8f7f4]/80">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-1 border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f8f7f4]"
                >
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={600}
                  height={800}
                  alt="About Us"
                  className="aspect-[4/3] overflow-hidden rounded-none object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl">
                    About Our Practice
                  </h2>
                  <p className="max-w-[600px] text-[#2a2a2a]/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Founded in 2010, our architecture practice is dedicated to creating spaces that are both beautiful
                    and functional. We believe that good design can transform lives and communities.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-1 w-1 rounded-full bg-[#2a2a2a]"></div>
                    <span className="text-[#2a2a2a]/80">Award-winning designs recognized internationally</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-1 w-1 rounded-full bg-[#2a2a2a]"></div>
                    <span className="text-[#2a2a2a]/80">Sustainable approach to every project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-1 w-1 rounded-full bg-[#2a2a2a]"></div>
                    <span className="text-[#2a2a2a]/80">Collaborative process with clients and stakeholders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-1 w-1 rounded-full bg-[#2a2a2a]"></div>
                    <span className="text-[#2a2a2a]/80">
                      Expertise across residential, commercial, and public sectors
                    </span>
                  </li>
                </ul>
                <div>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-1 border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f8f7f4]"
                    >
                      Learn More About Us
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-[#e9e6e0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl">
                  Our Approach
                </h2>
                <p className="max-w-[900px] text-[#2a2a2a]/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We follow a thoughtful process that ensures every project meets our high standards of design
                  excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a2a2a] text-[#f8f7f4]">
                  <span className="text-xl font-light">1</span>
                </div>
                <h3 className="text-xl font-light text-[#2a2a2a]">Discovery</h3>
                <p className="text-[#2a2a2a]/70">
                  We begin by understanding your vision, needs, and the context of your project.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a2a2a] text-[#f8f7f4]">
                  <span className="text-xl font-light">2</span>
                </div>
                <h3 className="text-xl font-light text-[#2a2a2a]">Design</h3>
                <p className="text-[#2a2a2a]/70">
                  Our team develops innovative concepts that balance aesthetics, functionality, and sustainability.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a2a2a] text-[#f8f7f4]">
                  <span className="text-xl font-light">3</span>
                </div>
                <h3 className="text-xl font-light text-[#2a2a2a]">Delivery</h3>
                <p className="text-[#2a2a2a]/70">
                  We manage the entire process from planning approvals to construction completion.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="max-w-[600px] text-[#2a2a2a]/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We'd love to hear about your project. Contact us to schedule a consultation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#2a2a2a]" />
                    <span className="text-[#2a2a2a]/80">123 Architecture Street, Design District, London</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#2a2a2a]" />
                    <span className="text-[#2a2a2a]/80">+44 (0) 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#2a2a2a]" />
                    <span className="text-[#2a2a2a]/80">info@architag.co.uk</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-[#2a2a2a] text-[#f8f7f4] hover:bg-[#2a2a2a]/90">
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <form className="w-full max-w-md space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-light leading-none text-[#2a2a2a]">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-none border border-[#2a2a2a]/20 bg-transparent px-3 py-2 text-sm text-[#2a2a2a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2a2a2a]"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-light leading-none text-[#2a2a2a]">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-none border border-[#2a2a2a]/20 bg-transparent px-3 py-2 text-sm text-[#2a2a2a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2a2a2a]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-light leading-none text-[#2a2a2a]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-none border border-[#2a2a2a]/20 bg-transparent px-3 py-2 text-sm text-[#2a2a2a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2a2a2a]"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-light leading-none text-[#2a2a2a]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-none border border-[#2a2a2a]/20 bg-transparent px-3 py-2 text-sm text-[#2a2a2a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2a2a2a]"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#2a2a2a] text-[#f8f7f4] hover:bg-[#2a2a2a]/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-[#2a2a2a]/10 py-6 md:py-0 bg-[#f8f7f4]">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-[#2a2a2a]/60 md:text-left">
            © 2024 ARCHITAG. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

