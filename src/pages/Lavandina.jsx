import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Lavandina.css';

export default function Lavandina() {
  // Aquí puedes cambiar la ruta de la imagen
  const imagenLavandina = "/mrclorolavandina.jpg";
  
  return (

      
      <div className="lavandina-container">
        
        {/* Header con imagen de fondo */}
        <div className="lavandina-header">
          <div className="breadcrumb">
            <span>🏠</span>
            <span>→</span>
            <span>Lavandina</span>
          </div>
          <h1>LAVANDINA</h1>
        </div>
        
        {/* Sección principal */}
        <div className="lavandina-main">
          <div className="content-wrapper">
            <h2>Lavandina Mr. Cloro, tu aliada en la limpieza</h2>
            <p>
              En lavandina marca DESINFECTANTE la queremos presentar a MR CLORO, una lavandina con una calidad y concentración de cloro ideal 
              cubriendo así las necesidades más exigentes del mercado. Tenemos presentaciones que se adaptan a tus necesidades.
            </p>
            
            <div className="product-section">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon kitchen">🏠</div>
                  <h3>En la Cocina</h3>
                  <p>Limpieza, blanqueo, desinfección y desodorización de tejidos, utensilios de cocina, vajilla, alimentos, superficies y mesadas.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon bathroom">🛁</div>
                  <h3>En el Baño</h3>
                  <p>Limpieza y desinfección a fondo de inodoros, pisos, azulejos, bañaderas, lavabos, desagües y accesorios en general, eliminando gérmenes y olores.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon fruits">🍎</div>
                  <h3>En las frutas y verduras</h3>
                  <p>Desinfecta los alimentos y elimina la suciedad.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon washing">🧺</div>
                  <h3>Limpieza de Lavadoras</h3>
                  <p>Para realizar una desinfección por lavado.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon utensils">🍴</div>
                  <h3>En utensilios domésticos</h3>
                  <p>Limpieza y desinfección de utensilios de cocina, vajilla, cristalería, cubiertos, ollas, sartenes, accesorios y objetos domésticos afectados en la limpieza de cocinas y baños.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon clothes">👕</div>
                  <h3>En Ropa Blanca</h3>
                  <p>Blanquea y desinfecta, eliminando manchas en la ropa de algodón, lino, eliminando gérmenes y olores.</p>
                </div>
              </div>
              
              <div className="product-image">
                <img src={imagenLavandina} alt="Lavandina Mr. Cloro" />
              </div>
            </div>
            
            <div className="presentations-section">
              <h2>Presentaciones:</h2>
              <div className="presentations-grid">
                <div className="presentation-item">
                  <div className="presentation-icon">🍼</div>
                  <h3>Botes 500ml, 1, 2 y 4 litros</h3>
                  <p>
                    Estos envases están fabricados en Polietileno de alta densidad, el material resistente que hace que tengan un 
                    envase sea reciclable, tiene tapa con piquete de seguridad y cuenta de un código termo-encogible etiqueta. Alguna de 
                    nuestras pueden ser recicladas. Viene en cajas de cartón con manijas que facilitan su manipulación para el transporte.
                  </p>
                </div>
                <div className="presentation-item">
                  <div className="presentation-icon">📦</div>
                  <h3>Sachet de 250cc</h3>
                  <p>
                    Este envase está fabricado con una mezcla de PVC y polietileno en sus diferentes capas que proporcionan dentro ser un 
                    sellado que es casi impermeable que sufran fugas. Viene en cajas de cartón con tapa para una fácil identificación del 
                    producto. También contiene un código de barras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

  );
}