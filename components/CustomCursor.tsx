'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]')
      if (target) {
        setLabel(target.getAttribute('data-cursor') || '')
        setActive(true)
      } else if ((e.target as HTMLElement).closest('a, button')) {
        setLabel('')
        setActive(true)
      } else {
        setActive(false)
        setLabel('')
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="hidden md:flex fixed top-0 left-0 z-[100] pointer-events-none items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 ease-out rounded-full bg-lime-500 text-black text-xs font-medium"
      style={{
        width: active ? (label ? 80 : 20) : 10,
        height: active ? (label ? 32 : 20) : 10,
      }}
    >
      {label}
    </div>
  )
}