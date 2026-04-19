"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useCallback } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Van nul naar vol, binnen 3 weken",
    client: "Bullit",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=700&fit=crop",
    // Replace with your real video URLs e.g. "https://gethyped.b-cdn.net/Bullit/Bullit | Loop.mp4"
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    borderColor: "#FF5722",
    overlayColor: "#FF5722",
  },
  {
    id: 2,
    title: "Zacht in smaak, sterk in beeld",
    client: "Roasta",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=700&fit=crop",
    video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    borderColor: "#0088FF",
    overlayColor: "#0088FF",
  },
  {
    id: 3,
    title: "Content die echt smaakt (en raakt)",
    client: "Loco",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop",
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    borderColor: "#2DD4A0",
    overlayColor: "#2DD4A0",
  },
]

function ProjectCard({
  project,
  delay,
  className = "",
  style,
}: {
  project: (typeof projects)[0]
  delay: number
  className?: string
  style?: React.CSSProperties
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current && imgRef.current) {
      videoRef.current.play()
      // fade: hide placeholder, show video
      imgRef.current.style.opacity = "0"
      videoRef.current.style.opacity = "1"
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current && imgRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      imgRef.current.style.opacity = "1"
      videoRef.current.style.opacity = "0"
    }
  }, [])

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative block overflow-hidden ${className}`}
      style={{
        borderRadius: "24px",
        border: `4px solid ${project.borderColor}`,
        aspectRatio: "3/4",
        ...style,
      }}
    >
      {/* ── Placeholder image (desktop default) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transition: "opacity 0.3s ease",
          opacity: 1,
          // hide on mobile — mobile uses autoplay video below
        }}
        draggable={false}
      />

      {/* ── Hover video (desktop) — hidden until hover ── */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Mobile autoplay video (always visible on mobile) ── */}
      <video
        src={project.video}
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center lg:hidden"
        style={{ opacity: 1 }}
      />

      {/* ── Bottom overlay ── */}
      <div
        className="absolute bottom-2 left-2 right-2"
        style={{
          backgroundColor: project.overlayColor,
          borderRadius: "20px",
          padding: "20px 18px 22px 18px",
        }}
      >
        {/* Arrow button */}
        <div className="absolute" style={{ top: "-22px", right: "16px" }}>
          <span
            className="flex items-center justify-center bg-white shadow-md transition-transform duration-300 group-hover:scale-110"
            style={{ width: "44px", height: "44px", borderRadius: "50%" }}
          >
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ width: "18px", height: "18px", color: "#1a1a1a" }}
            />
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black text-white leading-tight"
          style={{
            fontSize: "clamp(15px, 2vw, 20px)",
            marginBottom: "10px",
            paddingRight: "40px",
          }}
        >
          {project.title}
        </h3>

        {/* Client pill */}
        <span
          className="inline-block font-semibold text-white"
          style={{
            fontSize: "12px",
            padding: "4px 12px",
            borderRadius: "100px",
            backgroundColor: "rgba(0,0,0,0.22)",
          }}
        >
          {project.client}
        </span>
      </div>
    </motion.a>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="px-2 sm:px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">

        {/* ════════ MOBILE (< lg) ════════ */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
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
              className="mt-5 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Bekijk al ons werk
              <span className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0">→</span>
            </a>
          </motion.div>

          {/* Overlapping deck */}
          <div className="relative w-full" style={{ height: "calc(90vw + 2 * 50vw)" }}>
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group absolute left-0 right-0 overflow-hidden"
                style={{
                  borderRadius: "24px",
                  border: `4px solid ${project.borderColor}`,
                  top: `calc(${i} * 50vw)`,
                  height: "90vw",
                  zIndex: projects.length - i,
                }}
              >
                <div className="relative w-full h-full">
                  {/* Mobile: autoplay video always */}
                  <video
                    src={project.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute bottom-2 left-2 right-2"
                    style={{
                      backgroundColor: project.overlayColor,
                      borderRadius: "20px",
                      padding: "20px 18px 22px 18px",
                    }}
                  >
                    <div className="absolute" style={{ top: "-22px", right: "16px" }}>
                      <span className="flex items-center justify-center bg-white shadow-md" style={{ width: "44px", height: "44px", borderRadius: "50%" }}>
                        <ArrowUpRight style={{ width: "18px", height: "18px", color: "#1a1a1a" }} />
                      </span>
                    </div>
                    <h3 className="font-black text-white leading-tight" style={{ fontSize: "18px", marginBottom: "10px", paddingRight: "40px" }}>
                      {project.title}
                    </h3>
                    <span className="inline-block font-semibold text-white" style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "100px", backgroundColor: "rgba(0,0,0,0.22)" }}>
                      {project.client}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ════════ DESKTOP (≥ lg) ════════ */}
        <div className="hidden lg:block relative w-full" style={{ height: "860px" }}>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", top: 0, left: 0, width: "380px" }}
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
              className="mt-6 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Bekijk al ons werk
              <span className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center flex-shrink-0">→</span>
            </a>
          </motion.div>

          {/* Card 1 — orange */}
          <ProjectCard
            project={projects[0]}
            delay={0.1}
            style={{ position: "absolute", width: "26%", left: "0%", top: "410px" }}
          />

          {/* Card 2 — blue */}
          <ProjectCard
            project={projects[1]}
            delay={0.2}
            style={{ position: "absolute", width: "29%", left: "36%", top: "260px" }}
          />

          {/* Card 3 — green */}
          <ProjectCard
            project={projects[2]}
            delay={0.3}
            style={{ position: "absolute", width: "29%", right: "0%", top: "0px" }}
          />
        </div>

      </div>
    </section>
  )
}