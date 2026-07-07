import { Page, FadeUp, RevealText, LineReveal } from '../motion'

export default function ComingSoon() {
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

          <FadeUp delay={0.24}>
            <form className="coming-soon-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="tu@email.com" required />
              <button type="submit">Avisame</button>
            </form>
          </FadeUp>

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
