import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">ARCHITAG</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#approach" className="text-sm font-medium transition-colors hover:text-primary">
              Approach
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Get in Touch
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Practice</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Learn more about our architecture practice, our team, and our vision.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our Studio"
                width={600}
                height={800}
                alt="Our Studio"
                className="rounded-lg object-cover"
              />
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p>
                  Founded in 2010, our architecture practice began with a simple vision: to create spaces that inspire
                  and enhance the way people live and work. What started as a small team of passionate architects has
                  grown into a respected studio known for innovative design and sustainable practices.
                </p>
                <p>
                  Over the years, we've had the privilege of working on a diverse range of projects, from private
                  residences to public buildings, each with its own unique challenges and opportunities. Our commitment
                  to excellence has earned us recognition within the industry and the trust of our clients.
                </p>
                <h2 className="text-2xl font-bold mt-8">Our Team</h2>
                <p>
                  Our team consists of talented architects, designers, and project managers who bring a wealth of
                  experience and creativity to every project. We believe in collaboration, both within our team and with
                  our clients, to ensure that each design reflects the unique vision and requirements of the project.
                </p>
                <h2 className="text-2xl font-bold mt-8">Our Values</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Excellence in design and execution</li>
                  <li>Sustainability and environmental responsibility</li>
                  <li>Client-centered approach</li>
                  <li>Innovation and creative problem-solving</li>
                  <li>Integrity and professionalism</li>
                </ul>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=Team Member"
                        width={128}
                        height={128}
                        alt={`Team Member ${i + 1}`}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Architect {i + 1}</h3>
                    <p className="text-muted-foreground">
                      {i % 3 === 0 ? "Principal Architect" : i % 3 === 1 ? "Senior Architect" : "Project Manager"}
                    </p>
                    <p className="mt-2 text-sm">
                      With over {5 + i} years of experience in architectural design and project management.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 ARCHITAG. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

