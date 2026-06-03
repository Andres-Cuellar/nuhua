import { Link } from 'react-router-dom'
import { FadeUp } from '../motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <FadeUp className="footer-brand">
            <div>
              <img
                src="/img/logo_nuhua.png"
                alt="nuhua skin"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-tagline">
              Ciencia funcional para simplificar tu rutina de cuidado.
            </p>
            <div>
              <div className="footer-col-title" style={{ marginBottom: 10 }}>Newsletter</div>
              <div className="footer-newsletter">
                <input type="email" placeholder="tu@email.com" />
                <button>Suscribir</button>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="footer-col">
            <div className="footer-col-title">Productos</div>
            <ul>
              <li><Link to="/serum">Radiance Serum</Link></li>
              <li><Link to="/vela">Ritual Candle</Link></li>
              <li><Link to="/kit">Kit Ritual</Link></li>
              <li><Link to="/productos">Ver todos</Link></li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.15} className="footer-col">
            <div className="footer-col-title">Marca</div>
            <ul>
              <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
              <li><Link to="/sobre-nosotros">Filosofía</Link></li>
            </ul>
          </FadeUp>

          <FadeUp delay={0.2} className="footer-col">
            <div className="footer-col-title">Ayuda</div>
            <ul>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </FadeUp>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2024 nuhua skin. Colombia.</span>
          <div className="footer-legal">
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Tratamiento de datos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
