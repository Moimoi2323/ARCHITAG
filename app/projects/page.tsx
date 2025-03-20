import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  // Architecture categories
  const categories = ["All", "Interiors", "Construction", "Landscape", "Urban Planning", "Residential"]

  // Project data
  const projects = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: i === 0 ? "VDB Cardinall" : 
           i === 1 ? "Law office" : 
           `Project ${i + 1}`,
    category:
      i % 5 === 0
        ? "Interiors"
        : i % 5 === 1
          ? "Construction"
          : i % 5 === 2
            ? "Landscape"
            : i % 5 === 3
              ? "Urban Planning"
              : "Residential",
    image: i === 0 ? `/1_3 - Photo.jpg` : 
           i === 1 ? `/placeholder.svg?height=600&width=800&text=Law office` : 
           `/placeholder.svg?height=600&width=800&text=Project ${i + 1}`,
  }))

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      <header className="sticky top-0 z-50 w-full border-b border-[#2a2a2a]/10 bg-[#f8f7f4]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f7f4]/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-light tracking-tight text-[#2a2a2a]">ARCHITAG</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/#projects"
              className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]"
            >
              About
            </Link>
            <Link
              href="/#approach"
              className="text-sm font-light transition-colors hover:text-[#2a2a2a]/70 text-[#2a2a2a]"
            >
              Approach
            </Link>
            <Link
              href="/#contact"
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
            <div className="flex flex-col items-start gap-4 mb-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-[#2a2a2a] hover:text-[#2a2a2a]/70 hover:bg-transparent p-0"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="font-light">Back to Home</span>
                </Button>
              </Link>
              <h1 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl">
                Our Projects
              </h1>
              <p className="max-w-[700px] text-[#2a2a2a]/70 md:text-xl">
                Explore our complete portfolio of architectural projects across various categories.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12">
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

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden">
                  <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {project.title}</span>
                  </Link>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={600}
                    height={800}
                    alt={project.title}
                    className="h-[400px] w-full object-cover transition-all duration-500 group-hover:scale-105 rounded-[3mm]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[#f8f7f4]/80 text-sm">{project.category}</p>
                    <h3 className="text-xl font-light text-[#f8f7f4]">{project.title}</h3>
                  </div>
                </div>
              ))}
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

