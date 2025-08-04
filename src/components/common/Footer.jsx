import React from "react";
import { motion } from "framer-motion";

const logoUrl = "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752143212/SkilliZee_White_Trans.12_nqmvqx.png";

const socials = [
  {
    href: "https://www.instagram.com/skillizee.club/",
    label: "Instagram",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/skillizee/",
    label: "LinkedIn",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.599v5.597z"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@SkilliZee-UpskillingYoungMinds",
    label: "YouTube",
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.454 3.5 12 3.5 12 3.5s-7.454 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.12 0 12 0 12s0 3.88.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.546 20.5 12 20.5 12 20.5s7.454 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.88 24 12 24 12s0-3.88-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer-skillizee">
      <motion.img
        src={logoUrl}
        alt="Skillizee Logo"
        className="footer-logo mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="footer-heading text-[10px] sm:text-xs md:text-base font-extrabold text-white text-center sm:whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ color: "white"}}
        viewport={{ once: true }}
      >
        Real Skills, Real World, Real Impact
      </motion.div>
      <div className="footer-socials">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.18, backgroundColor: "#00308A", color: "#fff" }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            viewport={{ once: true }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
      {/* Contact Details */}
      <motion.div
        className="mt-2 mb-2 text-lg font-semibold text-[#00308A] flex flex-row items-center justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        viewport={{ once: true }}
      >
        <a href="tel:+919773353232" className="flex items-center gap-2 text-base text-white/90 hover:text-blue-200 transition" aria-label="Call us">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#00308A]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a1.5 1.5 0 00-1.5-1.5h-2.25a.75.75 0 01-.75-.75v-2.25a.75.75 0 01.75-.75h2.25a1.5 1.5 0 001.5-1.5V6.75A2.25 2.25 0 0017.25 4.5h0c-8.284 0-15 6.716-15 15z" />
          </svg>
          (+91) 97733 53232
        </a>
        <a href="mailto:info.skillizee@gmail.com" className="flex items-center gap-2 text-base text-white/90 hover:text-blue-200 transition" aria-label="Email us">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#00308A]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625a2.25 2.25 0 01-.876-1.8V6.75" />
          </svg>
          info.skillizee@gmail.com
        </a>
      </motion.div>
      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} SkilliZee. All Rights Reserved.
      </motion.div>
    </footer>
  );
} 