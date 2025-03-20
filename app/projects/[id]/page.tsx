"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ProjectPreview from "../../components/ProjectPreview"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  
  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Function to change images with transition
  const changeImage = (index: number, dir: number) => {
    if (transitioning) return;
    setTransitioning(true)
    setDirection(dir) // -1 for left, 1 for right
    setPreviousImageIndex(currentImage)
    
    // Change the image immediately but animate the transition
    setCurrentImage(index)
    
    // Reset transitioning after animation completes
    setTimeout(() => {
      setTransitioning(false)
    }, 500)
  }

  // Mock project data - replace with your actual data
  const project = {
    id: params.id,
    title: Number.parseInt(params.id) === 1 ? "VDB Cardinall" : 
           Number.parseInt(params.id) === 2 ? "Law office" : 
           `Project ${params.id}`,
    location: Number.parseInt(params.id) === 1 ? "Indiranagar, Bangalore" : "London, UK",
    year: "2023",
    category:
      Number.parseInt(params.id) === 1
        ? "Design Proposal"
        : Number.parseInt(params.id) % 5 === 0
        ? "Interiors"
        : Number.parseInt(params.id) % 5 === 1
          ? "Construction"
          : Number.parseInt(params.id) % 5 === 2
            ? "Landscape"
            : Number.parseInt(params.id) % 5 === 3
              ? "Urban Planning"
              : "Residential",
    client: Number.parseInt(params.id) === 1 ? "Residential Client" : "Client Name",
    description:
      Number.parseInt(params.id) === 1 
      ? (
        <div className="space-y-8">
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-xl font-light tracking-tight text-[#2a2a2a] mb-2">VDB Cardinal Terrace Renovation: A Verdant Urban Escape in Bangalore</h3>
            <div className="flex flex-col md:flex-row md:gap-8 text-sm text-[#2a2a2a]/80">
              <p><strong>Location:</strong> 501 VDB Cardinal, Indiranagar, Bangalore</p>
              <p><strong>Architect:</strong> Tanmai Gowda</p>
            </div>
          </div>
          
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">INTRODUCTION</h3>
            <p className="text-[#2a2a2a]/80">
              Perched atop a high-rise in Bangalore's Indiranagar, VDB Cardinal Terrace Renovation transforms a conventional rooftop into a luxurious and multi-functional urban sanctuary. Designed by architect Tanmai Gowda, the project blends contemporary design principles with biophilic elements, creating a seamless indoor-outdoor living experience. The renovation introduces a thoughtful zoning strategy, balancing private, semi-private, and public areas, making it an idyllic retreat for relaxation and entertainment.
            </p>
          </div>
          
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">CONCEPT AND DESIGN PHILOSOPHY</h3>
            <p className="text-[#2a2a2a]/80">
              The renovation embraces fluid spatial flow and organic transitions, achieved through a combination of zoning, material interplay, and landscaping. The design prioritizes connectivity with nature, evident in the use of planters, trellises with creepers, and an experiential pathway lined with vibrant Bougainvillea.
            </p>
            <p className="text-[#2a2a2a]/80 mt-4">
              A zen garden, with its open-to-sky feature, serves as a serene transitional zone. This thoughtful landscaping links the more private jacuzzi area with the semi-private lounge and the public-facing formal dining and outdoor kitchen, ensuring a smooth circulation of movement.
            </p>
          </div>
          
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">KEY DESIGN FEATURES</h3>
            
            <div className="mt-4">
              <h4 className="font-medium text-[#2a2a2a] mb-1">1. Experiential Pathway and Zen Garden</h4>
              <p className="text-[#2a2a2a]/80">
                The project introduces an immersive garden walkway enveloped by Bougainvillea planters, leading to the jacuzzi. This experiential journey creates a sensory connection with nature. The zen garden offers a tranquil escape, featuring planters, a walking path, and a sliding folding partition that allows flexibility in privacy.
              </p>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-[#2a2a2a] mb-1">2. Jacuzzi and Shower Washroom</h4>
              <p className="text-[#2a2a2a]/80">
                The jacuzzi area is intentionally secluded, creating a spa-like retreat. A shower washroom with dual entrances enhances convenience—one from the main study room and the other directly from the balcony, providing easy access post-jacuzzi use.
              </p>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-[#2a2a2a] mb-1">3. Formal Dining and Outdoor Kitchen</h4>
              <p className="text-[#2a2a2a]/80">
                Transitioning from the garden, the formal dining area is positioned near the outdoor kitchen and bar, fostering a fluid entertainment space. Planter boxes along one side form a verdant backdrop, while the cityscape remains in view. The roof design incorporates steel I-sections with polycarbonate or glass sheeting, creating a pergola-like effect with creeping greenery.
              </p>
              <p className="text-[#2a2a2a]/80 mt-2">
                The outdoor kitchen is fitted with a pizza oven, BBQ grill, and bar counter, catering to both intimate and large-scale gatherings. A hidden flush door conceals the powder room, offering a sleek and seamless aesthetic.
              </p>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-[#2a2a2a] mb-1">4. Informal Lounge and Screening Zone</h4>
              <p className="text-[#2a2a2a]/80">
                Designed for relaxation, the informal lounge features built-in seating with planters and rain blinds for shade. The screening wall accommodates projectors, making the area a hybrid of a casual seating nook and an open-air cinema.
              </p>
            </div>
          </div>
          
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">MATERIALITY AND TEXTURE</h3>
            <p className="text-[#2a2a2a]/80">
              The renovation employs a palette of raw and refined materials, creating a contemporary yet inviting ambiance:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#2a2a2a]/80">
              <li>Metal and glass roofing: The pergola-style roof structure uses MS steel I-sections paired with polycarbonate or glass panels, offering protection while allowing light to filter through.</li>
              <li>Trellises with creepers: These create a lush, shaded ambiance, softening the steel framework with organic greenery.</li>
              <li>Natural stone and wooden finishes: The garden and dining areas feature natural stone flooring and wooden decking, lending warmth and texture to the space.</li>
              <li>Glass partitions: Sliding and folding glass doors maximize the visual connection between indoor and outdoor spaces, enhancing the sense of openness.</li>
            </ul>
          </div>
          
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">SPATIAL FLOW AND FUNCTIONALITY</h3>
            <p className="text-[#2a2a2a]/80">
              The design's zoning strategy defines clear boundaries between public, semi-private, and private spaces:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#2a2a2a]/80">
              <li>Public Zone: Formal dining, outdoor kitchen, and bar counter.</li>
              <li>Semi-private Zone: Lounge with projector screening.</li>
              <li>Private Zone: Jacuzzi, shower washroom, and study room.</li>
            </ul>
            <p className="text-[#2a2a2a]/80 mt-2">
              This structured flow ensures privacy without creating a sense of isolation, promoting a holistic and interactive environment.
            </p>
          </div>
          
          <div className="bg-white/50 p-6 rounded-[3mm] shadow-sm">
            <h3 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">OVERALL IMPACT</h3>
            <p className="text-[#2a2a2a]/80">
              VDB Cardinal Terrace Renovation exemplifies the harmonious coexistence of architecture and nature in an urban context. The project balances luxury with practicality, offering a flexible space for entertainment, relaxation, and solitude. With its layered landscaping, seamless transitions, and thoughtful material selection, the terrace becomes a bespoke urban sanctuary, a testament to contemporary rooftop living.
            </p>
          </div>
        </div>
      )
      : "This project explores the relationship between space, light, and materiality. The design responds to the site's context while creating a unique spatial experience that meets the client's functional requirements.",
    images: Number.parseInt(params.id) === 1 
      ? [
          {
            src: `/1_3 - Photo.jpg`,
            alt: `VDB Cardinall - Main View`,
          },
          {
            src: `/1_6 - Photo.jpg`,
            alt: `VDB Cardinall - Interior View`,
          },
          {
            src: `/1_9 - Photo.jpg`,
            alt: `VDB Cardinall - Detail View`,
          },
          {
            src: `/3.jpg`,
            alt: `VDB Cardinall - Exterior`,
          },
          {
            src: `/5.jpg`,
            alt: `VDB Cardinall - Perspective`,
          },
          {
            src: `/13.jpg`,
            alt: `VDB Cardinall - Layout`,
          },
          {
            src: `/16.jpg`,
            alt: `VDB Cardinall - Concept`,
          },
          {
            src: `/88888888888.jpg`,
            alt: `VDB Cardinall - Full View`,
          }
        ]
      : Array.from({ length: 6 }, (_, i) => ({
      src: `/placeholder.svg?height=800&width=1200&text=Project ${params.id} Image ${i + 1}`,
      alt: `Project ${params.id} Image ${i + 1}`,
    })),
  }

  const goToNextImage = () => {
    const next = (currentImage + 1) % project.images.length
    changeImage(next, 1)
  }

  const goToPrevImage = () => {
    const prev = (currentImage - 1 + project.images.length) % project.images.length
    changeImage(prev, -1)
  }

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
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 mb-8">
              <Link href="/projects">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-[#2a2a2a] hover:text-[#2a2a2a]/70 hover:bg-transparent p-0"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="font-light">Back to Projects</span>
                </Button>
              </Link>
            </div>

            {/* Carousel */}
            <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden">
              {/* Previous image layer that slides out */}
              {transitioning && (
                <div 
                  className={cn(
                    "absolute inset-0 overflow-hidden rounded-[3mm] z-10",
                    direction > 0 ? 'animate-slide-left' : 'animate-slide-right'
                  )}
                >
                  <Image
                    src={project.images[previousImageIndex].src || "/placeholder.svg"}
                    alt={project.images[previousImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              {/* Current image layer that slides in */}
              <div 
                className={cn(
                  "absolute inset-0 overflow-hidden rounded-[3mm] z-20",
                  transitioning 
                    ? direction > 0 
                      ? 'animate-slide-in-left' 
                      : 'animate-slide-in-right'
                    : ''
                )}
              >
                <Image
                  src={project.images[currentImage].src || "/placeholder.svg"}
                  alt={project.images[currentImage].alt}
                  fill
                  className="object-cover"
                />
              </div>

              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#f8f7f4]/80 hover:bg-[#f8f7f4] p-2 rounded-full z-30 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Previous image"
                disabled={transitioning}
              >
                <ChevronLeft className="h-6 w-6 text-[#2a2a2a]" />
              </button>

              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#f8f7f4]/80 hover:bg-[#f8f7f4] p-2 rounded-full z-30 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Next image"
                disabled={transitioning}
              >
                <ChevronRight className="h-6 w-6 text-[#2a2a2a]" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index === currentImage || transitioning) return;
                      changeImage(index, index > currentImage ? 1 : -1);
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      currentImage === index ? "bg-[#2a2a2a]" : "bg-[#2a2a2a]/30",
                      transitioning ? "cursor-not-allowed" : "cursor-pointer"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2 mb-8">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index === currentImage || transitioning) return;
                    changeImage(index, index > currentImage ? 1 : -1);
                  }}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-[3mm]",
                    currentImage === index ? "ring-2 ring-[#2a2a2a]" : "",
                    transitioning ? "cursor-not-allowed" : "cursor-pointer"
                  )}
                >
                  <Image 
                    src={image.src || "/placeholder.svg"} 
                    alt={image.alt} 
                    fill 
                    className="object-cover" 
                  />
                </button>
              ))}
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-12">
              <div>
                <h1 className="text-3xl font-light tracking-tight text-[#2a2a2a] mb-6">
                  {project.title === "VDB Cardinall" ? (
                    <ProjectPreview
                      trigger={
                        <span className="border-b border-dashed border-[#2a2a2a]/50 hover:border-[#2a2a2a] inline-flex items-center">
                          VDB Cardinall
                          <Info size={16} className="ml-1 text-[#2a2a2a]/70" />
                        </span>
                      }
                      position="bottom"
                    />
                  ) : (
                    project.title
                  )}
                </h1>
                {typeof project.description === 'string' ? (
                <p className="text-[#2a2a2a]/80 mb-6 max-w-prose">{project.description}</p>
                ) : (
                  project.description
                )}
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">Project Details</h2>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-[#2a2a2a]/80">Category</dt>
                      <dd className="text-[#2a2a2a]">{project.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#2a2a2a]/80">Location</dt>
                      <dd className="text-[#2a2a2a]">{project.location}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#2a2a2a]/80">Year</dt>
                      <dd className="text-[#2a2a2a]">{project.year}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[#2a2a2a]/80">Client</dt>
                      <dd className="text-[#2a2a2a]">{project.client}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h2 className="text-sm uppercase tracking-wider text-[#2a2a2a]/60 mb-2">Share</h2>
                  <div className="flex gap-4">
                    <button className="text-[#2a2a2a] hover:text-[#2a2a2a]/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Share on Facebook</span>
                    </button>
                    <button className="text-[#2a2a2a] hover:text-[#2a2a2a]/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Share on Twitter</span>
                    </button>
                    <button className="text-[#2a2a2a] hover:text-[#2a2a2a]/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Share on Instagram</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Next/Previous Project Navigation */}
            <div className="flex justify-between mt-16 pt-8 border-t border-[#2a2a2a]/10">
              <Link
                href={`/projects/${Number.parseInt(params.id) - 1 > 0 ? Number.parseInt(params.id) - 1 : project.images.length}`}
              >
                <Button
                  variant="ghost"
                  className="gap-2 text-[#2a2a2a] hover:text-[#2a2a2a]/70 hover:bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="font-light">Previous Project</span>
                </Button>
              </Link>
              <Link
                href={`/projects/${Number.parseInt(params.id) + 1 <= project.images.length ? Number.parseInt(params.id) + 1 : 1}`}
              >
                <Button
                  variant="ghost"
                  className="gap-2 text-[#2a2a2a] hover:text-[#2a2a2a]/70 hover:bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <span className="font-light">Next Project</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
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

