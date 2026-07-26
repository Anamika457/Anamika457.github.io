'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
      <div className="flex items-center justify-between gap-4 rounded-full border border-base-200 dark:border-base-800 bg-white/70 dark:bg-base-950/70 backdrop-blur-lg px-5 py-3 shadow-sm shadow-black/5">
        <Link href="/" data-cursor="Home" className="font-display font-semibold text-sm tracking-tight whitespace-nowrap">
          Anamika V Menon
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname?.startsWith(link.href))
            return (
              <motion.div key={link.href} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors block ${
                    active
                      ? 'bg-lime-500 text-black font-medium'
                      : 'text-muted hover:text-current hover:bg-base-100 dark:hover:bg-base-800'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-base-100 dark:hover:bg-base-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </motion.button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full hover:bg-base-100 dark:hover:bg-base-800 transition-colors"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-base-200 dark:border-base-800 bg-white/90 dark:bg-base-950/90 backdrop-blur-lg p-2 shadow-sm">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname?.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                  active
                    ? 'bg-lime-500 text-black font-medium'
                    : 'text-muted hover:text-current hover:bg-base-100 dark:hover:bg-base-800'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}