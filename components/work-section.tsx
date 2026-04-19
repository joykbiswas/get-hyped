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
    borderColor: "#FF5722",
    overlayColor: "#FF5722",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=700&fit=crop",
    borderColor: "#0088FF",
    overlayColor: "#0088FF",
  },
  {
    id: 3,
    title: "Content die echt smaakt (en raakt)",
    client: "Loco",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop",
    borderColor: "#2DD4A0",
    overlayColor: "#2DD4A0",
  },
]

function CardOverlay({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 rounded-t-3xl p-4 sm:p-5"
      style={{ backgroundColor: project.overlayColor }}
    >
      <div className="absolute -top-5 right-5">
        <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a1a1a]" />
        </span>
      </div>
      <h3 className="text-base sm:text-lg xl:text-xl font-bold text-white leading-tight pr-10">
        {project.title}
      </h3>
      <span className="mt-2 inline-block px-3 py-1 rounded-full bg-white/25 text-white text-xs font-semibold">
        {project.client}
      </span>
    </div>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="px-4 sm:px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">

        {/* ════════ MOBILE ════════ */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-[2.4rem] font-black text-[#1a1a1a] leading-[1.05] tracking-tight">
              Content<br />
              <em className="italic">dat scoort.</em>
            </h2>
            <p className="mt-3 text-base text-[#1a1a1a]/65 max-w-sm leading-relaxed">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
            <a
              href="#work"
              className="mt-5 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Bekijk al ons werk
              <span className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0">→</span>
            </a>
          </motion.div>
          <div className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden w-full"
                style={{ border: `4px solid ${project.borderColor}`, aspectRatio: "3/4" }}
              >
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <CardOverlay project={project} />
              </motion.a>
            ))}
          </div>
        </div>

      
        <div className="hidden lg:block relative w-full border border-red-600" style={{ height: "860px" }}>

          {/* Heading — top left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-amber-300"
            style={{ position: "absolute", top: 0, left: 0, width: "460px" }}
          >
            <h2 className="text-[3.4rem] xl:text-[4rem] font-black text-[#1a1a1a] leading-[1.0] tracking-tight">
              Content<br />
              <em className="italic">dat scoort.</em>
            </h2>
            <p className="mt-4 text-base xl:text-[1.05rem] text-[#1a1a1a]/65 leading-relaxed">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
              doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
            <a
              href="#work"
              className="mt-6 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors group"
            >
              Bekijk al ons werk
              <span className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0">→</span>
            </a>
          </motion.div>

          {/* Card 1 — orange — far left, starts below the CTA button */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group absolute rounded-3xl overflow-hidden"
            style={{
              border: `4px solid ${projects[0].borderColor}`,
              width: "26%",
              aspectRatio: "3/4",
              left: "0%",
              top: "420px",
            }}
          >
            <Image src={projects[0].image} alt={projects[0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <CardOverlay project={projects[0]} />
          </motion.a>

          {/* Cards 2 & 3 — right side, side by side with gap, NO overlap */}
          {/* Card 2 — blue — slightly lower than card 3 */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group absolute rounded-3xl overflow-hidden"
            style={{
              border: `4px solid ${projects[1].borderColor}`,
              width: "29%",
              aspectRatio: "3/4",
              left: "36%",
              top: "280px",
            }}
          >
            <Image src={projects[1].image} alt={projects[1].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <CardOverlay project={projects[1]} />
          </motion.a>

          {/* Card 3 — green — highest, aligned near top */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group absolute rounded-3xl overflow-hidden"
            style={{
              border: `4px solid ${projects[2].borderColor}`,
              width: "29%",
              aspectRatio: "3/4",
              right: "0%",
              top: "160px",
            }}
          >
            <Image src={projects[2].image} alt={projects[2].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <CardOverlay project={projects[2]} />
          </motion.a>

        </div>
      </div>
    </section>
  )
}