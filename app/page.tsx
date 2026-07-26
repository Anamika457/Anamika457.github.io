'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { projects, social, now, techMarquee } from '@/lib/data'
import RevealText from '@/components/RevealText'
import Marquee from '@/components/Marquee'

const cardBase =
  'rounded-3xl border border-base-200 dark:border-base-800 bg-subtle overflow-hidden relative'

export default function Home() {
  return (
    <div className="px-4 sm:px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${cardBase} md:col-span-4 p-8 sm:p-10`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-4">
              CS Student · AI/ML & Flutter
            </p>
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4">
              <RevealText text="Anamika V Menon" delay={0.1} />
            </h1>
            <p className="text-muted leading-relaxed max-w-md mb-8">
              Computer Science student building deep learning systems and
              cross-platform apps.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/projects/"
                  data-cursor="Go"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  View my work <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 border border-base-300 dark:border-base-700 hover:bg-base-100 dark:hover:bg-base-800 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Get in touch
                </Link>
              </motion.div>
              <div className="flex items-center gap-3 ml-1">
                <motion.a whileHover={{ scale: 1.3, rotate: -8 }} href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-current transition-colors">
                  <Github size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.3, rotate: 8 }} href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-current transition-colors">
                  <Linkedin size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.3, rotate: -8 }} href={`mailto:${social.email}`} aria-label="Email" className="text-muted hover:text-current transition-colors">
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Bold tilted word - no box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 flex items-center justify-center min-h-[300px] p-6"
            >
            <p className="font-display font-black text-5xl sm:text-5xl md:text-6xl text-lime-500 text-center leading-none flex flex-col items-center">
  <motion.span
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
  >
    Build.
  </motion.span>

  <motion.span
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
  >
    Break.
  </motion.span>

  <motion.span
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2.5, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
  >
    Learn.
  </motion.span>
</p>
          </motion.div>

          {/* Now card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`${cardBase} md:col-span-3 p-6 flex flex-col justify-center gap-2`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium">Now</p>
            <p className="text-sm leading-relaxed">{now.text}</p>
            <p className="text-xs text-muted">{now.location}</p>
          </motion.div>

          {/* Skills marquee card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`${cardBase} md:col-span-3 p-6 flex flex-col justify-center gap-3`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium">Toolkit</p>
            <Marquee items={techMarquee} />
          </motion.div>

          {/* Three equal-size project cards */}
          {projects.slice(0, 3).map((project, i) => (
            <motion.a
              key={project.slug}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="View repo"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`${cardBase} md:col-span-2 group hover:border-lime-500 transition-colors bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between min-h-[220px]`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-semibold text-base leading-snug">{project.title}</h3>
                  <ArrowUpRight size={18} className="shrink-0 text-muted group-hover:text-lime-500 group-hover:rotate-45 transition-all" />
                </div>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-base-50/60 dark:bg-base-950/40 text-muted backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}

          {/* Contact CTA */}
          <motion.a
            href={`mailto:${social.email}`}
            data-cursor="Email"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ y: -4 }}
            className={`${cardBase} md:col-span-6 p-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-lime-500 hover:bg-lime-400 border-lime-500 transition-colors text-black`}
          >
            <div>
              <p className="font-display font-black text-2xl mb-1">Let&apos;s build something.</p>
              <p className="text-sm opacity-80">Open to research collaborations and opportunities.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              {social.email} <ArrowUpRight size={18} />
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  )
}