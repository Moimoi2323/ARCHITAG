'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

export default function ProjectsPage() {
  // Image aspect ratio state
  const [imageAspectRatios, setImageAspectRatios] = useState<Record<number, 'portrait' | 'landscape'>>({})

  // Architecture categories
  const categories = ["All", "Interiors", "Construction", "Landscape", "Urban Planning", "Residential"]

  // Project data
  const projects = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: i === 0 ? "VDB Cardinall" : 
           i === 1 ? "Law office" : 
           i === 2 ? "B3 Villa" :
           i === 3 ? "Aleesha's boutique" :
           `Project ${i + 1}`,
    category: "Interiors",
    image: i === 0 ? `/VDB Cardinal/1_3 - Photo.jpg` : 
           i === 1 ? `/Law office/IMG_5781.JPG` : 
           i === 2 ? `/B3 villa/20230502_145803(0)_Original.jpg` :
           i === 3 ? `/Aleesha's boutique/IMG_5759.JPG` :
           i === 4 ? `/Law office/IMG_5776.JPG` :
           i === 5 ? `/B3 villa/20230502_145101_Original.jpg` :
           i === 6 ? `/Aleesha's boutique/IMG_5757.JPG` :
           i === 7 ? `/VDB Cardinal/5.jpg` :
           `/placeholder.svg?height=600&width=800&text=Project ${i + 1}`,
  }))

  // State for loading images
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>({});

  // Initialize loading state for all images
  useEffect(() => {
    const initialLoadingState: Record<number, boolean> = {};
    projects.forEach((_, index) => {
      initialLoadingState[index] = true;
    });
    setLoadingImages(initialLoadingState);
    
    // Force reset loading state after a short delay
    const timer = setTimeout(() => {
      const resetState: Record<number, boolean> = {};
      projects.forEach((_, index) => {
        resetState[index] = false;
      });
      setLoadingImages(resetState);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

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

  // Check image aspect ratios on mount
  useEffect(() => {
    projects.forEach((project, index) => {
      checkImageAspectRatio(project.image, index);
    });
  }, []);

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
              {projects.map((project, i) => (
                <div key={project.id} className="group relative overflow-hidden">
                  <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {project.title}</span>
                  </Link>
                  <div className={cn(
                    "relative overflow-hidden rounded-[3mm]",
                    imageAspectRatios[i] === 'portrait' ? "aspect-[3/4]" : "aspect-[4/3]",
                    "transition-all duration-300"
                  )}>
                    {loadingImages[i] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                        <div className="w-8 h-8 border-3 border-[#2a2a2a]/20 border-t-[#2a2a2a] rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={fixImagePath(project.image)}
                      fill
                      alt={project.title}
                      className={cn(
                        "object-cover transition-all duration-500 group-hover:scale-105",
                        loadingImages[i] ? "opacity-40" : "opacity-100"
                      )}
                      onLoadingComplete={() => {
                        setLoadingImages(prev => ({...prev, [i]: false}));
                      }}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        const isPortrait = img.naturalHeight > img.naturalWidth;
                        setImageAspectRatios(prev => ({
                          ...prev,
                          [i]: isPortrait ? 'portrait' : 'landscape'
                        }));
                        // Ensure loading state is removed when image loads
                        setLoadingImages(prev => ({...prev, [i]: false}));
                      }}
                      onError={() => {
                        setLoadingImages(prev => ({...prev, [i]: false}));
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-[#f8f7f4]/80 text-sm">{project.category}</p>
                      <h3 className="text-xl font-light text-[#f8f7f4]">{project.title}</h3>
                    </div>
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

