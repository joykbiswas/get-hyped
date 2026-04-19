"use client";

import { motion } from "framer-motion";
import { Mail, Flame } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100%"
      viewBox="0 0 208 84"
      fill="none"
      className="h-full w-auto"
    >
      <path
        d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049"
        fill="#FAF4EC"
      />
      <path
        d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z"
        fill="black"
      />
      <path
        d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z"
        fill="white"
      />
      <path
        d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z"
        fill="white"
      />
      <path
        d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z"
        fill="white"
      />
      <path
        d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z"
        fill="white"
      />
      <path
        d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z"
        fill="white"
      />
      <path
        d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z"
        fill="black"
      />
      <path
        d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z"
        fill="black"
      />
      <path
        d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z"
        fill="black"
      />
    </svg>
  );
}

export function Footer() {
  const navLinks = [
    { label: "Expertises", href: "#expertises" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: YouTubeIcon, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer id="contact" className="relative bg-[#FDF6F0] ">
      <div className="container mx-auto px-5">
        {/* ──── TOP SECTION ──── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-center py-8"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-[#1a1a1a] leading-tight">
            Let is Get Hyped!
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@gethyped.nl"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Mail ons direct
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5722] text-white font-semibold text-sm hover:bg-[#E64A19] transition-colors"
            >
              <Flame className="w-4 h-4" />
              Get Results
            </a>
          </div>
        </motion.div>

        {/* ──── BOTTOM SECTION ──── */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 rounded-tl-[1400px]  bg-muted ">
          {/* LEFT SIDE - Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex h-44 pt-14 "
          >
            <LogoIcon />
          </motion.div>

          {/* RIGHT SIDE - Navigation, Contact, Address, Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 flex gap-8"
          >
            {/* Navigation Links */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 rounded-full bg-white border border-[#E8E0DA] text-[#1a1a1a] font-semibold text-sm hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-12">
                <span className="font-semibold text-[#1a1a1a] text-sm">
                  Follow us
                </span>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white border border-[#E8E0DA] flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex pt-8 gap-12">
                <p>© 2025 Get Hyped</p>
                <p className="">© Design by Dylan</p>
              </div>
            </div>

            {/* Contact and Address in Two Columns */}
            <div className="flex flex-col p-2">
              <div className="gap-8 ">
                {/* Contact Section */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1a1a1a] text-xl">Contact</h3>
                  <div className="space-y-1 text-xs">
                    <p className="text-[#1a1a1a]">info@gethyped.nl</p>
                    <p className="text-[#1a1a1a]">+31 6 1533 7496</p>
                  </div>
                </div>

                {/* Address Section */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#1a1a1a] text-xl pt-4">
                    Adress
                  </h3>
                  <p className="text-[#1a1a1a]/70 text-xs leading-relaxed">
                    Beltrumsestraat 6,
                    <br />
                    7141 AL Groenlo
                  </p>
                </div>
              </div>
              <div>
                <a href="#" className="hover:text-[#1a1a1a] hover:underline">
                  Privacyvoorwaarden
                </a>
              </div>
            </div>

            {/* Follow Us Section */}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
