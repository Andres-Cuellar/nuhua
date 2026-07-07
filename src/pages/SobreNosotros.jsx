import { Link } from 'react-router-dom'
import { Page, FadeUp, StaggerGrid, StaggerItem, RevealText, LineReveal, ImageReveal } from '../motion'
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

      {/* ── Nuestra Historia ──────────────────── */}
      <section className="section" style={{ background: 'var(--warm)' }}>
        <div className="container">

          {/* SPREAD 1 — El origen + La pregunta | Imagen */}
          <FadeUp>
            <div className="story-text-media">
              <div>
                <div className="story-centered" style={{ margin: '0 0 28px', textAlign: 'left' }}>
                  <div className="label text-gold" style={{ marginBottom: 16 }}>Nuestra Historia</div>
                  <RevealText>
                    <h2 className="heading-l" style={{ marginBottom: 0 }}>Dos mujeres,<br />una convicción</h2>
                  </RevealText>
                </div>
                <div className="story-label">El origen</div>
                <p className="story-text">
                  Algunas historias comienzan con una idea. La nuestra comenzó con una convicción: el cuidado de la piel no debería ser complicado para ser efectivo. Con esa visión en mente, dos mujeres apasionadas por la industria cosmética decidieron emprender un camino que, cinco años después, daría vida a NHUA.
                </p>
                <div className="story-label" style={{ marginTop: 40 }}>La pregunta</div>
                <p className="story-text" style={{ marginBottom: 0 }}>
                  Después de la pandemia, Ana reflexionaba sobre los años que había dedicado a la industria cosmética. Conocía el mundo cosmético y dermocosmético por dentro. Años de industria le habían enseñado cómo funcionan los productos, qué prometen y — muchas veces — qué no cumplen. Había visto cómo las rutinas crecían: un sérum, una crema, un contorno de ojos, otro suero para esto, otro para aquello. Y en algún momento dejó de normalizar esa complejidad y empezó a hacerse una pregunta distinta.
                </p>
              </div>
              <ImageReveal
                src="/img/woman-holding-serum-bottle-in-studio-setting-2026-01-06-00-29-42-utc.webp"
                alt=""
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </FadeUp>

          {/* SPREAD 2 — Pull quote centered */}
          <FadeUp>
            <div className="story-quote">
              <RevealText delay={0.04}>
                <p className="story-pull-text" style={{ padding: '0 0 20px' }}>
                  ¿Y si los activos correctos, seleccionados con rigor y formulados con inteligencia, pudieran vivir en un solo producto?
                </p>
              </RevealText>
              <p className="story-pull-sub">
                ¿Un producto que no fuera un compromiso sino una decisión? Uno que reemplazara el sérum, la crema y el contorno — no porque fuera más fácil de vender, sino porque estuviera genuinamente hecho para eso.
              </p>
            </div>
          </FadeUp>

          <div className="story-divider" />

          {/* SPREAD 3 — Imagen | El encuentro + quote (REVERSED) */}
          <FadeUp>
            <div className="story-media-text">
              <ImageReveal
                src="/img/serum-bottle-with-gold-flakes-and-water-droplets-2026-03-25-09-20-56-utc.webp"
                alt=""
                style={{ aspectRatio: '4/5' }}
              />
              <div>
                <div className="story-label">El encuentro</div>
                <p className="story-text">
                  Esa pregunta la llevó a Julieth. Dermofarmacéutica. Especialista en formulación cosmética. Alguien que estudió años para entender no solo qué ingredientes funcionan, sino por qué, en qué concentración, con qué otros activos se potencian y cuándo una fórmula realmente merece llamarse eficaz. En ese momento, Julieth acababa de culminar su maestría en Dermofarmacia y Formulación Cosmética y soñaba con aplicar todo su conocimiento en un proyecto propio construido desde la ciencia, la innovación y el bienestar.
                </p>
                <div className="story-pull-rule" style={{ margin: '40px 0 0 0' }} />
                <RevealText delay={0.04}>
                  <p className="story-pull-text" style={{ padding: '28px 0 0' }}>
                    "No queríamos hacer otro producto más. Queríamos hacer el que te preguntarías por qué nadie había hecho antes."
                  </p>
                </RevealText>
              </div>
            </div>
          </FadeUp>

          {/* SPREAD 4 — El camino | Imagen 16:9 + Pilares */}
          <FadeUp>
            <div className="story-text-media">
              <div>
                <div className="story-label">El camino</div>
                <p className="story-text">
                  Así comenzó NHUA. Nuestro sueño inicial era lanzar una línea completa de cinco productos formulados bajo nuestros propios estándares. Sin embargo, el camino del emprendimiento nos enseñó que las grandes ideas también requieren paciencia, resiliencia y la capacidad de empezar de nuevo cuando es necesario.
                </p>
                <p className="story-text">
                  Lo que vino después fue real: aliados que no dieron la talla, reformulaciones desde cero, decisiones que costaron. Hubo momentos en los que tuvimos que replantear el camino, buscar nuevas alternativas y volver a comenzar. Pero también fue claro: había aspectos en los que nunca íbamos a ceder. La concentración de activos. La compatibilidad entre ingredientes. La honestidad de que cada gota tuviera un propósito. La convicción de que si íbamos a lanzar algo al mundo, tenía que ser algo en lo que creyéramos con certeza.
                </p>
                <p className="story-text" style={{ marginBottom: 0 }}>
                  Cada obstáculo nos permitió definir con mayor claridad aquello en lo que creemos: fórmulas inteligentes, ingredientes cuidadosamente seleccionados y productos diseñados para responder a necesidades reales.
                </p>
              </div>
              <div>
                <ImageReveal
                  src="/img/serum-bottle-with-gold-flakes-and-water-droplets-2026-03-25-09-20-56-utc.webp"
                  alt=""
                  style={{ aspectRatio: '16/9', marginBottom: 32 }}
                />
                <StaggerGrid style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'var(--border)' }}>
                  {[
                    { num: '01', title: 'Activos seleccionados con obsesión' },
                    { num: '02', title: 'Formulación con propósito real' },
                    { num: '03', title: 'Un producto que reemplaza tres o más' },
                  ].map(item => (
                    <StaggerItem key={item.num}>
                      <div style={{ background: 'var(--cream)', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 20 }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--gold)' }}>
                          {item.num}
                        </span>
                        <span style={{ fontFamily: 'var(--display)', fontSize: '0.9rem', fontWeight: 300, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          {item.title}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGrid>
              </div>
            </div>
          </FadeUp>

          <div className="story-divider" />

          {/* SPREAD — Imagen | El resultado */}
          <FadeUp>
            <div className="story-media-text">
              <ImageReveal
                src="/img/woman-holding-serum-bottle-in-studio-setting-2026-01-06-00-29-42-utc.webp"
                alt=""
                style={{ aspectRatio: '4/5' }}
              />
              <div>
                <div className="story-label">El resultado</div>
                <p className="story-text">
                  Después de cinco años de trabajo, investigación, aprendizaje y perseverancia, logramos materializar nuestro primer lanzamiento: un sérum formulado para el contorno de ojos, la hidratación y la potencia de un sérum en uno solo. No por minimalismo de tendencia, sino porque con la ciencia correcta, no necesitas más.
                </p>
                <p className="story-text" style={{ marginBottom: 0 }}>
                  NHUA representa mucho más que cosmética. Es la unión entre la ciencia y el bienestar, entre quien conoce la industria y quien conoce la fórmula. Entre la visión de lo que debería existir y el conocimiento de cómo hacerlo realidad. Es la prueba de que los sueños construidos con pasión, disciplina y propósito encuentran su camino.
                </p>
              </div>
            </div>
          </FadeUp>

          <div className="story-divider" />

          {/* Fundadoras */}
          <FadeUp>
            <div className="story-founders">
              <div className="story-founder">
                <img
                  src="/img/close-up-portrait-of-beautiful-half-naked-woman-us-2026-03-24-02-57-33-utc.webp"
                  alt="Ana Cristina"
                  className="story-founder-img"
                  loading="lazy"
                />
                <div className="story-founder-overlay">
                  <div className="story-founder-name">Ana Cristina</div>
                  <div className="story-founder-role">Industria cosmética y dermocosmética</div>
                  <div className="story-founder-line" />
                  <div className="story-founder-sig">Visión · Propósito · Estrategia</div>
                </div>
              </div>
              <div className="story-founder">
                <img
                  src="/img/smiling-women-relaxing-with-skincare-treatment-at-2026-03-24-07-01-32-utc.webp"
                  alt="Julieth"
                  className="story-founder-img"
                  loading="lazy"
                />
                <div className="story-founder-overlay">
                  <div className="story-founder-name">Julieth</div>
                  <div className="story-founder-role">Dermofarmacia y Formulación Cosmética</div>
                  <div className="story-founder-line" />
                  <div className="story-founder-sig">Ciencia · Fórmula · Activos</div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* CIERRE */}
          <FadeUp>
            <div className="story-centered" style={{ textAlign: 'center', marginBottom: 0 }}>
              <p className="story-closing-text">Y esto es solo el comienzo.</p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="story-final">
              <RevealText delay={0.06}>
                <p className="story-final-text">
                  "Detrás de cada gota hay cinco años de sueños, ciencia y perseverancia."
                </p>
              </RevealText>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── Ingredientes ────────────────────── */}
      {/* <section className="section ingredients-section" id="ingredientes">
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
      </section> */}

      {/* ── Stats ───────────────────────────── */}
      {/* <div className="container" style={{ paddingBottom: 0 }}>
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
      </div> */}

      {/* ── Full-width lifestyle image ───────── */}
      {/* <motion.section
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
      </motion.section> */}

      {/* ── Evolución → quiet luxury ─────────── */}
      {/* <section className="section" style={{ background: 'var(--warm)' }}>
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
      </section> */}

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
