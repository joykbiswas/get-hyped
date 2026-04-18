"use client"

import { motion } from "framer-motion"

const brands = [
  { name: "8RHK", subtitle: "ambassadeurs" },
  { name: "KNLTB", logo: true },
  { name: "Tho", subtitle: "kantoormeubliair kan circulair" },
  { name: "fides", logo: true },
  { name: "Graafschap", subtitle: "College" },
]

export function BrandsSection() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 bg-[#FDF6F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,6vw,3.5rem)] font-black text-[#1a1a1a] leading-tight mb-12"
        >
          These brands
          <br />
          <span className="italic">got hyped.</span>
        </motion.h2>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 flex items-center justify-center min-h-[120px] border border-[#E8E0DA]"
            >
              <div className="text-center">
                <p className="text-xl font-bold text-[#1a1a1a]">{brand.name}</p>
                {brand.subtitle && (
                  <p className="text-xs text-[#1a1a1a]/60 mt-1">{brand.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite scroll marquee */}
        <div className="mt-8 overflow-hidden">
          <div className="flex animate-marquee">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-4 bg-white rounded-2xl p-6 flex items-center justify-center min-w-[150px] min-h-[100px] border border-[#E8E0DA]"
              >
                <div className="text-center">
                  <p className="text-lg font-bold text-[#1a1a1a]">{brand.name}</p>
                  {brand.subtitle && (
                    <p className="text-xs text-[#1a1a1a]/60 mt-1">{brand.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
