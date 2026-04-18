"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Van nul naar vol, binnen 3 weken",
    client: "Bullit",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=700&fit=crop",
    borderColor: "border-[#FF5722]",
    overlayColor: "bg-[#FF5722]",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=700&fit=crop",
    borderColor: "border-[#0088FF]",
    overlayColor: "bg-[#0088FF]",
  },
  {
    id: 3,
    title: "Content die echt smaakt (en raakt)",
    client: "Loco",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop",
    borderColor: "border-[#2DD4A0]",
    overlayColor: "bg-[#2DD4A0]",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="px-3 sm:px-4 md:px-8 py-12 sm:py-16 md:py-24">
      <div className="">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black text-[#1a1a1a] leading-tight">
            Content
            <br />
            <span className="italic">dat scoort.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#1a1a1a]/70 max-w-lg">
            Wij vertellen jouw verhaal. Op een manier die echt past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <a
            href="#work"
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold text-sm sm:text-base hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Bekijk al ons werk
            <span className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0">
              →
            </span>
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden border-4 ${project.borderColor} aspect-[3/4]`}
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 ${project.overlayColor} p-4 sm:p-6 rounded-t-3xl`}>
                {/* Arrow Button */}
                <div className="absolute -top-4 sm:-top-5 right-4 sm:right-6">
                  <span className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#1a1a1a]" />
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white leading-tight pr-10 sm:pr-12">
                  {project.title}
                </h3>
                <span className="mt-2 sm:mt-3 inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium">
                  {project.client}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
