import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Page, FadeUp } from '../motion'
import Accordion from '../components/Accordion'
import { useCart } from '../context/CartContext'

const ease = [0.4, 0, 0.2, 1]

const thumbs = [
  { src: '/img/serum-candle-lifestyle.webp', style: { objectPosition: '75% center' } },
  { src: '/img/candle-info.jpeg',           style: {} },
  { src: '/img/serum-flat.webp',             style: {} },
]

const accordionItems = [
  {
    title: 'Perfil aromático',
    content: (
      <div>
        <p><strong style={{color:'var(--dark)'}}>Bergamota</strong> — Claridad y enfoque. Sensación fresca y luminosa que impulsa la claridad mental.</p>
        <p><strong style={{color:'var(--dark)'}}>Lavanda</strong> — Calma. Perfil relajante para un ambiente de tranquilidad y bienestar emocional.</p>
        <p><strong style={{color:'var(--dark)'}}>Cedro del Atlas</strong> — Enraizamiento. Profundidad y estabilidad emocional a través de notas cálidas amaderadas.</p>
      </div>
    ),
  },
  {
    title: 'Modo de uso',
    content: <p>Enciende la vela en tu espacio de cuidado personal antes o durante tu rutina de skincare. Permite que su aroma te acompañe para crear un momento de pausa, respiración y conexión.</p>,
  },
  {
    title: 'Ficha técnica',
    content: (
      <table className="specs-table">
        <tbody>
          {[['Tipo','Vela aromática funcional'],['Cera','Vegetal de soya'],['Aroma','Bergamota, Lavanda, Cedro del Atlas'],['Mecha','Algodón'],['Peso','200 g'],['Combustión','Aprox. 40–45 horas'],['Origen','Colombia']].map(([k,v]) => (
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
        {['No dejar encendida sin supervisión.','Mantener alejada de materiales inflamables.','Colocar sobre superficie estable.','Cortar la mecha a 5 mm antes de cada uso.'].map(t => (
          <li key={t} style={{display:'flex',gap:8,fontSize:13,color:'var(--medium)'}}><span style={{color:'var(--gold)'}}>·</span>{t}</li>
        ))}
      </ul>
    ),
  },
]

export default function Vela() {
  const [active, setActive] = useState(0)
  const [qty, setQty]       = useState(1)
  const [added, setAdded]   = useState(false)
  const { addItem }         = useCart()

  return (
    <Page>
      <main className="product-detail">
        <div className="product-detail-grid">
          <div className="product-gallery" style={{ background: 'var(--sand)' }}>
            <div className="gallery-main">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={thumbs[active].src}
                  alt="Ritual Candle"
                  style={thumbs[active].style}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                />
              </AnimatePresence>
            </div>
            <div className="gallery-thumbs">
              {thumbs.map((t, i) => (
                <div key={i} className={`gallery-thumb${active===i?' active':''}`} onClick={() => setActive(i)}>
                  <img src={t.src} alt="" style={t.style} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <nav className="product-breadcrumb">
              <Link to="/">Inicio</Link><span>/</span>
              <Link to="/productos">Productos</Link><span>/</span>
              <span style={{color:'var(--dark)'}}>Ritual Candle</span>
            </nav>
            <div className="product-tag">Bienestar · Vela aromática</div>
            <h1 className="product-name">Ritual Candle</h1>
            <p className="product-subtitle">Vela funcional para bienestar y pausa consciente · 200 g</p>
            <div className="product-divider" />
            <div className="product-price">$89.000 <span style={{fontSize:'1rem',color:'var(--medium)',fontFamily:'var(--sans)',fontWeight:400}}>COP</span></div>

            <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:20}}>
              {['Bergamota','Lavanda','Cedro del Atlas'].map(a => <span key={a} className="badge badge-gold">{a}</span>)}
            </div>

            <ul className="product-benefits-list">
              {['Favorece momentos de relajación y pausa consciente','Aporta claridad mental y sensación de bienestar','Complementa tu rutina de skincare','Ayuda a crear un ambiente equilibrado y acogedor','Ritual que conecta mente, piel y emociones'].map(b => <li key={b}>{b}</li>)}
            </ul>

            <div style={{borderLeft:'2px solid var(--gold)',padding:'16px 20px',background:'var(--warm)',margin:'24px 0'}}>
              <p style={{fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1rem',color:'var(--medium)',lineHeight:1.7}}>
                "Mientras el sérum protege la piel del estrés externo, la vela actúa sobre el estrés interno."
              </p>
              <p style={{fontSize:10,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--light)',marginTop:8}}>— Filosofía nuhua skin</p>
            </div>

            <div className="product-qty">
              <button onClick={() => setQty(q => Math.max(1,q-1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q+1)}>+</button>
            </div>
            <div className="product-cta">
              <motion.button
                className="btn btn-dark btn-lg"
                style={{flex:2,pointerEvents:added?'none':'auto'}}
                onClick={() => { addItem({ productId: 14, quantity: qty }); setAdded(true); setTimeout(() => setAdded(false), 2200) }}
                whileTap={{ scale: 0.97 }}
              >
                {added ? '✓ Agregado' : 'Agregar al carrito'}
              </motion.button>
              <Link to="/kit" className="btn btn-outline" style={{flex:1}}>Ver kit</Link>
            </div>
            <div className="product-badges">
              {['Cera Vegetal','Cruelty Free','Sin Parafinas','Mecha Algodón','Empaque Reciclable'].map(b => <span key={b} className="badge">{b}</span>)}
            </div>
            <div className="product-divider" style={{margin:'32px 0'}} />
            <Accordion items={accordionItems} />
          </div>
        </div>
      </main>

      <section className="section quote-section">
        <div className="container">
          <FadeUp>
            <div className="quote-mark">"</div>
            <p className="quote-text">El lujo no es hacer más, es sentir mejor lo que ya haces.</p>
            <div className="divider divider-center mt-16" />
          </FadeUp>
        </div>
      </section>

      <section className="kit-section section">
        <div className="container">
          <div className="kit-grid">
            <FadeUp className="kit-media" style={{aspectRatio:'1',overflow:'hidden'}}>
              <img src="/img/woman-with-serum-for-skincare-on-dark-background-2026-01-05-23-56-47-utc.webp" alt="Ritual nuhua" loading="lazy" />
            </FadeUp>
            <FadeUp delay={0.12} className="kit-body">
              <div className="kit-eyebrow">Mejor juntos</div>
              <h2 className="kit-title">Completa tu ritual con el Sérum</h2>
              <p className="kit-desc">Suma el Radiance Serum a tu vela y vive la experiencia completa nuhua. Piel nutrida, mente en calma.</p>
              <div className="kit-includes">
                <div className="kit-includes-title">Kit incluye</div>
                <div className="kit-item"><div className="kit-item-dot"/><span>Radiance & Revitalizing Serum</span><span className="kit-item-detail">32 mL</span></div>
                <div className="kit-item"><div className="kit-item-dot"/><span>Ritual Candle</span><span className="kit-item-detail">200 g</span></div>
              </div>
              <div className="kit-pricing">
                <span className="kit-price">$259.000</span>
                <span className="kit-price-original">$278.000</span>
                <span className="kit-save">Ahorra $19k</span>
              </div>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <Link to="/kit" className="btn btn-gold">Ver Kit Ritual</Link>
                <Link to="/serum" className="btn btn-ghost-white">Ver sérum solo</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </Page>
  )
}
