import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export const ease = [0.4, 0, 0.2, 1]

export const pageVariants = {
  initial: { opacity: 0, y: 14 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.28, ease } },
}

export const fadeUpVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease, delay },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

/* Page wrapper */
export function Page({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

/* Scroll-triggered fade-up */
export function FadeUp({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  )
}

/* Stagger container */
export function StaggerGrid({ children, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

/* Clip-path text reveal — slides in from bottom */
export function RevealText({ children, delay = 0, className = '', as: Tag = 'div' }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        className={className}
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* Animated count-up number */
export function Counter({ target, suffix = '', duration = 1.6 }) {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-40px' })
  const motVal   = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const isNum = !isNaN(Number(target))
    if (!isNum) { setDisplay(target); return }
    const num = Number(target)
    const controls = animate(motVal, num, {
      duration,
      ease,
      onUpdate: v => setDisplay(Math.round(v).toString()),
    })
    return controls.stop
  }, [inView, target])

  return <span ref={ref}>{display}{suffix}</span>
}

/* Image reveal with clip-path */
export function ImageReveal({ src, alt, style = {}, imgStyle = {}, className = '' }) {
  return (
    <motion.div
      className={className}
      style={{ overflow: 'hidden', ...style }}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src} alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', ...imgStyle }}
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}

/* Horizontal line reveal */
export function LineReveal({ delay = 0, style = {} }) {
  return (
    <motion.div
      style={{ height: 1, background: 'var(--gold)', ...style }}
      initial={{ scaleX: 0, transformOrigin: 'left' }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    />
  )
}
