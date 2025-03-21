"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, Info, MapPin, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Parse the id parameter once
  const projectId = parseInt(params.id)
  
  const [currentImage, setCurrentImage] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [imageAspectRatios, setImageAspectRatios] = useState<Record<number, 'portrait' | 'landscape'>>({})
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  // Fix image path if needed
  const fixImagePath = (path: string): string => {
    if (!path) return '/placeholder.svg?height=600&width=800';
    
    // Special case for VDB Cardinal images
    if (path.includes('VDB Cardinal')) {
      // Replace spaces with %20
      let fixedPath = path.replace('VDB Cardinal', 'VDB%20Cardinal');
      
      // Replace hyphens in filenames
      if (fixedPath.includes(' - ')) {
        fixedPath = fixedPath.replace(' - ', '%20-%20');
      }
      
      return fixedPath;
    }
    
    if (path && path.includes(' - ')) {
      return path.replace(' - ', '%20-%20');
    }
    
    return path;
  };
  
  // Function to check image aspect ratio
  const checkImageAspectRatio = (src: string, index: number) => {
    if (typeof window !== 'undefined') {
      const img = new window.Image();
      img.onload = () => {
        const isPortrait = img.height > img.width;
        setImageAspectRatios(prev => ({
          ...prev,
          [index]: isPortrait ? 'portrait' : 'landscape'
        }));
      };
      img.src = fixImagePath(src);
    }
  };
  
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

  // Project data
  let title = `Project ${params.id}`
  let location = "Bangalore, India"
  let client = "Mr. Harsha"
  let description = "This project explores the relationship between space, light, and materiality. The design responds to the site's context while creating a unique spatial experience that meets the client's functional requirements."
  let images = Array.from({ length: 6 }, (_, i) => ({
    src: `/placeholder.svg?height=800&width=1200&text=Project ${params.id} Image ${i + 1}`,
    alt: `Project ${params.id} Image ${i + 1}`,
  }))
  
  // VDB Cardinall (1)
  if (projectId === 1) {
    title = "VDB Cardinall"
    location = "Indiranagar, Bangalore"
    client = "Residential Client"
    images = [
      {
        src: "/VDB Cardinal/1_3 - Photo.jpg",
        alt: "VDB Cardinall - Main View",
      },
      {
        src: "/VDB Cardinal/1_6 - Photo.jpg",
        alt: "VDB Cardinall - Interior View",
      },
      {
        src: "/VDB Cardinal/1_9 - Photo.jpg",
        alt: "VDB Cardinall - Detail View",
      },
      {
        src: "/VDB Cardinal/3.jpg",
        alt: "VDB Cardinall - Exterior",
      },
      {
        src: "/VDB Cardinal/5.jpg",
        alt: "VDB Cardinall - Perspective",
      },
      {
        src: "/VDB Cardinal/13.jpg",
        alt: "VDB Cardinall - Layout",
      }
    ]
    description = "VDB Cardinal Terrace Renovation: A Verdant Urban Escape in Bangalore. This project transforms a conventional rooftop into a luxurious and multi-functional urban sanctuary."
  }
  
  // Law Office (2)
  else if (projectId === 2) {
    title = "Law office"
    location = "Bangalore, India"
    client = "Mr. Harsha"
    images = [
      {
        src: "/Law office/IMG_5781.JPG",
        alt: "Law office - Main View",
      },
      {
        src: "/Law office/IMG_5780.JPG",
        alt: "Law office - Interior View",
      },
      {
        src: "/Law office/IMG_5779.JPG",
        alt: "Law office - Detail View",
      },
      {
        src: "/Law office/IMG_5778.JPG",
        alt: "Law office - Workspace",
      },
      {
        src: "/Law office/IMG_5776.JPG",
        alt: "Law office - Reception",
      },
      {
        src: "/Law office/IMG_5774.JPG",
        alt: "Law office - Conference Room",
      }
    ]
    description = "Modern Law Office: Sleek Professional Space in Bangalore. This contemporary law office design balances professionalism with comfort."
  }
  
  // B3 Villa (3)
  else if (projectId === 3) {
    title = "B3 Villa"
    location = "Bangalore, India"
    client = "Mr. Harsha"
    images = [
      {
        src: "/B3 villa/20230502_145803(0)_Original.jpg",
        alt: "B3 Villa - Exterior View",
      },
      {
        src: "/B3 villa/20230502_145654_Original.jpg",
        alt: "B3 Villa - Living Room",
      },
      {
        src: "/B3 villa/20230502_145500_Original.jpg",
        alt: "B3 Villa - Kitchen",
      },
      {
        src: "/B3 villa/20230502_145101_Original.jpg",
        alt: "B3 Villa - Bedroom",
      },
      {
        src: "/B3 villa/20230502_144905_Original.jpg",
        alt: "B3 Villa - Bathroom",
      },
      {
        src: "/B3 villa/20221030_122651_Original.jpg",
        alt: "B3 Villa - Garden",
      }
    ]
    description = "B3 Villa: Contemporary Living in Harmony with Nature. The residence embodies a philosophy of seamless indoor-outdoor living."
  }
  
  // Aleesha's boutique (4)
  else if (projectId === 4) {
    title = "Aleesha's boutique"
    location = "Bangalore, India"
    client = "Aleesha"
    images = [
      {
        src: "/Aleesha's boutique/IMG_5759.JPG",
        alt: "Aleesha's boutique - Storefront",
      },
      {
        src: "/Aleesha's boutique/IMG_5758.JPG",
        alt: "Aleesha's boutique - Interior",
      },
      {
        src: "/Aleesha's boutique/IMG_5757.JPG",
        alt: "Aleesha's boutique - Display Area",
      },
      {
        src: "/Aleesha's boutique/IMG_5756.JPG",
        alt: "Aleesha's boutique - Clothing Section",
      },
      {
        src: "/Aleesha's boutique/IMG_5755.JPG",
        alt: "Aleesha's boutique - Fitting Room",
      },
      {
        src: "/Aleesha's boutique/IMG_5754.JPG",
        alt: "Aleesha's boutique - Checkout",
      }
    ]
    description = "Aleesha's Boutique: Elegant Retail Experience in Bangalore. Designed as a sophisticated retail space that showcases high-end fashion in an immersive environment."
  }

  // Check image aspect ratios on mount
  useEffect(() => {
    setIsLoading(true);
    images.forEach((image, index) => {
      checkImageAspectRatio(image.src, index);
    });
    
    // Set a shorter timeout to hide loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const goToNextImage = () => {
    const next = (currentImage + 1) % images.length
    changeImage(next, 1)
  }

  const goToPrevImage = () => {
    const prev = (currentImage - 1 + images.length) % images.length
    changeImage(prev, -1)
  }

  // Calculate previous and next project IDs
  const totalProjects = 12
  const prevProjectId = projectId - 1 > 0 ? projectId - 1 : totalProjects
  const nextProjectId = projectId + 1 <= totalProjects ? projectId + 1 : 1

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
              <h1 className="text-3xl font-light tracking-tight text-[#2a2a2a] sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <div className="flex flex-wrap gap-4 text-[#2a2a2a]/70">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{client}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-[#2a2a2a]/20 px-2.5 py-0.5 text-xs font-light text-[#2a2a2a]">
                  Interiors
                </span>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mb-12">
              {/* Main image */}
              <div className={cn(
                "relative w-full overflow-hidden rounded-[3mm] mb-4 transition-all duration-500",
                imageAspectRatios[currentImage] === 'portrait' ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[4/3] md:aspect-[16/9]",
                isLoading ? "animate-pulse bg-gray-200" : ""
              )}>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <div className="w-10 h-10 border-4 border-[#2a2a2a]/20 border-t-[#2a2a2a] rounded-full animate-spin"></div>
                  </div>
                )}
                {images[currentImage] && (
                  <Image
                    src={fixImagePath(images[currentImage].src)}
                    alt={images[currentImage].alt}
                    fill
                    priority
                    className="object-cover transition-opacity duration-700"
                    onLoadingComplete={() => {
                      setIsLoading(false);
                    }}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      setImageAspectRatios(prev => ({
                        ...prev,
                        [currentImage]: img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape'
                      }));
                      // Ensure loading state is removed when image loads
                      setIsLoading(false);
                    }}
                    onError={() => {
                      console.error("Failed to load image:", images[currentImage].src);
                      setIsLoading(false);
                    }}
                  />
                )}
                
                {/* Navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevImage}
                    className="h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
                  >
                    <ArrowLeft className="h-6 w-6" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNextImage}
                    className="h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
                  >
                    <ArrowLeft className="h-6 w-6 rotate-180" />
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2 sm:gap-4">
                {images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsLoading(true);
                      changeImage(i, 0);
                    }}
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-md transition-all",
                      currentImage === i 
                        ? "ring-2 ring-[#2a2a2a] ring-offset-2" 
                        : "hover:opacity-80"
                    )}
                  >
                    <Image
                      src={fixImagePath(image.src)}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-light tracking-tight text-[#2a2a2a] mb-4">About the Project</h2>
                <p className="text-[#2a2a2a]/70 leading-relaxed">{description}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-light tracking-tight text-[#2a2a2a] mb-2">Project Details</h3>
                  <ul className="space-y-2 text-[#2a2a2a]/70">
                    <li className="flex justify-between">
                      <span>Category</span>
                      <span className="text-[#2a2a2a]">Interiors</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Client</span>
                      <span className="text-[#2a2a2a]">{client}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Location</span>
                      <span className="text-[#2a2a2a]">{location}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Year</span>
                      <span className="text-[#2a2a2a]">2023</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-light tracking-tight text-[#2a2a2a] mb-2">Share</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full border-[#2a2a2a]/20"
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full border-[#2a2a2a]/20"
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full border-[#2a2a2a]/20"
                    >
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
                        className="h-4 w-4"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full border-[#2a2a2a]/20"
                    >
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
                        className="h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related projects */}
            <div className="mt-16">
              <h2 className="text-2xl font-light tracking-tight text-[#2a2a2a] mb-8">More Projects</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4].filter(relatedId => relatedId !== projectId).slice(0, 2).map((relatedId) => (
                  <Link key={relatedId} href={`/projects/${relatedId}`} className="group">
                    <div className="relative overflow-hidden rounded-[3mm] mb-3">
                      <Image
                        src={fixImagePath(
                          relatedId === 1 ? "/VDB Cardinal/1_3 - Photo.jpg" : 
                          relatedId === 2 ? "/Law office/IMG_5781.JPG" : 
                          relatedId === 3 ? "/B3 villa/20230502_145803(0)_Original.jpg" :
                          relatedId === 4 ? "/Aleesha's boutique/IMG_5759.JPG" :
                          "/placeholder.svg?height=600&width=800"
                        )}
                        width={600}
                        height={400}
                        alt={`Related Project ${relatedId}`}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-light text-[#2a2a2a] group-hover:text-[#2a2a2a]/70 transition-colors">
                      {relatedId === 1 ? "VDB Cardinall" : 
                       relatedId === 2 ? "Law office" : 
                       relatedId === 3 ? "B3 Villa" :
                       relatedId === 4 ? "Aleesha's boutique" :
                       `Project ${relatedId}`}
                    </h3>
                    <p className="text-[#2a2a2a]/70 text-sm">Interiors</p>
                  </Link>
                ))}
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