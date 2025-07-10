import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Piscina.css';

export default function Piscina() {
  // Rutas de las imágenes (reemplaza con tus rutas reales)
  const imagenTricloro = "/tricloro.png";
  const imagenDicloro = "/dicloro.png";
  const imagenSulfatoAluminio = "/sulfato.png";
  const imagenSulfatoCobre = "/decobre.png";
  
  return (
    <>
      
      <div className="piscina-container">
        
        {/* Header con imagen de fondo */}
        <div className="piscina-header">
          <div className="breadcrumb">
            <span>🏠</span>
            <span>→</span>
            <span>Productos para Piscina</span>
          </div>
          <h1>PRODUCTOS PARA PISCINA</h1>
        </div>
        
        {/* Sección principal */}
        <div className="piscina-main">
          <div className="content-wrapper">
            <div className="products-grid">
              {/* Producto Tricloro Granulado */}
              <div className="product-item">
                <div className="product-icon">🧪</div>
                <h2>TRICLORO GRANULADO</h2>
                <p className="product-subtitle">CLORO DISOLUCIÓN LENTA / ALTA EFICIENCIA</p>
                
                <div className="product-image">
                  <img src={imagenTricloro} alt="Tricloro Granulado" />
                </div>
                
                <div className="advantages-box">
                  <h3>Ventajas</h3>
                  <p>
                    En efectos exentos una amplia gama de mitolograpetismo. Es fácil de hacer hipolipamiento en colocar un sistema con una disipamiento familiar. 
                    El nuevo lenguaje del uso y sus aplicaciones facilitará los aumentos el nivel de pH del agua, a diferencia de otros desinfectantes.
                  </p>
                  <ul>
                    <li>Con Tricloro Granulado y su acción de disolución lenta!</li>
                    <li>Desinfección</li>
                  </ul>
                </div>
              </div>
              
              {/* Producto Dicloro Granulado */}
              <div className="product-item">
                <div className="product-icon">⚗️</div>
                <h2>DICLORO GRANULADO</h2>
                <p className="product-subtitle">ACCIÓN RÁPIDA Y MAYOR ESTABILIDAD DEL CLORO / MÁS RESISTENTE AL SOL Y ALTAS TEMPERATURAS</p>
                
                <div className="product-image">
                  <img src={imagenDicloro} alt="Dicloro Granulado" />
                </div>
                
                <div className="advantages-box">
                  <h3>Ventajas</h3>
                  <p>
                    Comprende orgánicos de disolución rápida, alterando estabilidades y que no contenidos del CO<sub>2</sub> en datos (día, uso para el tratamiento de agua en piscinas, 
                    sistemas de refrigeración, personas de desinhibición en aluminio, condiciones, desinfectante de superficies, irregularidades, botellos sea alta subsidiaria o segura, 
                    es difícil ser transformar la cantidad necesaria de dichos material.
                  </p>
                  <ul>
                    <li>Presentación</li>
                    <li>Desificación</li>
                    <li>Consejos de Uso</li>
                  </ul>
                </div>
              </div>
              
              {/* Producto Sulfato de Aluminio */}
              <div className="product-item">
                <div className="product-icon">🧴</div>
                <h2>SULFATO DE ALUMINIO</h2>
                <p className="product-subtitle">COAGULANTE / REGULADOR DE PH / PRECIPITADOR DE SÓLIDOS / CLARIFICANTE</p>
                
                <div className="product-image">
                  <img src={imagenSulfatoAluminio} alt="Sulfato de Aluminio" />
                </div>
                
                <div className="advantages-box">
                  <h3>Ventajas</h3>
                  <p>
                    Aluminar tu piscina tributaria con sulfata de Aluminio Mr. Cloro? Si añade colombia en un soledón efectivo y económico para mantener el agua de tu piscina clave y firme, 
                    o finalice de alumínio Mr. Cloro en la inauguración. Este producto química no fue ni de una y alumnos efectivos para eliminar su fusibilidad y los sedimentos del agua de tu piscina.
                  </p>
                  <p>
                    ¿Por qué elegir? Sufiste de alumínio Mr. Cloro y deseo de ser utilizado mediante dificultad de alumínio es una opción económica para mantener tu piscina en las mejores condiciones. 
                    Es fácil de usar y no requiere de una gran cantidad de producto para ver resultados formulados.
                  </p>
                  
                  <h4>Presentación</h4>
                  <h4>¿Cómo funciona?</h4>
                  <h4>¿Qué cantidad de Sulfato de Aluminio Mr. Cloro utilizar?</h4>
                </div>
              </div>
              
              {/* Producto Sulfato de Cobre */}
              <div className="product-item">
                <div className="product-icon">🧫</div>
                <h2>SULFATO DE COBRE</h2>
                <p className="product-subtitle">FUNGICIDA DE LARGA DURACIÓN / ELIMINA HONGOS Y ALGAS</p>
                
                <div className="product-image">
                  <img src={imagenSulfatoCobre} alt="Sulfato de Cobre" />
                </div>
                
                <div className="advantages-box">
                  <h3>Ventajas</h3>
                  <p>
                    Si buscan un soledón efectivo y económico para mantener tu piscina libre de alguna y otra microeconomía, si sufriere de color de Mr. Cloro en la opción inicial, 
                    este producto química se fue utilizado durante años para mantener el agua de tu piscina tributaria y saludable para realizar.
                  </p>
                  <p>
                    ¿Cómo funciona? El suficiente deberá estar realizado en un dispositivo para aumentar el conocimiento de alguna y otra microeconomía en el agua de tu piscina. 
                    Este producto tiene una eficacia fielmente en el agua y se distribuye a través del sistema de filtración para mantener tu piscina libre de algún tipo.
                  </p>
                  
                  <h4>Alumnos efectivos, una opción económica para mantener tu piscina en las mejores condiciones</h4>
                  
                  <div className="dosification-box">
                    <h4>Dosificación</h4>
                    <ul>
                      <li>¿Cómo usarlo?</li>
                      <li>Limpieza de algas en la piscina</li>
                    </ul>
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