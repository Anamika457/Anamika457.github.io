'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { social } from '@/lib/data'

export default function Contact() {
  return (
    <div className="px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">
            Contact
          </p>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-6">
            Let&apos;s talk
          </h1>
          <p className="text-muted leading-relaxed max-w-md mx-auto mb-12">
            Whether it&apos;s a research collaboration, an opportunity, or
            just a question about one of my projects, I&apos;d love to hear
            from you.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${social.email}`}
            data-cursor="Email"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black px-7 py-3.5 rounded-full text-sm font-semibold transition-colors mb-16"
          >
            <Mail size={16} />
            {social.email}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <motion.a
            whileHover={{ y: -4 }}
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Visit"
            className="group flex items-center justify-between p-5 rounded-2xl border border-base-200 dark:border-base-800 hover:border-lime-500 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Github size={20} />
              <div className="text-left">
                <p className="text-sm font-medium">GitHub</p>
                <p className="text-xs text-muted">@Anamika457</p>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-muted group-hover:text-lime-500 transition-colors" />
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Visit"
            className="group flex items-center justify-between p-5 rounded-2xl border border-base-200 dark:border-base-800 hover:border-lime-500 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Linkedin size={20} />
              <div className="text-left">
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-xs text-muted">Anamika V Menon</p>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-muted group-hover:text-lime-500 transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}