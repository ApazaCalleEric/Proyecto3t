import { useState, useEffect } from 'react'
import './Carrusel.css'

export default function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const productos = [
    {
      id: 1,
      title: "MR. CLORO DE 250 GMS",
      image: "/lavan1.jpg",
      description: "Polvo desinfectante en formato compacto"
    },
    {
      id: 2,
      title: "MR. CLORO DE 1 LITRO LAVANDA",
      image: "/lavan2.jpg",
      description: "Lavandina líquida con aroma a lavanda"
    },
    {
      id: 3,
      title: "MR. CLORO EN GEL 1 LITRO",
      image: "/lavan3.jpg",
      description: "Gel desinfectante de larga duración"
    },
    {
      id: 4,
      title: "MR. CLORO DESINFECTANTE",
      image: "/lavan4.jpg",
      description: "Desinfectante multiusos para toda la casa"
    },
    {
      id: 5,
      title: "MR. CLORO ANTIBACTERIAL",
      image: "/lavan5.jpg",
      description: "Fórmula antibacterial de acción rápida"
    },
    {
      id: 6,
      title: "MR. CLORO CONCENTRADO",
      image: "/lavan6.jpg",
      description: "Concentrado para dilución profesional"
    },
    {
      id: 7,
      title: "MR. CLORO MULTIUSOS",
      image: "/lavan7.jpg",
      description: "Solución integral para limpieza del hogar"
    }
  ]

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productos.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [productos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productos.length) % productos.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="carrusel">
      <div className="carrusel-header">
        <h2>¡Limpieza extrema en un solo paso!</h2>
        <h3>LIMPIEZA / DESINFECCIÓN / PROTECCIÓN</h3>
        <p>NUESTRA LÍNEA DE PRODUCTOS</p>
      </div>

      <div className="carrusel-container">
        <button className="carrusel-btn prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="carrusel-track">
          <div 
            className="carrusel-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {productos.map((producto) => (
              <div key={producto.id} className="carrusel-slide">
                <div className="producto-card">
                  <div className="producto-image">
                    <img src={producto.image} alt={producto.title} />
                  </div>
                  <div className="producto-info">
                    <h4>{producto.title}</h4>
                    <p>{producto.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carrusel-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="carrusel-dots">
        {productos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}