"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={ref} className="min-h-screen pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.5rem,10vw,5rem)] font-black leading-[0.95] tracking-tight text-[#1a1a1a]"
        >
          <span className="italic">Get Hyped.</span>
          <br />
          <span className="italic">Get Noticed.</span>
          <br />
          <span className="italic">Get Results.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[#1a1a1a] font-medium max-w-md"
        >
          Klaar met gokken op content die niets oplevert?
        </motion.p>

        {/* Stats and Images Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {/* Stats Card */}
          <motion.div
            style={{ y: y1 }}
            className="col-span-1 bg-[#0088FF] rounded-3xl p-6 flex flex-col justify-between min-h-[200px] md:min-h-[280px]"
          >
            <div>
              <p className="text-[clamp(2.5rem,8vw,4rem)] font-black text-[#1a1a1a] leading-none">
                10M+
              </p>
            </div>
            <div>
              <p className="text-[#1a1a1a] font-semibold text-sm border-b border-[#1a1a1a]/30 pb-2 mb-2">
                Organische views
              </p>
              <p className="text-[#1a1a1a]/80 text-sm">
                Groei door slimme content
              </p>
            </div>
          </motion.div>

          {/* Image 1 - Woman from behind */}
          <motion.div
            style={{ y: y2 }}
            className="col-span-1 rounded-3xl overflow-hidden min-h-[200px] md:min-h-[280px] relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop"
              alt="Creative content"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Image 2 - Vintage car (hidden on mobile, shown on md+) */}
          <motion.div
            style={{ y: y1 }}
            className="hidden md:block col-span-1 rounded-3xl overflow-hidden min-h-[280px] relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop"
              alt="Vintage car shoot"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-[clamp(1.25rem,4vw,2rem)] font-semibold text-[#1a1a1a] leading-tight max-w-2xl"
        >
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging zet.
        </motion.p>

        {/* About Section Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative aspect-[4/3]"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop"
              alt="Team in action"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-medium text-[#1a1a1a] leading-relaxed">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Leer ons kennen
              <span className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#1a1a1a]">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
