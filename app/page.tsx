"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const expertise = [
  {
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.",
    link: "/expertises/social-strategie",
  },
  {
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    description:
      "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    link: "/expertises/content-creatie",
  },
  {
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.",
    link: "/expertises/activatie",
  },
  {
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    description:
      "We duiken in cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij met heldere learnings.",
    link: "/expertises/data",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-white text-slate-950 font-sans">
      <main className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-24 px-6 py-10 lg:px-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-slate-950/5 px-4 py-2 text-sm uppercase tracking-[0.32em] text-slate-950">
              Social content agency
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl">
              Get Hyped. <span className="text-orange-600">Get Noticed.</span> Get Results.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
              Wij maken content die opvalt, blijft hangen en jouw doelgroep raakt. Snel, krachtig en energiek, altijd met een meetbare strategie.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="mailto:info@gethyped.nl"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-slate-950 px-8 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Mail ons direct
              </Link>
              <Link
                href="/work"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-slate-900 px-8 text-sm font-semibold text-slate-950 transition hover:border-slate-700 hover:bg-slate-50"
              >
                Bekijk al ons werk
              </Link>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-900/5 bg-slate-950/5 p-8 shadow-[0_30px_80px_-58px_rgba(15,23,42,0.3)]">
            <div className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-lg shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Organische views</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">10M+</h2>
              <p className="mt-3 max-w-sm text-base leading-7 text-slate-300">
                Groei met slimme content die je organische bereik vergroot en je merk zichtbaar maakt.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-900/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Merken geholpen</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">30+</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-900/5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Creëer met impact</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">Strategisch + Creatief</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-14"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-orange-600">Expertise</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-slate-950">Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt.</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar, zodat je precies weet wat werkt en wat niet.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                className="group overflow-hidden rounded-[2rem] border border-slate-900/5 bg-slate-950/5 p-8 transition hover:border-orange-500/30"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-base font-semibold text-slate-700">{item.subtitle}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                <Link
                  href={item.link}
                  className="mt-6 inline-flex text-sm font-semibold text-orange-600 transition group-hover:text-orange-500"
                >
                  Meer over {item.title.toLowerCase()}
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="grid gap-10 rounded-[2rem] border border-slate-900/5 bg-slate-950/5 p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-600">Content dat scoort</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950">Wij vertellen jouw verhaal op een manier die écht past bij jouw doelgroep.</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Creatieve content die werkt en het verschil maakt. Van concept tot publicatie, altijd met een scherpe strategie en heldere resultaten.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Bullit', 'Roasta', 'Loco Loco'].map((label) => (
                <div key={label} className="rounded-3xl bg-white p-6 text-center shadow-sm shadow-slate-900/5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Case</p>
                  <p className="mt-4 text-xl font-semibold text-slate-950">{label}</p>
                  <span className="mt-3 block text-sm text-slate-600">Lees meer</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="grid gap-10 rounded-[2rem] border border-slate-900/5 bg-white p-10 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.15)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-600">Brands</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950">These brands got hyped.</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['Vans', 'Heineken', 'Nike', 'Red Bull'].map((brand) => (
                <div key={brand} className="rounded-3xl border border-slate-200/80 p-4 text-center text-sm font-semibold text-slate-700">
                  {brand}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Resultaat</p>
              <p className="mt-4 text-3xl font-semibold">+20%</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Groei in zichtbaarheid binnen 3 maanden.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Focus</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">Creativiteit</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Vette content met een strak resultaatdoel.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Impact</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">Meetbaar</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Geen willekeurige creatie, maar content met een plan.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="rounded-[2rem] border border-slate-900/5 bg-slate-950/5 p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-600">Let’s Get Hyped!</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950">Klaar met gokken op content die niets oplevert?</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Wij bouwen contentstrategieën die merken vooruit helpen. Snel, scherp en gericht op resultaat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="mailto:info@gethyped.nl" className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-orange-600 px-8 text-sm font-semibold text-white transition hover:bg-orange-500">
                  Mail ons direct
                </Link>
                <Link href="/contact" className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-orange-600 px-8 text-sm font-semibold text-orange-600 transition hover:bg-orange-50">
                  Contact
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['LinkedIn', 'TikTok', 'Instagram'].map((social) => (
                <div key={social} className="rounded-3xl bg-white p-6 text-center shadow-sm shadow-slate-900/5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Follow</p>
                  <p className="mt-4 text-xl font-semibold text-slate-950">{social}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
