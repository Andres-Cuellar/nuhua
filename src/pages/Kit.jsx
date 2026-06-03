import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page, FadeUp, StaggerGrid, StaggerItem } from '../motion'
import Strip from '../components/Strip'

const ease = [0.4, 0, 0.2, 1]

const whys = [
  { num: '$19k', title: 'Ahorro real', desc: 'Vs. comprarlos por separado. El kit es la forma más inteligente de comenzar tu ritual.' },
  { num: '2 en 1', title: 'Cuidado integral', desc: 'Piel nutrida por fuera. Mente tranquila por dentro. Un ritual completo.' },
  { num: '◇', title: 'Regalo perfecto', desc: 'Presentación premium. Ideal para regalar o darte el regalo que mereces.' },
  { num: 'CO', title: 'Hecho en Colombia', desc: 'Formulación local de alta calidad. Apoyando la industria cosmética colombiana.' },
]

export default function Kit() {
  const [added, setAdded] = useState(false)

  return (
    <Page>
      {/* Hero oscuro */}
      <section style={{ position:'relative', minHeight:'100svh', display:'flex', alignItems:'flex-end', overflow:'hidden' }}>
        <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
          <motion.img
            src="/img/bg-4.webp"
            alt=""
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',filter:'brightness(0.35)'}}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: 'linear' }}
          />
        </div>
        <div style={{position:'relative',zIndex:1,width:'100%',maxWidth:'var(--max)',margin:'0 auto',padding:'120px var(--px) 80px'}}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.12, delayChildren:0.2 } } }}
          >
            {[
              { el:'div', cls:'kit-eyebrow', text:'Experiencia completa · Kit' },
            ].map(({el:El,cls,text},i) => null)}

            <motion.div className="kit-eyebrow" variants={{ hidden:{opacity:0,y:16}, visible:{opacity:1,y:0,transition:{duration:0.6,ease}} }} style={{textAlign:'left'}}>
              Experiencia completa · Kit
            </motion.div>
            <motion.h1
              style={{fontFamily:'var(--serif)',fontSize:'clamp(3rem,9vw,6.5rem)',fontWeight:300,fontStyle:'italic',lineHeight:0.98,color:'var(--white)',marginBottom:24,maxWidth:700}}
              variants={{ hidden:{opacity:0,y:24}, visible:{opacity:1,y:0,transition:{duration:0.7,ease}} }}
            >
              Kit Ritual<br />nuhua
            </motion.h1>
            <motion.p
              style={{fontSize:15,color:'rgba(255,255,255,0.75)',maxWidth:460,lineHeight:1.8,marginBottom:40}}
              variants={{ hidden:{opacity:0,y:16}, visible:{opacity:1,y:0,transition:{duration:0.6,ease}} }}
            >
              La rutina completa para tu piel y tu mente. Sérum de alta eficacia + vela aromática funcional.
            </motion.p>
            <motion.div
              style={{display:'flex',alignItems:'center',gap:24,flexWrap:'wrap',marginBottom:48}}
              variants={{ hidden:{opacity:0}, visible:{opacity:1,transition:{duration:0.5,ease}} }}
            >
              <span style={{fontFamily:'var(--serif)',fontSize:'2.5rem',fontWeight:300,color:'var(--white)'}}>$259.000</span>
              <span style={{fontSize:'1rem',color:'rgba(255,255,255,0.45)',textDecoration:'line-through',fontFamily:'var(--serif)'}}>$278.000</span>
              <span className="kit-save">Ahorra $19.000</span>
            </motion.div>
            <motion.div
              style={{display:'flex',gap:12,flexWrap:'wrap'}}
              variants={{ hidden:{opacity:0,y:12}, visible:{opacity:1,y:0,transition:{duration:0.5,ease}} }}
            >
              <motion.button
                className="btn btn-gold btn-lg"
                style={{pointerEvents:added?'none':'auto'}}
                onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2200) }}
                whileTap={{ scale: 0.97 }}
              >
                {added ? '✓ Agregado' : 'Agregar kit al carrito'}
              </motion.button>
              <a href="#detalle" className="btn btn-ghost-white">Ver detalle</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Strip />

      {/* Detalle */}
      <section className="section" id="detalle">
        <div className="container">
          <FadeUp className="text-center mb-48">
            <div className="label text-gold mb-16">Lo que incluye</div>
            <h2 className="heading-xl">Dos productos. Un ritual.</h2>
          </FadeUp>

          {/* Serum */}
          <div className="feature" style={{marginBottom:80}}>
            <FadeUp className="feature-media">
              <motion.div className="feature-media-inner" whileHover={{scale:1.02}} transition={{duration:0.7,ease}}>
                <img src="/img/close-up-portrait-of-beautiful-half-naked-woman-us-2026-03-24-02-57-33-utc.webp" alt="Radiance Serum" loading="lazy" />
              </motion.div>
              <div className="feature-accent" />
            </FadeUp>
            <FadeUp delay={0.12} className="feature-body">
              <div className="feature-eyebrow">01 · Skincare</div>
              <h2 className="feature-title">Radiance &<br />Revitalizing Serum</h2>
              <p className="feature-desc">Sérum facial multifuncional con 5 activos de alta eficacia para hidratar, iluminar y fortalecer la piel.</p>
              <ul className="feature-list">
                <li>Ácido Hialurónico — hidratación profunda</li>
                <li>Niacinamida — luminosidad y tono uniforme</li>
                <li>Bakuchiol — firmeza y renovación</li>
                <li>Ectoína — protección ambiental</li>
                <li>Péptido — contorno de ojos revitalizado</li>
              </ul>
              <div className="feature-badges">
                {['32 mL','Paraben Free','Día y Noche'].map(b => <span key={b} className="badge">{b}</span>)}
              </div>
              <Link to="/serum" className="btn btn-outline btn-sm mt-16">Ver más del sérum</Link>
            </FadeUp>
          </div>

          {/* Candle */}
          <div className="feature reverse">
            <FadeUp className="feature-media">
              <div className="feature-media-inner" style={{background:'var(--sand)'}}>
                <img src="/img/serum-candle-lifestyle.webp" alt="Ritual Candle" loading="lazy" style={{objectPosition:'80% center'}} />
              </div>
            </FadeUp>
            <FadeUp delay={0.12} className="feature-body">
              <div className="feature-eyebrow">02 · Bienestar</div>
              <h2 className="feature-title">Ritual<br />Candle</h2>
              <p className="feature-desc">Vela aromática funcional diseñada para acompañar tu rutina de cuidado facial con calma, claridad y conexión.</p>
              <ul className="feature-list">
                <li>Bergamota — claridad y enfoque mental</li>
                <li>Lavanda — calma y bienestar emocional</li>
                <li>Cedro del Atlas — enraizamiento y profundidad</li>
                <li>40–45 horas de combustión</li>
              </ul>
              <div className="feature-badges">
                {['200 g','Cera Vegetal','Sin Parafinas'].map(b => <span key={b} className="badge">{b}</span>)}
              </div>
              <Link to="/vela" className="btn btn-outline btn-sm mt-16">Ver más de la vela</Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section quote-section">
        <div className="container">
          <FadeUp>
            <div className="label text-gold mb-24 text-center">Filosofía del kit</div>
            <div className="quote-mark">"</div>
            <p className="quote-text">Mientras el sérum protege la piel del estrés externo, la vela actúa sobre el estrés interno. Juntos transforman tu rutina en un momento de conexión, calma y bienestar integral.</p>
            <div className="divider divider-center mt-16" />
          </FadeUp>
        </div>
      </section>

      {/* Why kit */}
      <section className="section ingredients-section">
        <div className="container">
          <FadeUp className="ingredients-header">
            <div className="label text-gold mb-16">¿Por qué elegir el kit?</div>
            <h2 className="heading-l">La experiencia completa</h2>
          </FadeUp>
          <StaggerGrid style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--border)',marginTop:48}}>
            {whys.map(w => (
              <StaggerItem key={w.title}>
                <div style={{background:'var(--warm)',padding:'40px 28px'}}>
                  <div style={{fontFamily:'var(--serif)',fontSize:'2rem',fontWeight:300,color:'var(--gold)',marginBottom:10}}>{w.num}</div>
                  <div style={{fontFamily:'var(--serif)',fontSize:'1.1rem',marginBottom:10}}>{w.title}</div>
                  <p style={{fontSize:12,color:'var(--medium)',lineHeight:1.7}}>{w.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Buy CTA */}
      <section className="section kit-section">
        <div className="container">
          <FadeUp style={{maxWidth:600,margin:'0 auto',textAlign:'center'}}>
            <div className="kit-eyebrow" style={{textAlign:'center'}}>Empieza tu ritual hoy</div>
            <h2 className="kit-title" style={{textAlign:'center',marginBottom:16}}>Kit Ritual nuhua</h2>
            <p style={{fontSize:14,opacity:0.65,lineHeight:1.8,marginBottom:32}}>Radiance Serum 32 mL + Ritual Candle 200 g. Envío a todo Colombia.</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:16,marginBottom:32,flexWrap:'wrap'}}>
              <span className="kit-price">$259.000</span>
              <span className="kit-price-original">$278.000</span>
              <span className="kit-save">Ahorra $19k</span>
            </div>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
              <motion.button
                className="btn btn-gold btn-lg"
                style={{pointerEvents:added?'none':'auto'}}
                onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2200) }}
                whileTap={{ scale: 0.97 }}
              >
                {added ? '✓ Agregado' : 'Agregar al carrito'}
              </motion.button>
              <Link to="/serum" className="btn btn-ghost-white">Ver sérum solo</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Page>
  )
}
