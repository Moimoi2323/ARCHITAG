"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectPreviewProps {
  trigger: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
  project?: {
    id: number
    title: string
    category: string
    location?: string
    year?: string
    description?: string
    image: string
    additionalImages?: string[]
  }
}

export default function ProjectPreview({
  trigger,
  position = "bottom",
  className = "",
  project = {
    id: 1,
    title: "VDB Cardinall",
    category: "Interiors",
    location: "Bangalore",
    year: "2023",
    description: "A luxury terrace renovation that transforms a conventional rooftop into a multi-functional urban sanctuary featuring experiential pathways, zen garden, and seamless indoor-outdoor spaces.",
    image: "/VDB Cardinal/1_3 - Photo.jpg",
    additionalImages: ["/VDB Cardinal/1_6 - Photo.jpg", "/VDB Cardinal/1_9 - Photo.jpg", "/VDB Cardinal/3.jpg"]
  }
}: ProjectPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  const [imageAspectRatio, setImageAspectRatio] = useState<'portrait' | 'landscape'>('landscape')
  const [additionalImageAspectRatios, setAdditionalImageAspectRatios] = useState<Record<number, 'portrait' | 'landscape'>>({})
  const [imageError, setImageError] = useState(false)
  
  // Check image aspect ratio
  useEffect(() => {
    if (typeof window !== 'undefined' && project.image) {
      const img = new window.Image();
      img.onload = () => {
        setImageAspectRatio(img.height > img.width ? 'portrait' : 'landscape');
        setImageError(false);
      };
      img.onerror = () => {
        setImageError(true);
      };
      img.src = fixImagePath(project.image);
      
      // Check additional images
      project.additionalImages?.forEach((src, index) => {
        const additionalImg = new window.Image();
        additionalImg.onload = () => {
          setAdditionalImageAspectRatios(prev => ({
            ...prev,
            [index]: additionalImg.height > additionalImg.width ? 'portrait' : 'landscape'
          }));
        };
        additionalImg.src = fixImagePath(src);
      });
      
      // Force reset error state after a delay
      const timer = setTimeout(() => {
        setImageError(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [project.image, project.additionalImages]);
  
  // Handle outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (previewRef.current && !previewRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
    
    return path;
  };

  // Position classes
  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2"
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Trigger element */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      
      {/* Preview popup */}
      <div
        ref={previewRef}
        className={`absolute z-50 ${positionClasses[position]} w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen 
            ? "opacity-100 transform translate-y-0 scale-100" 
            : "opacity-0 pointer-events-none transform translate-y-2 scale-95"
        }`}
      >
        {/* Preview image */}
        <div className={cn(
          "relative w-full",
          imageAspectRatio === 'portrait' ? "h-56" : "h-48"
        )}>
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-sm text-gray-500">Image unavailable</span>
            </div>
          ) : (
            <Image
              src={imageError ? "/placeholder.svg?height=600&width=800" : fixImagePath(project.image)}
              alt={`${project.title} Preview`}
              fill
              className="object-cover"
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                setImageAspectRatio(img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape');
                setImageError(false);
              }}
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-white font-medium text-xl">{project.title}</h3>
        </div>
        
        {/* Preview content */}
        <div className="p-4">
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-[#2a2a2a]/70">{project.category}</span>
            <span className="text-[#2a2a2a]/70">{project.location}{project.year ? `, ${project.year}` : ''}</span>
          </div>
          
          <p className="text-sm text-[#2a2a2a]/80 mb-3">
            {project.description}
          </p>
          
          <div className="grid grid-cols-3 gap-1 mb-3">
            {(project.additionalImages || []).map((src, i) => (
              <div key={i} className={cn(
                "relative rounded-sm overflow-hidden",
                additionalImageAspectRatios[i] === 'portrait' ? "aspect-[3/4]" : "aspect-square"
              )}>
                <Image 
                  src={fixImagePath(src)} 
                  alt={`Preview ${i+1}`} 
                  fill 
                  className="object-cover"
                  onError={(e) => {
                    // Replace with placeholder on error
                    (e.target as HTMLImageElement).src = "/placeholder.svg?height=600&width=800";
                  }}
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    setAdditionalImageAspectRatios(prev => ({
                      ...prev,
                      [i]: img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape'
                    }));
                  }}
                />
              </div>
            ))}
          </div>
          
          <Link href={`/projects/${project.id}`}>
            <button className="w-full py-2 bg-[#2a2a2a] text-white text-sm rounded-md hover:bg-[#2a2a2a]/90 transition-colors">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
} 