import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Page, FadeUp, StaggerGrid, StaggerItem } from '../motion'
import Accordion from '../components/Accordion'
import {
  IconHydration, IconVitamin, IconBotanical, IconShield, IconPeptide,
} from '../components/IngredientIcons'

const ease = [0.4, 0, 0.2, 1]

const thumbs = [
  { src: '/img/serum-lifestyle3.webp', alt: 'Lifestyle' },
  { src: '/img/serum-box.webp',        alt: 'Con caja' },
  { src: '/img/serum-arch.webp',       alt: 'Solo' },
  { src: '/img/serum-tray.webp',       alt: 'En bandeja' },
  { src: '/img/bg-3.webp',            alt: 'Aplicando' },
  { src: '/img/serum-white.jpeg',     alt: 'Blanco' },
]

const benefits = [
  'Hidratación profunda e inmediata en múltiples niveles',
  'Mejora la apariencia de firmeza y elasticidad',
  'Aporta luminosidad y uniformidad al tono de la piel',
  'Ayuda a reducir la apariencia de signos de fatiga',
  'Protección frente al estrés ambiental',
  'Textura ligera, no grasa · absorción rápida',
  'Apto para uso diario, día y noche',
]

const IngBenefits = ({ items }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 10 }}>
    {items.map(b => (
      <span key={b} style={{
        fontSize: 10, letterSpacing: '0.1em', padding: '3px 10px',
        border: '1px solid var(--border)', color: 'var(--medium)',
        textTransform: 'uppercase', fontWeight: 500,
      }}>{b}</span>
    ))}
  </div>
)

const accordionItems = [
  {
    title: 'Ingredientes estrella',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          {
            name: 'Ácido Hialurónico', latin: 'Sodium Hyaluronate',
            desc: 'Polisacárido biotecnológico con alta capacidad de retención de agua. Hidrata en múltiples niveles, mejora la elasticidad y aporta un efecto "plump" inmediato.',
            benefits: ['Hidratación profunda', 'Volumen', 'Suavidad', 'Luminosidad'],
          },
          {
            name: 'Niacinamida', latin: 'Niacinamide',
            desc: 'Forma activa de la vitamina B3 que ayuda a mejorar visiblemente la luminosidad, la uniformidad del tono y la apariencia de los poros. Fortalece la barrera cutánea y aporta equilibrio.',
            benefits: ['Luminosidad', 'Tono uniforme', 'Textura refinada', 'Piel equilibrada'],
          },
          {
            name: 'Bakuchiol', latin: 'Bakuchiol',
            desc: 'Activo botánico de origen natural reconocido por sus beneficios cosméticos relacionados con la renovación y la apariencia de firmeza, con alta tolerancia cutánea.',
            benefits: ['Mejora la textura', 'Suaviza líneas de expresión', 'Aporta luminosidad'],
          },
          {
            name: 'Ectoína', latin: 'Ectoin',
            desc: 'Molécula biotecnológica adaptógena que protege las células frente al estrés ambiental, ayuda a preservar la hidratación y mejora el confort de la piel.',
            benefits: ['Protección celular', 'Hidratación prolongada', 'Refuerzo de la barrera cutánea'],
          },
          {
            name: 'Péptido', latin: 'Acetyl Tetrapeptide-5',
            desc: 'Péptido biomimético diseñado para mejorar visiblemente la apariencia de fatiga en el contorno de ojos, aportando una mirada más fresca y descansada.',
            benefits: ['Disminuye la apariencia de bolsas', 'Reduce signos de fatiga'],
          },
        ].map(ing => (
          <div key={ing.name} style={{ paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <strong style={{ color: 'var(--dark)', fontFamily: 'var(--serif)', fontSize: '1rem' }}>{ing.name}</strong>
              <span style={{ fontSize: 11, color: 'var(--light)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>{ing.latin}</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--medium)', lineHeight: 1.75, marginBottom: 0 }}>{ing.desc}</p>
            <IngBenefits items={ing.benefits} />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Modo de uso',
    content: (
      <p>Aplicar de 2 a 4 gotas sobre la piel limpia y seca del rostro y cuello, incluyendo el contorno de ojos. Masajear suavemente hasta su completa absorción. Usar en la rutina de día y/o noche.</p>
    ),
  },
  {
    title: 'Ingredientes (INCI)',
    content: (
      <div>
        <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
          Aqua, Glycerin, Niacinamide, Propanediol, Sodium Hyaluronate, Bakuchiol, Ectoin, Acetyl Tetrapeptide-5, Allantoin, Panthenol, Beta-Glucan, Sodium PCA, Trehalose, Xanthan Gum, Citric Acid, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin.
        </p>
        <p style={{ fontSize: 11, color: 'var(--light)' }}>La lista completa de ingredientes se encuentra en el empaque.</p>
      </div>
    ),
  },
  {
    title: 'Ficha técnica',
    content: (
      <table className="specs-table">
        <tbody>
          {[
            ['Tipo de producto','Cosmético de uso tópico'],
            ['Categoría','Sérum facial'],
            ['Contenido neto','32 mL'],
            ['Apariencia','Líquido gel transparente'],
            ['Olor','Característico, suave'],
            ['pH (25°C)','5.0 – 6.0'],
            ['Tipo de piel','Todo tipo, incluso sensible'],
            ['Uso','Rostro y contorno de ojos'],
            ['Origen','Colombia'],
            ['Vida útil','24 meses'],
            ['PAO','6 meses después de abierto'],
            ['Presentación','Frasco de vidrio con gotero'],
          ].map(([k,v]) => (
            <tr key={k}><td>{k}</td><td>{v}</td></tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    title: 'Precauciones',
    content: (
      <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>
        {[
          'Uso externo.',
          'Evitar el contacto directo con los ojos.',
          'Suspender su uso en caso de irritación.',
          'Mantener fuera del alcance de los niños.',
          'Conservar en un lugar fresco, seco y protegido de la luz.',
        ].map(t => (
          <li key={t} style={{display:'flex',gap:8,alignItems:'flex-start',fontSize:13,color:'var(--medium)'}}><span style={{color:'var(--gold)'}}>·</span>{t}</li>
        ))}
      </ul>
    ),
  },
]

const ingredients = [
  { icon: <IconHydration />, name: 'Ácido Hialurónico', latin: 'Sodium Hyaluronate', desc: 'Hidratación profunda, volumen y efecto plump.' },
  { icon: <IconVitamin />,   name: 'Niacinamida',        latin: 'Niacinamide',        desc: 'Luminosidad, tono uniforme, barrera reforzada.' },
  { icon: <IconBotanical />, name: 'Bakuchiol',           latin: 'Bakuchiol',          desc: 'Textura mejorada, líneas suavizadas.' },
  { icon: <IconShield />,    name: 'Ectoína',             latin: 'Ectoin',             desc: 'Protección celular y barrera cutánea.' },
  { icon: <IconPeptide />,   name: 'Péptido',             latin: 'Acetyl Tetrapeptide-5', desc: 'Contorno de ojos visiblemente descansado.' },
]

export default function Serum() {
  const [active, setActive] = useState(0)
  const [qty, setQty]       = useState(1)
  const [added, setAdded]   = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <Page>
      <main className="product-detail">
        <div className="product-detail-grid">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={thumbs[active].src}
                  alt={thumbs[active].alt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                />
              </AnimatePresence>
            </div>
            <div className="gallery-thumbs">
              {thumbs.map((t, i) => (
                <div
                  key={i}
                  className={`gallery-thumb${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <img src={t.src} alt={t.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="product-info">
            <nav className="product-breadcrumb">
              <Link to="/">Inicio</Link>
              <span>/</span>
              <Link to="/productos">Productos</Link>
              <span>/</span>
              <span style={{ color: 'var(--dark)' }}>Sérum</span>
            </nav>
            <div className="product-tag">Skincare · Sérum facial</div>
            <h1 className="product-name">Radiance &<br />Revitalizing Serum</h1>
            <p className="product-subtitle">Sérum facial iluminador y revitalizante · 32 mL</p>

            {/* Claims principales */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '16px 0 20px' }}>
              {[
                'Hidratación profunda',
                'Piel firme y luminosa',
                'Paraben Free',
                'Día y noche',
              ].map(label => (
                <span key={label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 14px', border: '1px solid var(--border)',
                  fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--medium)',
                  fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                  {label}
                </span>
              ))}
            </div>

            <div className="product-divider" />

            {/* Descripción oficial */}
            <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.85, margin: '0 0 20px' }}>
              Sérum facial multifuncional de textura ligera y rápida absorción, formulado con activos de alta eficacia que trabajan en sinergia para hidratar profundamente, mejorar la luminosidad, uniformidad y firmeza de la piel. Apto para rostro y contorno de ojos.
            </p>

            <div className="product-price">
              $189.000 <span style={{ fontSize: '1rem', color: 'var(--medium)', fontFamily: 'var(--sans)', fontWeight: 400 }}>COP</span>
            </div>
            <ul className="product-benefits-list">
              {benefits.map(b => <li key={b}>{b}</li>)}
            </ul>
            <div className="product-qty">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <div className="product-cta">
              <motion.button
                className="btn btn-dark btn-lg"
                style={{ flex: 2, pointerEvents: added ? 'none' : 'auto' }}
                onClick={handleAdd}
                whileTap={{ scale: 0.97 }}
              >
                {added ? '✓ Agregado' : 'Agregar al carrito'}
              </motion.button>
              <Link to="/kit" className="btn btn-outline" style={{ flex: 1 }}>Ver kit</Link>
            </div>
            <div className="product-badges">
              {['Paraben Free','Cruelty Free','Clean Performance','Derm. Testeado','Todo tipo de piel'].map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
            <div className="product-divider" style={{ margin: '32px 0' }} />
            <Accordion items={accordionItems} />
          </div>
        </div>
      </main>

      {/* Lifestyle grid */}
      <section className="section">
        <div className="container">
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {['/img/serum-hero.webp', '/img/serum-tray.webp', '/img/serum-flat.webp'].map(src => (
              <motion.img
                key={src} src={src} alt="" loading="lazy"
                style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="section ingredients-section">
        <div className="container">
          <FadeUp className="ingredients-header">
            <div className="label text-gold mb-16">Ciencia funcional</div>
            <h2 className="heading-l">5 activos que transforman</h2>
            <p style={{ color: 'var(--medium)', fontSize: 14, maxWidth: 480, margin: '16px auto 0', lineHeight: 1.8 }}>
              Seleccionados por su eficacia demostrada y capacidad de trabajar en sinergia.
            </p>
          </FadeUp>
          <StaggerGrid className="ingredients-grid">
            {ingredients.map(ing => (
              <StaggerItem key={ing.name}>
                <div className="ingredient-card">
                  <div className="ingredient-icon">{ing.icon}</div>
                  <div className="ingredient-name">{ing.name}</div>
                  <div className="ingredient-latin">{ing.latin}</div>
                  <div className="ingredient-desc">{ing.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Kit CTA */}
      <section className="kit-section section">
        <div className="container">
          <div className="kit-grid">
            <FadeUp className="kit-media" style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src="/img/serum-candle-lifestyle.webp" alt="Kit Ritual" loading="lazy" />
            </FadeUp>
            <FadeUp delay={0.12} className="kit-body">
              <div className="kit-eyebrow">Completa tu ritual</div>
              <h2 className="kit-title">Agrega la Ritual Candle</h2>
              <p className="kit-desc">El sérum cuida tu piel. La vela cuida tu mente. Juntos crean el ritual completo que mereces.</p>
              <div className="kit-pricing">
                <span className="kit-price">$259.000</span>
                <span className="kit-price-original">$278.000</span>
                <span className="kit-save">Kit</span>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/kit" className="btn btn-gold">Ver Kit Ritual</Link>
                <Link to="/vela" className="btn btn-ghost-white">Ver vela sola</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="related-section section">
        <div className="container">
          <div className="label text-gold mb-16">También te puede interesar</div>
          <StaggerGrid className="related-grid">
            {[
              { to: '/vela', img: '/img/serum-candle-lifestyle.webp', imgStyle: { objectPosition: '80% center' }, tag: 'Bienestar', name: 'Ritual Candle', price: '$89.000' },
              { to: '/kit',  img: '/img/serum-flat.webp', tag: 'Kit', name: 'Kit Ritual nuhua', price: '$259.000' },
              { to: '/sobre-nosotros', bg: 'var(--sand)', tag: 'nuhua skin', name: 'Nuestra historia', desc: 'La filosofía detrás de cada fórmula.' },
            ].map(p => (
              <StaggerItem key={p.to}>
                <Link
                  to={p.to}
                  className="product-card"
                  style={p.bg ? { background: p.bg, padding: '40px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' } : {}}
                >
                  {!p.bg && (
                    <div className="product-card-img">
                      <img src={p.img} alt={p.name} loading="lazy" style={p.imgStyle} />
                    </div>
                  )}
                  <div className="product-card-tag">{p.tag}</div>
                  <div className="product-card-name" style={{ marginBottom: p.bg ? 12 : 8 }}>{p.name}</div>
                  {p.desc && <p style={{ fontSize: 13, color: 'var(--medium)', marginBottom: 20, lineHeight: 1.7 }}>{p.desc}</p>}
                  {p.price && (
                    <div className="product-card-footer">
                      <span className="product-card-price">{p.price}</span>
                      <span className="product-card-cta">Ver</span>
                    </div>
                  )}
                  {p.bg && <span className="product-card-cta">Leer más</span>}
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </Page>
  )
}
