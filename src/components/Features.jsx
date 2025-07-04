import './Features.css'

export default function Features() {
  return (
    <section className="beneficios">
      <div className="beneficios-container">
        <div className="beneficios-imagen">
          <img src="/chica.png" alt="Mujer limpiando con Mr. Cloro" />
        </div>
        <div className="beneficios-contenido">
          <h2>¿Buscas una forma efectiva de mantener tu hogar limpio y seguro?</h2>
          <p>Mr. Cloro es la respuesta. Nuestra lavandina es una solución confiable que se encarga de la desinfección y la limpieza profunda, brindando un ambiente saludable para ti y tu familia.</p>
          <div className="beneficios-lista">
            <div className="beneficios-columna">
              <div className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <span className="beneficio-texto">Desinfección Efectiva</span>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <span className="beneficio-texto">Elimina Olores Desagradables</span>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <span className="beneficio-texto">Multiusos</span>
              </div>
            </div>
            <div className="beneficios-columna">
              <div className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <span className="beneficio-texto">Blanqueo Impecable</span>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <span className="beneficio-texto">Fórmula de Confianza</span>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <span className="beneficio-texto">Calidad Comprobada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}