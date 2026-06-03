import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Page, FadeUp } from '../motion'
import Accordion from '../components/Accordion'

const ease = [0.4, 0, 0.2, 1]

const faqs = [
  { title: '¿A qué ciudades envían?', content: <p>Realizamos envíos a todo Colombia. Ciudades principales: 1–2 días hábiles. Resto del país: 3–10 días hábiles.</p> },
  { title: '¿El sérum es apto para piel sensible?', content: <p>Sí. Está formulado para todo tipo de piel, incluyendo sensibles. Dermatológicamente testeado, libre de parabenos y fragancias agresivas.</p> },
  { title: '¿Cuánto dura el sérum?', content: <p>El frasco de 32 mL tiene vida útil de 24 meses. Una vez abierto, úsalo en 6 meses. Aplicando 2–4 gotas diarias, dura aproximadamente 2–4 meses.</p> },
  { title: '¿Puedo usarlo mañana y noche?', content: <p>Sí, está diseñado para uso diario, mañana y noche. Compatible con protector solar en la rutina de día.</p> },
  { title: '¿Tienen política de devoluciones?', content: <p>Sí. Contáctanos dentro de los 15 días posteriores a la recepción. Evaluaremos cada caso y buscaremos la mejor solución.</p> },
  { title: '¿La vela es para interiores?', content: <p>Sí, exclusivamente para uso interior. Cera vegetal de soya, mecha de algodón y aceites esenciales naturales para una quema limpia y segura.</p> },
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre:'', email:'', asunto:'', mensaje:'' })
  const [sent, setSent]  = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ nombre:'', email:'', asunto:'', mensaje:'' }) }, 3500)
  }

  return (
    <Page>
      <header className="page-header">
        <div className="container">
          <FadeUp><div className="page-header-eyebrow">Estamos aquí</div></FadeUp>
          <FadeUp delay={0.08}><h1 className="page-header-title">Contáctanos</h1></FadeUp>
          <FadeUp delay={0.16}><p className="page-header-sub">Tienes una pregunta sobre un pedido, un producto o simplemente quieres conocer más.</p></FadeUp>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <FadeUp className="contact-info">
              <div>
                <div className="label text-gold mb-16">Comunícate</div>
                <h2 className="heading-l mb-32">Hablemos</h2>
              </div>
              {[
                { label:'Correo electrónico', value:'hola@nuhuaskin.co', sub:'Respondemos en menos de 24 horas hábiles' },
                { label:'WhatsApp', value:'+57 300 123 4567', sub:'Lunes a viernes · 8am – 6pm' },
                { label:'Ubicación', value:'Bogotá, Colombia', sub:'Marca digital nativa. Envíos a todo el país.' },
                { label:'Envíos', value:'Todo Colombia', sub:'1–2 días ciudades principales · 3–10 días resto del país' },
              ].map(c => (
                <div key={c.label}>
                  <div className="contact-item-label">{c.label}</div>
                  <div className="contact-item-value">{c.value}</div>
                  <div className="contact-item-sub">{c.sub}</div>
                </div>
              ))}
              <div className="contact-socials">
                {['Instagram','TikTok','Facebook'].map(s => (
                  <a key={s} href="#" className="contact-social-link">{s}</a>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="label text-gold mb-24">Escríbenos</div>
              <form onSubmit={handleSubmit}>
                {[
                  { id:'nombre', label:'Nombre completo', type:'text', placeholder:'Tu nombre' },
                  { id:'email',  label:'Correo electrónico', type:'email', placeholder:'tu@email.com' },
                ].map(f => (
                  <div key={f.id} className="form-group">
                    <label className="form-label" htmlFor={f.id}>{f.label}</label>
                    <input
                      className="form-control" id={f.id} type={f.type}
                      placeholder={f.placeholder} value={form[f.id]}
                      onChange={e => setForm(v => ({...v,[f.id]:e.target.value}))}
                      required
                    />
                  </div>
                ))}
                <div className="form-group">
                  <label className="form-label" htmlFor="asunto">Asunto</label>
                  <select
                    className="form-control" id="asunto"
                    value={form.asunto}
                    onChange={e => setForm(v => ({...v,asunto:e.target.value}))}
                  >
                    <option value="" disabled>Selecciona un tema</option>
                    {['Pregunta sobre un producto','Estado de mi pedido','Devolución o cambio','Información sobre ingredientes','Colaboraciones','Otro'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="mensaje">Mensaje</label>
                  <textarea
                    className="form-control" id="mensaje" rows={5}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    value={form.mensaje}
                    onChange={e => setForm(v => ({...v,mensaje:e.target.value}))}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-dark btn-full"
                  whileTap={{ scale: 0.98 }}
                  disabled={sent}
                >
                  {sent ? '✓ Mensaje enviado' : 'Enviar mensaje'}
                </motion.button>
                <p style={{fontSize:11,color:'var(--light)',marginTop:14,lineHeight:1.6}}>
                  Al enviar aceptas nuestra política de privacidad y tratamiento de datos personales.
                </p>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--warm)'}}>
        <div className="container">
          <FadeUp className="text-center mb-48">
            <div className="label text-gold mb-16">FAQ</div>
            <h2 className="heading-l">Preguntas frecuentes</h2>
          </FadeUp>
          <div style={{maxWidth:720,margin:'0 auto'}}>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature">
            <FadeUp className="feature-media">
              <div className="feature-media-inner">
                <img src="/img/bg-3.webp" alt="Nuhua Skin" loading="lazy" />
              </div>
            </FadeUp>
            <FadeUp delay={0.12} className="feature-body">
              <div className="feature-eyebrow">Lista para empezar</div>
              <h2 className="feature-title">Tu rutina<br />te está esperando.</h2>
              <p className="feature-desc">Explora nuestra colección y encuentra el producto perfecto para ti.</p>
              <div className="feature-actions">
                <Link to="/serum" className="btn btn-dark btn-lg">Ver sérum</Link>
                <Link to="/productos" className="btn btn-outline">Todos los productos</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </Page>
  )
}
