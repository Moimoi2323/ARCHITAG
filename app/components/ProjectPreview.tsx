"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

interface ProjectPreviewProps {
  trigger: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

export default function ProjectPreview({
  trigger,
  position = "bottom",
  className = "",
}: ProjectPreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)
  
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
        <div className="relative h-48 w-full">
          <Image
            src="/1_3 - Photo.jpg"
            alt="VDB Cardinall Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-white font-medium text-xl">VDB Cardinall</h3>
        </div>
        
        {/* Preview content */}
        <div className="p-4">
          <div className="flex justify-between mb-3 text-sm">
            <span className="text-[#2a2a2a]/70">Design Proposal</span>
            <span className="text-[#2a2a2a]/70">Bangalore, 2023</span>
          </div>
          
          <p className="text-sm text-[#2a2a2a]/80 mb-3">
            A luxury terrace renovation that transforms a conventional rooftop into a multi-functional 
            urban sanctuary featuring experiential pathways, zen garden, and seamless indoor-outdoor spaces.
          </p>
          
          <div className="grid grid-cols-3 gap-1 mb-3">
            {["/1_6 - Photo.jpg", "/1_9 - Photo.jpg", "/3.jpg"].map((src, i) => (
              <div key={i} className="aspect-square relative rounded-sm overflow-hidden">
                <Image 
                  src={src} 
                  alt={`Preview ${i+1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          <Link href="/projects/1">
            <button className="w-full py-2 bg-[#2a2a2a] text-white text-sm rounded-md hover:bg-[#2a2a2a]/90 transition-colors">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
} 