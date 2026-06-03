import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const links = [
  { to: '/',               label: 'Inicio' },
  { to: '/productos',      label: 'Productos' },
  { to: '/sobre-nosotros', label: 'Nosotros' },
  { to: '/contacto',       label: 'Contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()
  const isHome   = location.pathname === '/'

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const toggleMenu = () => {
    setOpen(v => {
      document.body.style.overflow = v ? '' : 'hidden'
      return !v
    })
  }

  const navCls = [
    'nav',
    scrolled ? 'scrolled' : '',
    isHome && !scrolled ? 'on-dark' : '',
  ].join(' ')

  return (
    <>
      <motion.nav
        className={navCls}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4,0,0.2,1] }}
      >
        {/* Scroll progress bar */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0, left: 0,
            height: '2px',
            background: 'var(--gold)',
            scaleX: scrollYProgress,
            transformOrigin: 'left',
            zIndex: 10,
            width: '100%',
          }}
        />

        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img
              src="/img/logo_nuhua.png"
              alt="nuhua skin"
              className="nav-logo-img"
            />
          </Link>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={location.pathname === l.to ? 'active' : ''}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="nav-burger" aria-label="Menu" onClick={toggleMenu}>
            <motion.span
              animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.28 }}
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.28 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            style={{
              position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0,
              background: 'var(--cream)', padding: '40px var(--px) 48px',
              zIndex: 190, borderBottom: '1px solid var(--border)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={l.to}
                    style={{
                      fontFamily: 'var(--serif)', fontSize: '2rem',
                      fontWeight: 400, color: 'var(--dark)',
                    }}
                    onClick={() => { setOpen(false); document.body.style.overflow = '' }}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
