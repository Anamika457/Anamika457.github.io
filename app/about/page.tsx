'use client'

import { motion } from 'framer-motion'
import { experience, skills } from '@/lib/data'

export default function About() {
  return (
    <div className="px-6 py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-3">
            About
          </p>
          <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-6">
            Anamika V Menon
          </h1>
          <p className="text-muted leading-relaxed text-lg">
            I&apos;m a Computer Science and Engineering undergraduate at
            Amrita Vishwa Vidyapeetham, with a strong foundation in deep
            learning and a growing focus on AI/ML research. I&apos;ve worked
            end-to-end with neural networks; CNNs, autoencoders, and
            neuro-symbolic architectures, using PyTorch, alongside
            cross-platform mobile development in Flutter. I enjoy taking
            problems from literature review through experimentation to
            deployment, and I&apos;m especially drawn to explainable AI and
            applying research to real-world systems. Outside of coursework, I
            contribute to open-source ML libraries and help organize
            hackathons through amFOSS, my college&apos;s tech community.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-6">
            Experience
          </p>
          <div className="flex flex-col gap-8">
            {experience.map((item) => (
              <div key={item.title} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6">
                <p className="text-xs text-muted pt-1">{item.period}</p>
                <div>
                  <h3 className="font-medium text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted mb-3">
                    {item.org} · {item.location}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-base-400"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium mb-6">
            Skills
          </p>
          <div className="flex flex-col gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6">
                <p className="text-sm font-medium text-muted pt-0.5">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-base-100 dark:bg-base-800 text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}