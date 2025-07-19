import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LavandinaLavanda.css';

export default function LavandinaLavanda() {
  return (
    <>
      <Navbar />
      
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
        {/* Title and Subtitle */}
        <div className="header-section">
          <h2 className="main-title">PONELE AROMA A TUS DÍAS DE LIMPIEZA</h2>
          <p className="main-description">
            	
            Limpia, aromatiza y desinfecta. Para el cuidado de su salud, su casa y su ropa.
          </p>
        </div>

        {/* Product Section with Benefits and Image */}
        <section className="product-section">
          <div className="product-container">
            {/* Left Side - Benefits List */}
            <div className="benefits-container">
              <div className="benefit-card">
                <div className="benefit-icon red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="white"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3>En la Cocina</h3>
                  <p>Limpieza, blanqueo, desinfección y desodorización de tejidos, utensilios de cocina, vajilla, alimentos, superficies y mesadas.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11H7v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9h-2m-7 0V6a5 5 0 0 1 10 0v5m-8 0h6m-6 0V6a3 3 0 0 1 6 0v5" fill="white"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3>En el Baño</h3>
                  <p>Limpieza y desinfección a fondo de inodoros, pisos, azulejos, bañaderas, lavabos, desagües y accesorios en general, eliminando gérmenes y olores.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3>En las frutas y verduras</h3>
                  <p>Desinfecta los alimentos y elimina la suciedad.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" fill="white"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3>Limpieza de Lavadoras</h3>
                  <p>Para realizar una desinfección por lavado.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Product Image */}
            <div className="product-image-section">
              
              <img 
                src="/LavandinaLavanda.jpg" 
                alt="Mr. Cloro 1 Litro" 
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

      <Footer />
    </>
  )
}