'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-base-200 dark:border-base-800 mt-32">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Anamika V Menon. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Anamika457"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-current transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/anamika-v-menon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-current transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:anamikavmenon1@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-current transition-colors"
          >
            <Mail size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}