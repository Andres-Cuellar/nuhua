import { useState } from 'react'
import { Page, FadeUp, RevealText, LineReveal } from '../motion'

const API = import.meta.env.DEV ? '/api/nuhua' : import.meta.env.VITE_WP_API_URL.replace(/\/wc\/v3$/, '/nuhua/v1')

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setMsg('')

    try {
      const res = await fetch(`${API}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('done')
        setMsg(data.message || '¡Gracias por registrarte!')
      } else {
        setStatus('error')
        setMsg(data.message || data?.data?.message || 'Error al registrar')
      }
    } catch {
      setStatus('error')
      setMsg('Error de conexión. Intenta de nuevo.')
    }
  }

  return (
    <Page>
      <div className="coming-soon">
        <div className="coming-soon-bg">
          <img
            src="/img/serum-bottle-with-gold-flakes-and-water-droplets-2026-03-25-09-20-56-utc.webp"
            alt=""
          />
        </div>
        <div className="coming-soon-overlay" />

        <div className="coming-soon-content">
          <FadeUp>
            <img
              src="/img/logo_nuhua.png"
              alt="nuhua skin"
              className="coming-soon-logo"
            />
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="coming-soon-eyebrow">Próximamente</div>
          </FadeUp>

          <RevealText delay={0.12}>
            <h1 className="coming-soon-title">Nuhua Skin</h1>
          </RevealText>

          <FadeUp delay={0.16}>
            <p className="coming-soon-sub">Menos pasos. Mejor piel.</p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <LineReveal style={{ maxWidth: 48, margin: '0 auto 36px' }} />
          </FadeUp>

          {status === 'done' ? (
            <FadeUp delay={0.24}>
              <p style={{ fontSize: 14, color: 'var(--gold)', marginBottom: 36 }}>
                {msg}
              </p>
            </FadeUp>
          ) : (
            <FadeUp delay={0.24}>
              <form className="coming-soon-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                />
                <button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? '...' : 'Avisame'}
                </button>
              </form>
              {status === 'error' && (
                <p style={{ fontSize: 12, color: '#c44', marginBottom: 16 }}>{msg}</p>
              )}
            </FadeUp>
          )}

          <FadeUp delay={0.28}>
            <p className="coming-soon-hint">Sé el primero en saberlo.</p>
          </FadeUp>

          <FadeUp delay={0.34}>
            <div className="coming-soon-bottom">© 2026 nuhua skin. Colombia.</div>
          </FadeUp>
        </div>
      </div>
    </Page>
  )
}
