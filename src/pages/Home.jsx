import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Page, FadeUp, StaggerGrid, StaggerItem,
  RevealText, Counter, ImageReveal, LineReveal,
} from '../motion'
import Strip from '../components/Strip'
import {
  IconHydration, IconVitamin, IconBotanical, IconShield, IconPeptide,
} from '../components/IngredientIcons'

const ease = [0.4, 0, 0.2, 1]

const heroText = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
}
const heroItem = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const ingredients = [
  { icon: <IconHydration />, name: 'Ácido Hialurónico', latin: 'Sodium Hyaluronate', desc: 'Hidratación profunda en múltiples niveles. Efecto plump inmediato.' },
  { icon: <IconVitamin />,   name: 'Niacinamida',        latin: 'Niacinamide',        desc: 'Luminosidad, tono uniforme, poros refinados. Vitamina B3.' },
  { icon: <IconBotanical />, name: 'Bakuchiol',           latin: 'Bakuchiol',          desc: 'Botánico de alta tolerancia. Firmeza y renovación celular.' },
  { icon: <IconShield />,    name: 'Ectoína',             latin: 'Ectoin',             desc: 'Molécula adaptógena. Protección frente al estrés ambiental.' },
  { icon: <IconPeptide />,   name: 'Péptido',             latin: 'Acetyl Tetrapeptide-5', desc: 'Biomimético. Contorno de ojos visiblemente descansado.' },
]

const stats = [
  { num: '5',  label: 'Activos clave' },
  { num: '24', label: 'Meses vida útil' },
  { num: '0',  label: 'Parabenos' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <Page>
      {/* ── Hero ─────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-media">
          <motion.img
            src="/img/bg-4.webp"
            alt="nuhua Radiance Serum"
            style={{ y: heroImgY }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: 'linear' }}
          />
        </div>
        <div className="hero-overlay" />
        <motion.div className="hero-content" style={{ opacity: heroOpacity }}>
          <motion.div variants={heroText} initial="hidden" animate="visible">
            <motion.p className="hero-eyebrow" variants={heroItem}>
              Nuhua Skin · Radiance Serum
            </motion.p>

            {/* Clip reveal for title */}
            <div style={{ overflow: 'hidden', marginBottom: 24 }}>
              <motion.h1
                className="hero-title"
                style={{ marginBottom: 0 }}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              >
                Menos pasos.<br />Mejor piel.
              </motion.h1>
            </div>

            <motion.p className="hero-sub" variants={heroItem}>
              Alta ciencia, cero fricción. Un sérum que reemplaza múltiples pasos de tu rutina.
            </motion.p>
            <motion.div className="hero-cta" variants={heroItem}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/serum" className="btn btn-white">Descubrir sérum</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/productos" className="btn btn-ghost-white">Ver todos</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <span className="hero-scroll">Scroll</span>
      </section>

      {/* ── Strip ────────────────────────── */}
      <Strip />

      {/* ── Feature Serum ────────────────── */}
      <section className="section">
        <div className="container">
          <div className="feature">
            <FadeUp className="feature-media">
              <motion.div
                className="feature-media-inner"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease }}
              >
                <img src="/img/serum-box.png" alt="Nuhua Radiance Serum" loading="lazy" />
              </motion.div>
              <div className="feature-accent" />
            </FadeUp>

            <div className="feature-body">
              <FadeUp>
                <div className="feature-eyebrow">Producto estrella</div>
              </FadeUp>
              <RevealText delay={0.08}>
                <h2 className="feature-title">Radiance &<br />Revitalizing Serum</h2>
              </RevealText>
              <FadeUp delay={0.12}>
                <p className="feature-desc">
                  Sérum facial multifuncional de textura ligera y rápida absorción.
                  Formulado con activos de alta eficacia que trabajan en sinergia para
                  hidratar profundamente, mejorar la luminosidad, uniformidad y firmeza.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <ul className="feature-list">
                  <li>Hidratación profunda e inmediata</li>
                  <li>Mejora la apariencia de firmeza y elasticidad</li>
                  <li>Aporta luminosidad y uniformidad al tono</li>
                  <li>Protección frente al estrés ambiental</li>
                  <li>Uso diario · día y noche · 32 mL</li>
                </ul>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="feature-badges">
                  {['Paraben Free','Cruelty Free','Clean Performance','Derm. Testeado'].map(b => (
                    <motion.span key={b} className="badge" whileHover={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>{b}</motion.span>
                  ))}
                </div>
              </FadeUp>
              <FadeUp delay={0.24}>
                <div className="feature-price">Desde <strong>$189.000</strong> COP</div>
                <div className="feature-actions">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/serum" className="btn btn-dark btn-lg">Ver sérum</Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/serum" className="btn btn-outline">Ingredientes</Link>
                  </motion.div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ingredients ──────────────────── */}
      <section className="section ingredients-section">
        <div className="container">
          <FadeUp className="ingredients-header">
            <div className="label text-gold mb-16">Ingredientes estrella</div>
            <div style={{ overflow: 'hidden' }}>
              <RevealText>
                <h2 className="heading-l">Ciencia funcional.<br />Resultados visibles.</h2>
              </RevealText>
            </div>
            <LineReveal delay={0.2} style={{ maxWidth: 48, marginTop: 16 }} />
          </FadeUp>
          <StaggerGrid className="ingredients-grid">
            {ingredients.map(ing => (
              <StaggerItem key={ing.name}>
                <motion.div
                  className="ingredient-card"
                  whileHover={{ backgroundColor: 'var(--sand)', y: -2 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="ingredient-icon">{ing.icon}</div>
                  <div className="ingredient-name">{ing.name}</div>
                  <div className="ingredient-latin">{ing.latin}</div>
                  <div className="ingredient-desc">{ing.desc}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Stats ────────────────────────── */}
      <div className="container" style={{ paddingBottom: 0 }}>
        <StaggerGrid className="stats-row">
          {stats.map(s => (
            <StaggerItem key={s.label}>
              <div className="stat-item">
                <div className="stat-num">
                  <Counter target={s.num} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      {/* ── Products teaser ──────────────── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="label text-gold mb-8">Colección completa</div>
              <RevealText>
                <h2 className="heading-l">Nuestros productos</h2>
              </RevealText>
            </div>
            <Link to="/productos" className="btn btn-outline btn-sm">Ver todos</Link>
          </div>
          <StaggerGrid className="products-grid-2">
            {[
              {
                to: '/serum', img: '/img/serum-arch.png',
                tag: 'Skincare', name: 'Radiance & Revitalizing Serum',
                desc: 'Sérum facial con 5 activos de alta eficacia. 32 mL.',
                price: '$189.000', flag: 'Más vendido', flagClass: 'gold',
              },
              {
                to: '/vela', img: '/img/serum-candle-lifestyle.png',
                imgStyle: { objectPosition: '80% center' },
                tag: 'Bienestar', name: 'Ritual Candle',
                desc: 'Bergamota, Lavanda y Cedro del Atlas. Cera vegetal. 200 g.',
                price: '$89.000',
              },
            ].map(p => (
              <StaggerItem key={p.to}>
                <Link to={p.to} className="product-card">
                  <motion.div className="product-card-img" whileHover="hover">
                    <motion.img
                      src={p.img} alt={p.name} loading="lazy"
                      style={p.imgStyle}
                      variants={{ hover: { scale: 1.04 } }}
                      transition={{ duration: 0.8, ease }}
                    />
                    {p.flag && <span className={`product-card-flag ${p.flagClass || ''}`}>{p.flag}</span>}
                  </motion.div>
                  <div className="product-card-tag">{p.tag}</div>
                  <div className="product-card-name">{p.name}</div>
                  <div className="product-card-desc">{p.desc}</div>
                  <div className="product-card-footer">
                    <span className="product-card-price">{p.price}</span>
                    <span className="product-card-cta">Descubrir</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Kit ──────────────────────────── */}
      <section className="kit-section section">
        <div className="container">
          <div className="kit-grid">
            <ImageReveal
              src="/img/serum-candle-lifestyle.png"
              alt="Kit Ritual nuhua"
              style={{ aspectRatio: '1' }}
              imgStyle={{ objectFit: 'cover' }}
            />
            <FadeUp delay={0.15} className="kit-body">
              <div className="kit-eyebrow">Experiencia completa</div>
              <RevealText delay={0.05}>
                <h2 className="kit-title">Kit Ritual nuhua</h2>
              </RevealText>
              <FadeUp delay={0.1}>
                <p className="kit-desc">
                  Mientras el sérum protege tu piel del estrés externo, la vela actúa sobre
                  el estrés interno. Juntos transforman tu rutina en un momento de conexión,
                  calma y bienestar integral.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="kit-includes">
                  <div className="kit-includes-title">Incluye</div>
                  <div className="kit-item"><div className="kit-item-dot"/><span>Radiance & Revitalizing Serum</span><span className="kit-item-detail">32 mL</span></div>
                  <div className="kit-item"><div className="kit-item-dot"/><span>Ritual Candle</span><span className="kit-item-detail">200 g</span></div>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="kit-pricing">
                  <span className="kit-price">$259.000</span>
                  <span className="kit-price-original">$278.000</span>
                  <span className="kit-save">Ahorra $19k</span>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/kit" className="btn btn-gold btn-lg">Ver kit completo</Link>
                </motion.div>
              </FadeUp>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Quote ────────────────────────── */}
      <section className="section quote-section">
        <div className="container">
          <FadeUp>
            <div className="quote-mark">"</div>
            <RevealText>
              <p className="quote-text">
                La piel no necesita más productos. Necesita los correctos, con los activos correctos, en la formulación correcta.
              </p>
            </RevealText>
            <LineReveal delay={0.1} style={{ maxWidth: 48, margin: '24px auto 16px' }} />
            <p className="quote-attr">— Filosofía nuhua skin</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Feature Hand ─────────────────── */}
      <section className="section">
        <div className="container">
          <div className="feature reverse">
            <ImageReveal
              src="/img/serum-hand.png"
              alt="Sérum nuhua en manos"
              className="feature-media"
              style={{ aspectRatio: '4/5' }}
            />
            <div className="feature-body">
              <FadeUp>
                <div className="feature-eyebrow">Formulación inteligente</div>
              </FadeUp>
              <RevealText delay={0.08}>
                <h2 className="feature-title">Una fórmula.<br />Múltiples resultados.</h2>
              </RevealText>
              <FadeUp delay={0.1}>
                <p className="feature-desc">
                  Textura ligera de gel transparente con rápida absorción. Sin residuo, sin grasa.
                  Diseñado para usarse mañana y noche, solo o como primer paso de tu rutina.
                </p>
              </FadeUp>
              <FadeUp delay={0.14}>
                <ul className="feature-list">
                  <li>Apto para rostro y contorno de ojos</li>
                  <li>Todo tipo de piel, incluso sensible</li>
                  <li>pH 5.0–6.0 · respeta el microbioma cutáneo</li>
                  <li>Sin parabenos, sin colorantes artificiales</li>
                </ul>
              </FadeUp>
              <FadeUp delay={0.18}>
                <div className="feature-actions">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/serum" className="btn btn-dark">Comprar ahora</Link>
                  </motion.div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
