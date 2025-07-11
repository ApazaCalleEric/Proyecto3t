import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LavandinaLavanda.css';

export default function LavandinaLavanda() {
  return (
    <>
      
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">LAVANDINA LAVANDA</h1>
          <div className="breadcrumb">
            <span>🏠</span>
            <span>›</span>
            <span>Lavandina Lavanda</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <section className="product-section">
          <h2 className="section-title">PONELE AROMA A TUS DÍAS DE LIMPIEZA</h2>
          <p className="section-subtitle">
            Limpia, aromatiza y desinfecta. Para el cuidado de tu salud, tu casa y tu ropa.
          </p>

          <div className="product-container">
            {/* Left Side - Two Benefits */}
            <div className="benefits-left">
              <div className="benefit-item">
                <div className="icon-circle purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" fill="white"/>
                  </svg>
                </div>
                <h3>En La Cocina</h3>
                <p>Limpieza, blanqueo, desinfección y desodorización de vajilla, utensilios, cocina, hornos, azulejos, amoblamientos y mesada.</p>
              </div>

              <div className="benefit-item">
                <div className="icon-circle purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20l8-8V6l-8-4z" fill="white"/>
                  </svg>
                </div>
                <h3>En utensilios domésticos</h3>
                <p>Limpieza y desinfección de juguetes plásticos, baldes, palanganas, regaderas, utensilios, lavandinas, de jardinería y patio.</p>
              </div>
            </div>

            {/* Right Side - Two Benefits */}
            <div className="benefits-right">
              <div className="benefit-item">
                <div className="icon-circle purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" fill="white"/>
                  </svg>
                </div>
                <h3>En el Baño</h3>
                <p>Limpieza y desinfección a fondo de inodoros, pisos, azulejos, artefactos sanitarios. Elimina sus manchas y olores dejando un agradable aroma.</p>
              </div>

              <div className="benefit-item">
                <div className="icon-circle purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20l8-8V6l-8-4z" fill="white"/>
                  </svg>
                </div>
                <h3>En Ropa Blanca</h3>
                <p>Blanqueado de ropa blanca eliminando las manchas más difíciles. Devuelve a la ropa su blancor. Su impregnación efectiva, etc.</p>
              </div>
            </div>

            {/* Center Product Image */}
            <div className="product-image-container">
              {/* AQUÍ VA LA RUTA DE TU IMAGEN */}
              <img 
                src="/LavandinaLavanda.jpg" 
                alt="Lavandina Lavanda Cloro" 
                className="product-image"
              />
            </div>
          </div>
        </section>

        {/* Presentations Section */}
        <section className="presentations-section">
          <h2 className="presentations-title">Presentaciones:</h2>
          
          <div className="presentations-container">
            <div className="presentation-item">
              <div className="presentation-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="12" y="8" width="16" height="24" rx="2" fill="#00A86B"/>
                  <rect x="14" y="6" width="12" height="4" rx="1" fill="#00A86B"/>
                </svg>
              </div>
              <h3>Botes de 1 litro</h3>
              <p>Estos envases están fabricados en Polietileno de alta densidad y presentan tapas rosca con protección. Su material evita ser resistente, hecho fácil por pequeño de seguridad y contra de un rápido llenado para evitar accidentes. Cloro, metal puede ser reciclado. Viene en tapos de cartón con sus datos para una fácil identificación y localización. Los cuales su texto contenido contra de código de barras del envase.</p>
            </div>

            <div className="presentation-item">
              <div className="presentation-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="12" y="8" width="16" height="24" rx="2" fill="#00A86B"/>
                  <rect x="14" y="6" width="12" height="4" rx="1" fill="#00A86B"/>
                </svg>
              </div>
              <h3>Recomendación</h3>
              <p>Para superficies húmedas y antioxidantes varios y/o domésticas, el tiempo de contacto con la lavandina debe ser reducido y no excesivo su empaque posterior con agua.</p>
              
              <div className="recommendation-icons">
                <div className="rec-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="12" fill="#E8E8E8"/>
                    <path d="M15 8v7l4 4" stroke="#666" strokeWidth="2"/>
                  </svg>
                  <span>Bote de 1 Litro</span>
                </div>
                <div className="rec-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="12" fill="#E8E8E8"/>
                    <path d="M15 8v7l4 4" stroke="#666" strokeWidth="2"/>
                  </svg>
                  <span>en uso de 5 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  )
}