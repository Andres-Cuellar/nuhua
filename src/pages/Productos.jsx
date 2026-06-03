import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page, FadeUp, StaggerGrid, StaggerItem, ImageReveal, RevealText } from '../motion'

const ease = [0.4, 0, 0.2, 1]

const whys = [
  { title: 'Transparencia total', desc: 'Conoces exactamente qué hay en tu fórmula y por qué. Sin ingredientes innecesarios.' },
  { title: 'Eficacia comprobada', desc: 'Activos con respaldo científico en concentraciones que funcionan. Dermatológicamente testeado.' },
  { title: 'Simplificación inteligente', desc: 'Un sérum que hace el trabajo de varios productos. Menos pasos, más resultados.' },
  { title: 'Responsabilidad consciente', desc: 'Cruelty Free, sin parabenos, empaque reciclable. Bueno para tu piel y para el planeta.' },
]

export default function Productos() {
  return (
    <Page>
      <header className="page-header">
        <div className="container">
          <FadeUp><div className="page-header-eyebrow">Colección nuhua skin</div></FadeUp>
          <RevealText delay={0.08}>
            <h1 className="page-header-title">Productos</h1>
          </RevealText>
          <FadeUp delay={0.16}><p className="page-header-sub">Fórmulas inteligentes y eficientes diseñadas para simplificar tu rutina sin sacrificar resultados.</p></FadeUp>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* ── SERUM: fila completa ─────────────────────────────── */}
          <FadeUp style={{ marginBottom: 24 }}>
            <Link
              to="/serum"
              className="product-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 0,
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
                {/* Imagen landscape full-width */}
                <motion.div
                  style={{ position: 'relative', overflow: 'hidden', background: 'var(--warm)', aspectRatio: '16/7' }}
                  whileHover="hover"
                >
                  <motion.img
                    src="/img/serum-lifestyle2.png"
                    alt="Radiance Serum nuhua"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
                    variants={{ hover: { scale: 1.03 } }}
                    transition={{ duration: 0.9, ease }}
                  />
                  <span className="product-card-flag gold">Más vendido</span>
                </motion.div>

                {/* Info horizontal row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px 24px',
                  padding: '20px 0 0',
                }}>
                  <div>
                    <div className="product-card-tag">Skincare · Sérum</div>
                    <div className="product-card-name" style={{ fontSize: '1.5rem', marginBottom: 6 }}>
                      Radiance & Revitalizing Serum
                    </div>
                    <div className="product-card-desc" style={{ marginBottom: 0, maxWidth: 500 }}>
                      Sérum facial multifuncional. Ácido Hialurónico, Niacinamida, Bakuchiol, Ectoína y Péptido. Todo tipo de piel. 32 mL.
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
                    <span className="product-card-price" style={{ fontSize: '1.4rem' }}>$189.000</span>
                    <span className="product-card-cta" style={{ opacity: 1 }}>Ver producto</span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* ── VELA + KIT: 50/50 ───────────────────────────────── */}
          <StaggerGrid style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              {
                to: '/vela',
                img: '/img/serum-candle-lifestyle.png',
                imgStyle: { objectPosition: '80% center' },
                tag: 'Bienestar · Vela',
                name: 'Ritual Candle',
                desc: 'Bergamota, Lavanda y Cedro del Atlas. Cera vegetal de soya. 200 g · 40–45 h.',
                price: '$89.000',
              },
              {
                to: '/kit',
                img: '/img/serum-flat.png',
                imgStyle: {},
                flag: 'Kit',
                tag: 'Experiencia · Kit',
                name: 'Kit Ritual nuhua',
                desc: 'Sérum + Vela. La rutina completa. El regalo perfecto.',
                price: '$259.000',
              },
            ].map(p => (
              <StaggerItem key={p.to}>
                <Link to={p.to} className="product-card">
                  <motion.div className="product-card-img" whileHover="hover">
                    <motion.img
                      src={p.img} alt={p.name} loading="lazy"
                      style={p.imgStyle}
                      variants={{ hover: { scale: 1.04 } }}
                      transition={{ duration: 0.9, ease }}
                    />
                    {p.flag && <span className="product-card-flag">{p.flag}</span>}
                  </motion.div>
                  <div className="product-card-tag">{p.tag}</div>
                  <div className="product-card-name">{p.name}</div>
                  <div className="product-card-desc">{p.desc}</div>
                  <div className="product-card-footer">
                    <span className="product-card-price">{p.price}</span>
                    <span className="product-card-cta">Ver producto</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ¿Por qué nuhua? */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <FadeUp className="text-center mb-48">
            <div className="label text-gold mb-16">¿Por qué nuhua?</div>
            <h2 className="heading-l">Formulados con propósito</h2>
          </FadeUp>
          <StaggerGrid style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {whys.map(w => (
              <StaggerItem key={w.title}>
                <div style={{ background: 'var(--warm)', padding: '40px 32px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 500, marginBottom: 12 }}>{w.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--medium)', lineHeight: 1.8 }}>{w.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA dark */}
      <section className="section kit-section">
        <div className="container text-center">
          <FadeUp>
            <div className="label" style={{ color: 'var(--gold)', marginBottom: 16 }}>Empieza hoy</div>
            <h2 className="kit-title" style={{ marginBottom: 16, maxWidth: 600, marginInline: 'auto' }}>
              Transforma tu rutina con una sola decisión.
            </h2>
            <p style={{ fontSize: 14, opacity: 0.65, marginBottom: 36, maxWidth: 440, marginInline: 'auto', lineHeight: 1.8 }}>
              Todos nuestros productos llegan con envío rápido a todo Colombia.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/serum" className="btn btn-gold btn-lg">Comprar sérum</Link>
              <Link to="/kit"   className="btn btn-ghost-white">Ver kit ritual</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Page>
  )
}
