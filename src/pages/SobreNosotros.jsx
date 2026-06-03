import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page, FadeUp, StaggerGrid, StaggerItem, RevealText, LineReveal } from '../motion'
import {
  IconHydration, IconVitamin, IconBotanical, IconShield, IconPeptide,
} from '../components/IngredientIcons'

const ingredients = [
  { icon: <IconHydration />, name: 'Ácido Hialurónico', latin: 'Sodium Hyaluronate', desc: 'Polisacárido biotecnológico. Hidratación profunda en múltiples niveles.' },
  { icon: <IconVitamin />,   name: 'Niacinamida',        latin: 'Niacinamide',        desc: 'Vitamina B3 activa. Luminosidad visible, tono uniforme.' },
  { icon: <IconBotanical />, name: 'Bakuchiol',           latin: 'Bakuchiol',          desc: 'Botánico de alta tolerancia. Firmeza y renovación.' },
  { icon: <IconShield />,    name: 'Ectoína',             latin: 'Ectoin',             desc: 'Molécula adaptógena. Escudo frente al estrés ambiental.' },
  { icon: <IconPeptide />,   name: 'Péptido',             latin: 'Acetyl Tetrapeptide-5', desc: 'Biomimético de nueva generación. Contorno de ojos descansado.' },
]

const values = [
  { icon: '◎', name: 'Transparencia', desc: 'Sin ingredientes innecesarios. Sabes exactamente qué pones en tu piel y por qué está ahí.' },
  { icon: '◈', name: 'Eficacia',       desc: 'Solo activos con respaldo científico en concentraciones que realmente funcionan.' },
  { icon: '◇', name: 'Simplicidad',    desc: 'Un producto que hace el trabajo de varios. Menos pasos, mejores resultados.' },
  { icon: '○', name: 'Transparencia científica', desc: 'Cruelty Free, sin parabenos, empaque reciclable. Formulación local colombiana.' },
]

const personality = [
  {
    title: 'Inteligente',
    desc: 'Nuhua es una marca informada, basada en ciencia real. No sigue tendencias, las cuestiona. Explica los ingredientes de forma clara y accesible.',
  },
  {
    title: 'Práctica',
    desc: 'Menos es mejor. Elimina lo innecesario en producto, rutina y comunicación. Cada elemento tiene una función. Maximiza resultados con el mínimo esfuerzo.',
  },
  {
    title: 'Sofisticada',
    desc: 'Una estética limpia y elevada sin ser pretenciosa. Lujo moderno basado en la simplicidad y la inteligencia, no en el exceso.',
  },
]

const stats = [
  { num: '100%', label: 'Paraben Free' },
  { num: '100%', label: 'Cruelty Free' },
  { num: '5',    label: 'Activos estrella' },
  { num: 'CO',   label: 'Made in Colombia' },
]

export default function SobreNosotros() {
  return (
    <Page>
      {/* ── Page header ─────────────────── */}
      <header className="page-header">
        <div className="container">
          <FadeUp><div className="page-header-eyebrow">Brand Concept</div></FadeUp>
          <RevealText delay={0.08}>
            <h1 className="page-header-title">Sobre<br />nosotros</h1>
          </RevealText>
          <FadeUp delay={0.16}>
            <p className="page-header-sub">
              Una marca construida sobre una creencia simple: tu piel merece lo mejor, sin complicaciones.
            </p>
          </FadeUp>
        </div>
      </header>

      {/* ── Problema / Oportunidad / Solución ── */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center" style={{ marginBottom: 64 }}>
            <div className="label text-gold" style={{ marginBottom: 16 }}>Brand Concept</div>
            <RevealText>
              <h2 className="heading-l">Por qué existe Nuhua</h2>
            </RevealText>
          </FadeUp>
          <StaggerGrid style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'var(--border)' }}>
            {[
              {
                tag: 'Problema',
                title: 'El skincare se volvió complejo',
                desc: 'Las rutinas de múltiples pasos generan fatiga y falta de constancia. Muchas personas saben qué hacer, pero no logran sostenerlo en el tiempo. El skincare se ha vuelto costoso y difícil de mantener.',
              },
              {
                tag: 'Oportunidad',
                title: 'Simplificar sin sacrificar',
                desc: 'Los consumidores están buscando simplificar su rutina sin sacrificar resultados. Existe una creciente necesidad de productos que combinen eficacia, bienestar y facilidad de uso. El skincare ya no es solo estético, también es emocional y mental.',
              },
              {
                tag: 'Solución',
                title: 'Un producto que reemplaza muchos',
                desc: 'Un solo producto que reemplaza múltiples pasos de la rutina. Una fórmula potente, diseñada para trabajar en sinergia y ofrecer resultados reales con el mínimo esfuerzo.',
              },
            ].map(item => (
              <StaggerItem key={item.tag}>
                <div style={{ background: 'var(--cream)', padding: '48px 40px' }}>
                  <div className="label text-gold" style={{ marginBottom: 16 }}>{item.tag}</div>
                  <h3 style={{
                    fontFamily: 'var(--display)', fontSize: '1.1rem', fontWeight: 400,
                    letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.85 }}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Concepto / Tagline ───────────────── */}
      <section className="section" style={{ background: 'var(--dark)', color: 'var(--white)' }}>
        <div className="container text-center">
          <FadeUp>
            <div className="label" style={{ color: 'var(--gold)', marginBottom: 28 }}>Idea Principal</div>
          </FadeUp>
          <RevealText>
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 100,
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              lineHeight: 1.0, marginBottom: 32,
            }}>
              Menos pasos.<br />Mejor piel.
            </h2>
          </RevealText>
          <FadeUp delay={0.1}>
            <LineReveal style={{ maxWidth: 60, margin: '0 auto 28px' }} />
            <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55 }}>
              Alta ciencia, cero fricción.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Value Prop ───────────────────────── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
            <FadeUp style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
              <div className="label text-gold" style={{ marginBottom: 0 }}>Propuesta de Valor</div>
              <RevealText>
                <h2 className="heading-l">Alta ciencia,<br />cero fricción.</h2>
              </RevealText>
              <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.9, maxWidth: 520 }}>
                Buscamos al consumidor abrumado por rutinas de múltiples pasos pero que no está dispuesto a sacrificar resultados. Vendemos tiempo y eficacia mediante una fórmula honesta y potente.
              </p>
              <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.9, maxWidth: 520 }}>
                Nuhua redefine el skincare enfocándose en lo esencial: ingredientes potentes, formulación inteligente y simplicidad. Sin ingredientes de relleno, sin falsas promesas.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Personalidad de marca ─────────────── */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center" style={{ marginBottom: 64 }}>
            <div className="label text-gold" style={{ marginBottom: 16 }}>Personalidad de Marca</div>
            <RevealText>
              <h2 className="heading-l">Cómo somos</h2>
            </RevealText>
          </FadeUp>
          <StaggerGrid style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'var(--border)' }}>
            {personality.map((p, i) => (
              <StaggerItem key={p.title}>
                <div style={{ background: 'var(--cream)', padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 9,
                    letterSpacing: '0.2em', color: 'var(--gold)',
                    textTransform: 'uppercase',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--display)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: 200, letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.85, maxWidth: 480 }}>{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Público objetivo ─────────────────── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'center' }}>
            <FadeUp>
              <div className="label text-gold" style={{ marginBottom: 20 }}>Público Objetivo</div>
              <RevealText delay={0.08}>
                <h2 className="heading-l" style={{ marginBottom: 32 }}>Para quién es<br />Nuhua</h2>
              </RevealText>
              <StaggerGrid style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  'Hombres y mujeres entre 25 y 45 años.',
                  'Valoran la transparencia en los ingredientes. Saben leer etiquetas.',
                  'Buscan optimizar su vida — incluyendo su rutina de cuidado.',
                  'Compran online y se informan en TikTok e Instagram a través de expertos en formulación, no solo influencers de moda.',
                  'No buscan más productos. Buscan mejores productos.',
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--gold)',
                        letterSpacing: '0.1em', marginTop: 3, flexShrink: 0,
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.8 }}>{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Filosofía CLEAN PERFORMANCE ─────── */}
      <section className="section">
        <div className="container">
          <FadeUp className="text-center" style={{ marginBottom: 64 }}>
            <div className="label text-gold" style={{ marginBottom: 16 }}>Filosofía</div>
            <RevealText>
              <h2 className="heading-l">Clean Performance</h2>
            </RevealText>
          </FadeUp>
          <StaggerGrid style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {[
              { title: 'Ciencia', desc: 'Fórmulas concentradas y funcionales. Ingredientes con respaldo científico, en concentraciones que realmente hacen la diferencia.' },
              { title: 'Practicidad', desc: 'Menos productos, mejores resultados. Diseñado para personas que quieren optimizar su rutina sin complicarse.' },
              { title: 'Simplicidad', desc: 'Diseñado para simplificar la rutina sin comprometer la eficacia. Cada paso tiene un propósito.' },
              { title: 'Transparencia', desc: 'Sin ingredientes innecesarios. Sin letra pequeña. Sabes exactamente qué hay en tu fórmula y por qué.' },
            ].map(v => (
              <StaggerItem key={v.title}>
                <div style={{ background: 'var(--cream)', padding: '40px 32px' }}>
                  <div style={{
                    fontFamily: 'var(--display)', fontSize: '0.85rem', fontWeight: 400,
                    letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
                  }}>{v.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--medium)', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Ingredientes ────────────────────── */}
      <section className="section ingredients-section" id="ingredientes">
        <div className="container">
          <FadeUp className="ingredients-header">
            <div className="label text-gold" style={{ marginBottom: 16 }}>La Fórmula</div>
            <RevealText>
              <h2 className="heading-l">5 activos estrella</h2>
            </RevealText>
            <p style={{ color: 'var(--medium)', fontSize: 14, maxWidth: 520, margin: '16px auto 0', lineHeight: 1.8 }}>
              Ciencia funcional. Resultados visibles.
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

      {/* ── Stats ───────────────────────────── */}
      <div className="container" style={{ paddingBottom: 0 }}>
        <StaggerGrid className="stats-row">
          {stats.map(s => (
            <StaggerItem key={s.label}>
              <div className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      {/* ── Full-width lifestyle image ───────── */}
      <motion.section
        style={{ padding: 0, overflow: 'hidden' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/img/bg-2.webp" alt=""
          style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover', objectPosition: 'center 35%' }}
          loading="lazy"
        />
      </motion.section>

      {/* ── Evolución → quiet luxury ─────────── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">
          <FadeUp style={{ maxWidth: 680 }}>
            <div className="label text-gold" style={{ marginBottom: 20 }}>Evolución de Marca</div>
            <RevealText delay={0.06}>
              <h2 className="heading-l" style={{ marginBottom: 28 }}>Hacia el quiet luxury</h2>
            </RevealText>
            <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.9, marginBottom: 16 }}>
              Nuhua tiene el potencial de evolucionar hacia una estética de "quiet luxury", donde el valor no está en lo visible, sino en la calidad, la formulación y la experiencia.
            </p>
            <p style={{ fontSize: 14, color: 'var(--medium)', lineHeight: 1.9, marginBottom: 32 }}>
              Una marca que comunica sofisticación a través de la discreción, el diseño y la coherencia. Menos ruido visual, más intención.
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {['Aesop', 'Le Labo', 'Typology'].map(ref => (
                <span key={ref} style={{
                  fontFamily: 'var(--mono)', fontSize: 10,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--light)', borderBottom: '1px solid var(--border)',
                  paddingBottom: 4,
                }}>
                  {ref}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="section kit-section">
        <div className="container text-center">
          <FadeUp>
            <div className="kit-eyebrow" style={{ textAlign: 'center', marginBottom: 16 }}>Empieza tu ritual</div>
            <h2 className="kit-title" style={{ textAlign: 'center', marginBottom: 16, maxWidth: 500, marginInline: 'auto' }}>
              Descubre Nuhua Skin.
            </h2>
            <p style={{ fontSize: 14, opacity: 0.65, lineHeight: 1.8, marginBottom: 36, maxWidth: 400, marginInline: 'auto' }}>
              Envíos a todo Colombia.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/serum" className="btn btn-gold btn-lg">Ver sérum</Link>
              <Link to="/kit"   className="btn btn-ghost-white">Ver Kit Ritual</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </Page>
  )
}
