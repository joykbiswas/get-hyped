"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function About() {
  const [hoveredImage, setHoveredImage] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 pl-8">
      {/* Desktop Layout: 4-7-1 Grid */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
        {/* Image - 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-3"
          onMouseEnter={() => setHoveredImage(true)}
          onMouseLeave={() => setHoveredImage(false)}
        >
          <div className="rounded-3xl overflow-hidden relative aspect-[4/3] w-full cursor-pointer shadow-lg transition-all duration-500 hover:shadow-xl">
            <Image
              src={
                hoveredImage
                  ? "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop"
                  : "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop"
              }
              alt="Team in action"
              fill
              className="object-cover transition-all duration-500 scale-100 hover:scale-110"
            />
            {hoveredImage && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                  Bekijk meer →
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Text - 8 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-7 md:px-4 lg:px-24"
        >
          <p className="text-[clamp(1rem,3vw,1.5rem)] font-medium text-[#1a1a1a] leading-relaxed">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het
            meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
            content zonder strategie. Nooit meer content zonder resultaat.
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ x: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold transition-all duration-300 group"
            >
              Leer ons kennen
              <motion.span
                className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>

        {/* Down Arrow - 1 col */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-2 flex justify-start items-center"
        >
          <a
            href="#expertises"
            className="group inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-[#1a1a1a] text-accent transition-all duration-300"
            aria-label="Scroll down"
          >
            <span className="text-3xl font-light transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </motion.div>
      </div>

      {/* ====================== MOBILE LAYOUT ====================== */}
      <div className="md:hidden space-y-6">
        {/* Video instead of Image on mobile - slightly rotated */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-lg -rotate-2"  
        >
          <div className="aspect-[4/3] w-full bg-black">
            <video
              muted
              loop
              autoPlay
              playsInline
              webkit-playsinline="true"
              className="w-full h-full object-cover"
            >
              <source
                src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium text-[#1a1a1a] leading-relaxed">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het
            meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
            content zonder strategie. Nooit meer content zonder resultaat.
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            Leer ons kennen
            <span className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}