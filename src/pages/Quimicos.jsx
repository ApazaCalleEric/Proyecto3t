import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Quimicos.css';

export default function Quimicos() {
  // Ruta de la imagen (reemplaza con tu ruta real)
  const imagenAcidoNitrico = "/nitrico.png";
  
  return (
    <>
      <Navbar />
      <div className="quimicos-container">
        
        {/* Header con imagen de fondo */}
        <div className="quimicos-header">
          <div className="breadcrumb">
            <span>🏠</span>
            <span>→</span>
            <span>Químicos Industriales</span>
          </div>
          <h1>ÁCIDO NÍTRICO</h1>
        </div>
        
        {/* Sección principal */}
        <div className="quimicos-main">
          <div className="content-wrapper">
            <div className="product-section">
              
              {/* Encabezado del producto */}
              <div className="product-header">
                <h2>LÍQUIDO</h2>
                <div className="product-image">
                  <img src={imagenAcidoNitrico} alt="Ácido Nítrico Mr. Cloro" />
                </div>
              </div>
              
              {/* Descripción principal */}
              <div className="product-description">
                <p>
                  El ácido nítrico de Mr Cloro, conocido químicamente como HNO<sub>3</sub>, es un potente ácido mineral con diversas aplicaciones industriales, 
                  comerciales y domésticas, principalmente debido a su capacidad para reaccionar con la mayoría de los metales y su papel en el uso para la 
                  limpieza doméstica e industrial. El ácido nítrico Mr. Cloro viene con una concentración de 68% de pureza.
                </p>
              </div>
              
              {/* Sección de aplicaciones en dos columnas */}
              <div className="applications-container">
                <div className="applications-column">
                  <div className="application-item">
                    <h3>Pisos</h3>
                    <p>
                      El uso del ácido nítrico para la limpieza de pisos debe hacerse con precaución. La concentración recomendada varía, pero generalmente, 
                      una solución diluida (normalmente no más del 10%)
                    </p>
                  </div>
                  
                  <div className="application-item">
                    <h3>Limpieza y Mantenimiento</h3>
                    <p>
                      Utilizado para limpiar metales, especialmente en la preparación de superficies para la galvanoplastia o la anodización.
                    </p>
                  </div>
                </div>
                
                <div className="applications-column">
                  <div className="application-item">
                    <h3>Industria Química</h3>
                    <p>
                      Fabricación de compuestos orgánicos e inorgánicos, incluyendo fertilizantes como el nitrato de amonio.
                    </p>
                  </div>
                  
                  <div className="application-item">
                    <h3>Limpieza de Sanitarios</h3>
                    <p>
                      Limpieza y desinfección a fondo de inodoros, pisos azulejos, artefactos sanitarios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}