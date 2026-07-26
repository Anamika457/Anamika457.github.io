'use client'

import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <div className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">
            Projects
          </p>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-4">
            Research and builds
          </h1>
          <p className="text-muted max-w-xl leading-relaxed">
            A mix of independent AI/ML research, hackathon builds, and
            applied deep learning work, from vision-language models to
            medical imaging.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="View repo"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.005 }}
              className={`group rounded-2xl border border-base-200 dark:border-base-800 hover:border-lime-500 transition-colors p-6 bg-gradient-to-br ${project.gradient}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-display font-semibold text-lg transition-colors">
                  {project.title}
                </h2>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted group-hover:text-lime-500 group-hover:rotate-45 transition-all"
                />
              </div>

              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-base-50/60 dark:bg-base-950/40 text-muted backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-base-200 dark:border-base-800 flex flex-col gap-1">
                <p className="text-xs text-muted">
                  <span className="font-medium">{project.role}</span>
                </p>
                <p className="text-xs text-muted">{project.result}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          
            <a href="https://github.com/Anamika457"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-lime-500 transition-colors"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}