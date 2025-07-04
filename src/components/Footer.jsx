import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="col">
            <h5>Información de Contacto</h5>
            <ul>
              <li><span className="icon">📍</span> Calle Cupesí Nro. 9035 Km 9, Carretera al Norte Santa Cruz – Bolivia</li>
              <li><span className="icon">📞</span> Telf. (591‑3) 3228881</li>
              <li><span className="icon">📱</span> Cel. (591) 71027340</li>
              <li><span className="icon">📧</span> E‑Mail: info@stc.com.bo</li>
            </ul>
          </div>
        
          <div className="col">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/MrCloro" className="social-link">
                <span className="social-icon">📘</span>
                Facebook
              </a>
              <a href="https://www.instagram.com/mrcloro/?igsh=cHVoOW13czd5ZGl5" className="social-link">
                <span className="social-icon">📷</span>
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/mr-cloro/" className="social-link">
                <span className="social-icon">💬</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-legal">
            <p>© 2025 Mr Cloro. Todos los derechos reservados</p>
            <div className="footer-links">
              <a href="#privacidad">Políticas de privacidad</a>
              <a href="#terminos">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}