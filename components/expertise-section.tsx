"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ExpertiseCard {
  number: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  bg: string;
  numberColor: string;
  imageUrl?: string;
  imageBorder?: string;
}

const cards: ExpertiseCard[] = [
  {
    number: "01",
    label: "Expertise",
    title: "Social strategy",
    tagline: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    cta: "Meer over social strategie",
    href: "",
    bg: "#FFFFFF",
    numberColor: "#E8E4DE",
    imageBorder: "#FF4D00",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&q=80",
  },
  {
    number: "02",
    label: "Expertise",
    title: "Content creation",
    tagline: "Content die opvalt en raakt.",
    description:
      "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    cta: "Meer over content creatie",
    href: "",
    bg: "#F4A8F0",
    numberColor: "#E87FE0",
    imageBorder: "#FFFFFF",
    imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
  },
  {
    number: "03",
    label: "Expertise",
    title: "Activation",
    tagline: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    cta: "Meer over activatie",
    href: "",
    bg: "#3ECBA0",
    numberColor: "#2EB088",
    imageBorder: "#FFFFFF",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
  },
];

// ─── Single Card ──────────────────────────────────────────────────────────────
function ExpertiseCard({
  card,
  index,
  total,
  containerRef,
}: {
  card: ExpertiseCard;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;

  // Cards underneath scale down and fade slightly as the next slides over them
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, index < total - 1 ? 0.94 : 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [1, index < total - 1 ? 0.78 : 1]
  );

  const isWhite = card.bg === "#FFFFFF";
  const textColor = "#0D0D0D";
  const ctaBg = isWhite ? "#FF4D00" : "#0D0D0D";

  return (
    <motion.div
      style={{
        scale,
        opacity,
        position: "sticky",
        top: `${40 + index * 8}px`, // slight stagger so you see edges peaking
        zIndex: 10 + index,
        transformOrigin: "top center",
        willChange: "transform, opacity",
      }}
      className="mb-3"
    >
      <div
        style={{
          backgroundColor: card.bg,
          borderRadius: "28px",
          minHeight: "84vh",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(32px, 5vw, 52px) clamp(28px, 5vw, 60px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        {/* Large ghost number */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: "28px",
            right: "44px",
            fontSize: "clamp(72px, 9vw, 136px)",
            fontWeight: 900,
            color: card.numberColor,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-4px",
          }}
        >
          {card.number}
        </span>

        {/* ── Top: label + title ── */}
        <div>
          <span
            style={{
              display: "inline-block",
              border: "1.5px solid rgba(0,0,0,0.15)",
              borderRadius: "100px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 500,
              color: textColor,
              marginBottom: "18px",
              backgroundColor: isWhite
                ? "rgba(0,0,0,0.04)"
                : "rgba(255,255,255,0.4)",
            }}
          >
            {card.label}
          </span>

          <h2
            style={{
              fontSize: "clamp(48px, 6.5vw, 92px)",
              fontWeight: 900,
              color: textColor,
              lineHeight: 1.0,
              letterSpacing: "-2px",
              margin: 0,
              maxWidth: "700px",
            }}
          >
            {card.title}
          </h2>
        </div>

        {/* ── Bottom: tagline + body + CTA + image ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "36px",
            flexWrap: "wrap",
          }}
        >
          {/* Text */}
          <div style={{ maxWidth: "420px" }}>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: textColor,
                marginBottom: "10px",
              }}
            >
              {card.tagline}
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: textColor,
                opacity: 0.75,
                marginBottom: "28px",
              }}
            >
              {card.description}
            </p>

            <motion.a
              href={card.href}
              whileHover={{ x: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: ctaBg,
                color: "#FFFFFF",
                borderRadius: "100px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {card.cta}
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "26px",
                  height: "26px",
                  backgroundColor: "rgba(255,255,255,0.22)",
                  borderRadius: "50%",
                  fontSize: "13px",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </div>

          {/* Image */}
          {card.imageUrl && (
            <div
              style={{
                width: "clamp(180px, 20vw, 280px)",
                aspectRatio: "3/4",
                borderRadius: "20px",
                overflow: "hidden",
                border: `3px solid ${card.imageBorder}`,
                flexShrink: 0,
              }}
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                height={400}
                width={300}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-4 md:px-6 pb-32 max-w-[1280px] mx-auto">
  

      {/* Sticky stack */}
      <div ref={containerRef} className="flex flex-col">
        {cards.map((card, i) => (
          <ExpertiseCard
            key={card.number}
            card={card}
            index={i}
            total={cards.length}
            containerRef={containerRef as React.RefObject<HTMLDivElement>}
          />
        ))}
      </div>
    </section>
  );
}