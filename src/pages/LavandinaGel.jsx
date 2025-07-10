import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LavandinaGel.css';

export default function LavandinaGel() {
  // Aquí puedes cambiar la ruta de la imagen
  const imagenLavandinaGel = "/clorogel.jpg";
  
  return (
    <>
      
      <div className="lavandina-container">
        
        {/* Header con imagen de fondo */}
        <div className="lavandina-header">
          <div className="breadcrumb">
            <span>🏠</span>
            <span>→</span>
            <span>Lavandina en Gel</span>
          </div>
          <h1>LAVANDINA EN GEL</h1>
        </div>
        
        {/* Sección principal */}
        <div className="lavandina-main">
          <div className="content-wrapper">
            <h2>Lavandina en Gel</h2>
            <p>
              Más espesa, no más salpicaduras,
              más eficiencia en su uso y sin derrames incontrolables.
            </p>
            
            <div className="product-section">
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon kitchen">🏠</div>
                  <h3>En La Cocina</h3>
                  <p>
                    Limpieza, blanqueo, desinfección y
                    desodorización de vajillas, utensilios de
                    cocina, vidrios, plásticos, enlozados y
                    mesadas
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon fruits">🍎</div>
                  <h3>En las frutas y verduras</h3>
                  <p>
                    Desinfecta los alimentos cuidando la
                    salud.
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon utensils">🍴</div>
                  <h3>En utensilios domésticos</h3>
                  <p>
                    Limpieza y desinfección de trapos de piso,
                    rejillas, baldes de residuos, fregaderos de
                    cocina, escobillas utilizadas en la limpieza
                    de inodoros y bidet.
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon bathroom">🛁</div>
                  <h3>En el Baño</h3>
                  <p>
                    Limpieza y desinfección a fondo de
                    inodoros, pisos azulejos, artefactos
                    sanitarios. Elimina las manchas de sarro
                    provocadas por el agua.
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon washing">🧺</div>
                  <h3>Limpieza de Lavadoras</h3>
                  <p>
                    Para realizar una desinfección de
                    lavadora.
                  </p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon clothes">👕</div>
                  <h3>En Ropa Blanca</h3>
                  <p>
                    Blanquea y desinfecta, eliminando manchas
                    en la ropa de alimen- tos, transpiración,
                    grasas, etc.).
                  </p>
                </div>
              </div>
              
              <div className="product-image">
                <img src={imagenLavandinaGel} alt="Lavandina en Gel Mr Cloro" />
              </div>
            </div>
            
            <div className="presentations-section">
              <h2>Descripción del producto</h2>
              <div className="presentations-grid">
                <div className="presentation-item">
                  <div className="presentation-icon">🧴</div>
                  <h3>Mr Cloro Gel</h3>
                  <p>
                    Mr Cloro Gel fue creado con la mejor tecnología y como resultado obtuvimos un producto de múltiples usos, con más extras que podrás usar
                    en beneficio de tu familia manteniendo las áreas limpias y desinfectadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}