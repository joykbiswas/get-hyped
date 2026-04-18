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
    <section id="work" className="px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-black text-[#1a1a1a] leading-tight">
            Content
            <br />
            <span className="italic">dat scoort.</span>
          </h2>
          <p className="mt-4 text-lg text-[#1a1a1a]/70 max-w-lg">
            Wij vertellen jouw verhaal. Op een manier die echt past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
          <a
            href="#work"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Bekijk al ons werk
            <span className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center">
              →
            </span>
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className={`absolute bottom-0 left-0 right-0 ${project.overlayColor} p-6 rounded-t-3xl`}>
                {/* Arrow Button */}
                <div className="absolute -top-5 right-6">
                  <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-[#1a1a1a]" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight pr-12">
                  {project.title}
                </h3>
                <span className="mt-3 inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
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
