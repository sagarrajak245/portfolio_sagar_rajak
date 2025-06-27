/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { PROJECTS } from '../constants'

// Helper to map your PROJECTS to ChromaGrid-style items
const mapProjectsToGridItems = (projects) =>
  projects.map((p, i) => ({
    image: p.image,
    title: p.title,
    subtitle: p.description,
    handle: p.github ? "View on GitHub" : "",
    url: p.github,
    tech: p.technologies,
    borderColor: '#0891b2',
    gradient: `linear-gradient(${150 + (i % 3) * 30}deg, #0891b2, #000)`,
  }))

// Card component
const ProjectCard = ({ c, handleCardClick, handleCardMove }) => (
  <article
    onMouseMove={handleCardMove}
    onClick={() => handleCardClick(c.url)}
    className="group relative flex flex-col w-full max-w-[400px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
    style={{
      "--card-border": c.borderColor || "transparent",
      background: c.gradient,
      "--spotlight-color": "rgba(255,255,255,0.3)",
    }}
  >
    {/* Spotlight Effect */}
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
      }}
    />

    {/* Image */}
    <div className="relative z-10 overflow-hidden rounded-t-[20px] aspect-[4/3] p-2">
      <img
        src={c.image}
        alt={c.title}
        className="w-full h-full object-cover"
      />
    </div>


    {/* Text Content */}
    <footer className="relative z-10 p-4 text-white font-sans flex flex-col gap-2">
      <h3 className="text-lg font-bold">{c.title}</h3>

      {Array.isArray(c.subtitle) ? (
        <ul className="text-sm opacity-85 list-disc list-inside space-y-1">
          {c.subtitle.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm opacity-85">{c.subtitle}</p>
      )}

      {c.tech && (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 flex flex-wrap gap-2">
          {c.tech.map((t, idx) => (
            <span key={idx} className="text-xs text-white/80">{t}</span>
          ))}
        </div>
      )}
      {c.handle && (
        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 underline text-sm mt-1"
        >
          {c.handle}
        </a>
      )}
    </footer>
  </article>
)

// Main grid container with GSAP hover tracking
function Projects() {
  const items = mapProjectsToGridItems(PROJECTS)
  const rootRef = useRef(null)
  const fadeRef = useRef(null)
  const setX = useRef(null)
  const setY = useRef(null)
  const pos = useRef({ x: 0, y: 0 })

  const radius = 300
  const damping = 0.45
  const fadeOut = 0.6
  const ease = "power3.out"

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    setX.current = gsap.quickSetter(el, "--x", "px")
    setY.current = gsap.quickSetter(el, "--y", "px")
    const { width, height } = el.getBoundingClientRect()
    pos.current = { x: width / 2, y: height / 2 }
    setX.current(pos.current.x)
    setY.current(pos.current.y)
  }, [])

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x)
        setY.current?.(pos.current.y)
      },
      overwrite: true,
    })
  }

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect()
    moveTo(e.clientX - r.left, e.clientY - r.top)
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true })
  }

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true })
  }

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleCardMove = (e) => {
    const c = e.currentTarget
    const rect = c.getBoundingClientRect()
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-center md:text-6xl font-semibold bg-gradient-to-r from-stone-100 to-stone-700 bg-clip-text text-transparent text-4xl'
      >
        Projects
      </motion.h1>

      <div
        ref={rootRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10"
        style={{
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        }}
      >
        {items.map((c, i) => (
          <ProjectCard
            key={i}
            c={c}
            handleCardClick={handleCardClick}
            handleCardMove={handleCardMove}
          />
        ))}

        {/* Dark spotlight layer */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: "grayscale(1) brightness(0.78)",
            WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
            background: "rgba(0,0,0,0.001)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          }}
        />

        {/* Fade-in mask on leave */}
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: "grayscale(1) brightness(0.78)",
            WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
            background: "rgba(0,0,0,0.001)",
            maskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
            opacity: 1,
          }}
        />
      </div>
    </div>
  )
}

export default Projects
