"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const expertises = [
  {
    number: "01",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    color: "bg-white",
    textColor: "text-[#1a1a1a]",
    numberColor: "text-[#E8E0DA]",
    buttonBg: "bg-[#FF5722]",
    buttonText: "text-white",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=500&fit=crop",
    borderColor: "border-[#FF5722]",
    cta: "Meer over social strategie",
  },
  {
    number: "02",
    title: "Content creation",
    subtitle: "Content die scoort.",
    description:
      "Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.",
    color: "bg-[#FF69B4]",
    textColor: "text-[#1a1a1a]",
    numberColor: "text-[#FF69B4]/30",
    buttonBg: "bg-[#1a1a1a]",
    buttonText: "text-white",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=500&fit=crop",
    borderColor: "border-[#FF5722]",
    cta: "Bekijk al ons werk",
  },
  {
    number: "03",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    color: "bg-[#2DD4A0]",
    textColor: "text-[#1a1a1a]",
    numberColor: "text-[#2DD4A0]/30",
    buttonBg: "bg-[#1a1a1a]",
    buttonText: "text-white",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=500&fit=crop",
    borderColor: "border-[#FF5722]",
    cta: "Meer over activatie",
  },
  {
    number: "04",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    description:
      "We meten alles. Van bereik tot betrokkenheid, van clicks tot conversies. Zo optimaliseren we continu en haal je het maximale uit je content.",
    color: "bg-[#0088FF]",
    textColor: "text-[#1a1a1a]",
    numberColor: "text-[#0088FF]/30",
    buttonBg: "bg-[#1a1a1a]",
    buttonText: "text-white",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    borderColor: "border-white",
    cta: "Meer over data",
  },
]

function ExpertiseCard({
  expertise,
  index,
}: {
  expertise: (typeof expertises)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className={`${expertise.color} rounded-[2rem] p-4 sm:p-6 md:p-10 min-h-screen sm:min-h-[85vh] md:min-h-[80vh] sticky`}
      // Stacking effect - each card sticks a bit lower
      id={index === 0 ? "expertises" : undefined}
    >
      {/* Badge and Number */}
      <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
        <span className="px-3 sm:px-4 py-2 rounded-full bg-white text-[#1a1a1a] font-medium text-xs sm:text-sm">
          Expertise
        </span>
        <span className={`text-[3rem] sm:text-[5rem] md:text-[8rem] font-black leading-none ${expertise.numberColor}`}>
          {expertise.number}
        </span>
      </div>

      {/* Title */}
      <h2 className={`text-[clamp(1.5rem,6vw,4rem)] font-black leading-none ${expertise.textColor} -mt-4 md:-mt-16`}>
        {expertise.title}
      </h2>

      {/* Image */}
      <div className={`mt-6 sm:mt-8 w-36 sm:w-48 md:w-64 rounded-2xl overflow-hidden border-4 ${expertise.borderColor} flex-shrink-0`}>
        <Image
          src={expertise.image}
          alt={expertise.title}
          width={300}
          height={400}
          priority={false}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Description */}
      <div className="mt-6 sm:mt-8 max-w-xl">
        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${expertise.textColor} mb-3 sm:mb-4`}>
          {expertise.subtitle}
        </h3>
        <p className={`${expertise.textColor}/80 text-sm sm:text-base md:text-lg leading-relaxed`}>
          {expertise.description}
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className={`mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full ${expertise.buttonBg} ${expertise.buttonText} font-semibold text-sm sm:text-base transition-transform hover:scale-105`}
      >
        {expertise.cta}
        <span className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
        </span>
      </a>
    </motion.div>
  )
}

export function ExpertiseSection() {
  return (
    <section className="px-3 sm:px-4 md:px-8 py-12 sm:py-16 relative">
      <div className="relative">
        {/* Sticky stack of cards */}
        <div className="relative">
          {expertises.map((expertise, index) => (
            <div
              key={expertise.number}
              className="mb-8"
              style={{
                position: "sticky",
                top: `${80 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <ExpertiseCard expertise={expertise} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
