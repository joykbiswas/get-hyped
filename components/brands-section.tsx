"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const brandLogos = [
  { 
    name: "Bullit Digital", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg" 
  },
  { 
    name: "Morssinkhof", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg",
    hasExtension: true 
  },
  { 
    name: "Salontopper", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg" 
  },
  { 
    name: "Seesing Flex", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg" 
  },
  { 
    name: "Graafschap College", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg" 
  },
  { 
    name: "Fides", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg" 
  },
  { 
    name: "SRHK", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg" 
  },
  { 
    name: "KNLTB", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg" 
  },
  { 
    name: "THO", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg" 
  },
  { 
    name: "De Talententuin", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg" 
  },
  { 
    name: "ZCLV", 
    src: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg" 
  },
]

export function BrandsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let animationId: number
    const speed = 0.5 // pixels per frame

    const animate = () => {
      if (!isDragging && marquee) {
        marquee.scrollLeft += speed
        // Reset when reaching the end
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (marqueeRef.current?.offsetLeft || 0))
    setScrollLeft(marqueeRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (marqueeRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos]

  return (
    <section className="px-3 sm:px-4 md:px-8 py-12 sm:py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 border">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)]  text-left font-bold text-[#1a1a1a] leading-tight"
          >
            These brands <br></br>  got hyped.
          </motion.h2>
        </div>
      </div>

      {/* Full-width Marquee */}
      <div className="w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className={`
            flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className=" rounded-2xl p-4 sm:p-6 flex items-center justify-center w-[150px] sm:w-[320px] h-[180px] sm:h-[270px] border transition-shadow relative">
                <Image 
                  src={logo.src} 
                  alt={logo.name}
                  height={400}
                  width={400}
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                />
                {logo.hasExtension && (
                  <div className="absolute top-2 left-2 cursor-pointer opacity-100 transition-opacity w-6 h-6">
                    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Add to Photoshop Extension</title>
                      <path d="M44.26 0H9.74C4.36075 0 0 4.36075 0 9.74V44.26C0 49.6393 4.36075 54 9.74 54H44.26C49.6393 54 54 49.6393 54 44.26V9.74C54 4.36075 49.6393 0 44.26 0Z" fill="#001E36"/>
                      <path d="M18.7398 14.4297C25.7698 14.4297 29.7298 17.7197 29.7298 23.2397C29.7298 29.6797 24.3598 32.2697 19.3298 32.2697H15.9298V39.2297H9.0498V14.4297H18.7498H18.7398ZM15.9298 20.3097V26.3797H18.9598C21.0698 26.3797 22.5498 25.5297 22.5498 23.3797C22.5498 21.4197 21.2898 20.3097 19.1098 20.3097H15.9298Z" fill="#31A8FF"/>
                      <path d="M31.4299 37.9995L31.4699 32.2595C33.4299 33.5595 36.1699 34.3695 38.0599 34.3695C39.3499 34.3695 39.9499 33.9995 39.9499 33.3295C39.9499 32.5895 39.1399 32.2895 37.5799 31.8095C34.5799 30.9195 31.2899 29.6995 31.2899 25.7795C31.2899 21.8595 34.5799 19.5595 39.3599 19.5595C41.6199 19.5595 43.4699 19.8895 45.0999 20.5995L45.0599 26.0795C43.7699 25.2995 41.2099 24.5995 39.5499 24.5995C38.3299 24.5995 37.8499 24.9695 37.8499 25.5295C37.8499 26.1995 38.4399 26.3795 40.2199 26.9395C43.6599 27.9795 46.5499 29.0895 46.5499 33.1195C46.5499 37.1495 43.3999 39.5595 38.4799 39.5595C35.8899 39.5595 33.4499 39.1195 31.4499 38.0095L31.4299 37.9995Z" fill="#31A8FF"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}