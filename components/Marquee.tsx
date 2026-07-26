'use client'

export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden w-full relative">
      <div className="flex animate-[marquee_25s_linear_infinite] w-max gap-8">
        {loop.map((item, i) => (
          <span key={i} className="text-sm font-medium text-muted whitespace-nowrap flex items-center gap-8">
            {item}
            <span className="text-lime-500">✦</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}