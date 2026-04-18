"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Track hover state for each card
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Card data with initial transforms (matching the Webflow layout)
  const cards = [
    {
      id: 0,
      type: "stat",
      value: "10M+",
      title: "Organische views",
      description: "Groei door slimme content",
      theme: "blue",
      initialTransform: { x: 0, y: -2.1959, rotate: 8.47727, scale: 1 },
      hoverTransform: { x: 5, y: -5, rotate: 12, scale: 1.05 },
    },
    {
      id: 1,
      type: "media",
      imageUrl:
        "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c40296636e683096701cda_video-thumb-01.avif",
      videoUrl: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
      initialTransform: { x: 0, y: -3.7559, rotate: -3.70668, scale: 1 },
      hoverTransform: { x: -8, y: -8, rotate: -8, scale: 1.05 },
    },
    {
      id: 2,
      type: "stat",
      value: "30+",
      title: "Merken geholpen",
      description: "Van start-up tot multinational",
      theme: "green",
      initialTransform: { x: 0, y: -3.379, rotate: 7.56665, scale: 1 },
      hoverTransform: { x: 6, y: -4, rotate: 10, scale: 1.05 },
    },
    {
      id: 3,
      type: "media",
      imageUrl:
        "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/69c402fa5b2a05b98200d317_video-thumb-02.avif",
      videoUrl: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
      initialTransform: { x: 0, y: -3.6436, rotate: 8.71952, scale: 1 },
      hoverTransform: { x: -5, y: -6, rotate: -5, scale: 1.05 },
    },
  ];

  // Get transform for a specific card based on hover state
  const getCardTransform = (cardId: number, isHovered: boolean) => {
    const card = cards.find((c) => c.id === cardId);
    if (!card) return "";
    const transform = isHovered ? card.hoverTransform : card.initialTransform;
    return `translate(${transform.x}%, ${transform.y}%) rotate(${transform.rotate}deg) scale(${transform.scale})`;
  };

  return (
    <section
      ref={ref}
      className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4 md:px-8 lg:p-8 overflow-hidden"
    >
      <div className="mx-auto">
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
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#1a1a1a] font-medium max-w-md"
        >
          Klaar met gokken op content die niets oplevert?
        </motion.p>

        {/* Cards Container - Overlapping layout like Webflow */}
        <div className="mt-10 sm:mt-14 md:mt-16 relative mb-8 sm:mb-12 md:mb-16 w-full md:pl-12">
          <div className="mwg_effect025">
            <div className="container-col-12">
              <div
                data-preloader-cards=""
                className="container is-mwg_effect025 w-full"
              >
                {/* Desktop: Show all cards */}
                <div className="hidden lg:flex lg:flex-nowrap  md:gap-12 lg:gap-28">
                  {cards.map((card) => (
                    <motion.div
                      key={card.id}
                      className={`
                        results-card 
                        w-[280px]  md:w-[320px] lg:w-[360px] 
                        flex-shrink-0
                        transition-all duration-300 ease-out
                        cursor-pointer  
                        ${
                          card.type === "stat"
                            ? card.theme === "blue"
                              ? "bg-[#0088FF]"
                              : "bg-[#00C853]"
                            : ""
                        }
                        rounded-3xl overflow-hidden
                        shadow-xl
                        ${
                          card.id !== 0
                            ? "md:-ml-[5vw] lg:-ml-[10vw]"
                            : ""
                        }
                      `}
                      style={{
                        transform: getCardTransform(card.id, hoveredIndex === card.id),
                        transition: "transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
                        zIndex: hoveredIndex === card.id ? 50 : 10 - card.id,
                      }}
                      onMouseEnter={() => setHoveredIndex(card.id)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      initial={false}
                      animate={{
                        transform: getCardTransform(card.id, hoveredIndex === card.id),
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {card.type === "stat" ? (
                        <div className="results-card_content p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
                          <div>
                            <div className="results-card_title text-[clamp(2rem,6vw,4rem)] font-black text-[#1a1a1a] leading-none">
                              {card.value}
                            </div>
                          </div>
                          <div className="results-card_body">
                            <h2 className="results-card_subtitle text-[#1a1a1a] font-bold text-lg">
                              {card.title}
                            </h2>
                            <div className="results-card_divider h-px bg-[#1a1a1a]/30 my-2"></div>
                            <p className="results-card_paragraph text-[#1a1a1a]/80 text-sm">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full min-h-[280px] md:min-h-[320px] group">
                          <Image
                            src={card.imageUrl || ""}
                            alt="Content thumbnail"
                            fill
                            className="object-cover"
                            draggable={false}
                          />
                          <video
                            muted
                            loop
                            playsInline
                            src={card.videoUrl}
                            autoPlay={true}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            onMouseEnter={(e) => {
                              const videoElement = e.currentTarget as HTMLVideoElement;
                              videoElement.play();
                            }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mobile/Tablet: Horizontal scrollable cards with overlap effect */}
                <div className="lg:hidden w-full relative">
                  <div className="overflow-x-auto pb-4 pt-10 px-2 sm:px-4">
                    <div className="flex gap-2 sm:gap-4  pl-2">
                      {cards.map((card, idx) => (
                        <motion.div
                          key={card.id}
                          className={`
                            results-card 
                            w-[180px] sm:w-[230px]
                            flex-shrink-0
                            transition-all duration-300 ease-out
                            cursor-pointer  
                            ${
                              card.type === "stat"
                                ? card.theme === "blue"
                                  ? "bg-[#0088FF]"
                                  : "bg-[#00C853]"
                                : ""
                            }
                            rounded-3xl overflow-hidden
                            shadow-xl
                            ${idx !== 0 ? "-ml-8 sm:-ml-12" : ""}
                          `}
                          style={{
                            transform: getCardTransform(card.id, hoveredIndex === card.id),
                            transition: "transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
                            zIndex: hoveredIndex === card.id ? 50 : 10 - card.id,
                          }}
                          onMouseEnter={() => setHoveredIndex(card.id)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          initial={false}
                          animate={{
                            transform: getCardTransform(card.id, hoveredIndex === card.id),
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          {card.type === "stat" ? (
                            <div className="results-card_content p-4 sm:p-6 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
                              <div>
                                <div className="results-card_title text-[clamp(2rem,6vw,3.5rem)] font-black text-[#1a1a1a] leading-none">
                                  {card.value}
                                </div>
                              </div>
                              <div className="results-card_body">
                                <h2 className="results-card_subtitle text-[#1a1a1a] font-bold text-base sm:text-lg">
                                  {card.title}
                                </h2>
                                <div className="results-card_divider h-px bg-[#1a1a1a]/30 my-2"></div>
                                <p className="results-card_paragraph text-[#1a1a1a]/80 text-xs sm:text-sm">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="relative w-full min-h-[280px] sm:min-h-[320px] group">
                              <Image
                                src={card.imageUrl || ""}
                                alt="Content thumbnail"
                                fill
                                className="object-cover"
                                draggable={false}
                              />
                              <video
                                muted
                                loop
                                playsInline
                                src={card.videoUrl}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                onMouseEnter={(e) => {
                                  const videoElement = e.currentTarget as HTMLVideoElement;
                                  videoElement.play();
                                }}
                              />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 text-3xl md:text-4xl lg:text-6xl md:pl-20 font-bold text-[#1a1a1a] leading-tight max-w-6xl px-2 sm:px-0"
        >
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
          raakt en jouw merk in beweging zet.
        </motion.p>
      </div>

      <style jsx>{`
        /* Desktop overlapping cards */
        @media (min-width: 1024px) {
          .mwg_effect025 .results-card:not(:first-child) {
            margin-left: -10vw;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .mwg_effect025 .results-card:not(:first-child) {
            margin-left: -5vw;
          }
        }
        
        /* Mobile - ensure proper spacing */
        @media (max-width: 767px) {
          .container-col-12 {
            position: relative;
            height: auto;
          }
        }
      `}</style>
      

       {/* About Section Preview */}


    </section>
  );
}