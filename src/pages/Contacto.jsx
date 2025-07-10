import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contacto.css'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    departamento: '',
    ciudad: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
  }

  return (
    <>
      
      
      {/* Hero Section */}
      <section className="contacto-hero">
        <div className="hero-content">
          <h1>Productos que marcan la diferencia</h1>
          <p>¡Limpieza impecable en cada gota! Prueba nuestra lavandina Mr. Cloro hoy y experimenta la diferencia.</p>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="contacto-section">
        <div className="contacto-container">
          
          {/* Contact Info */}
          <div className="contacto-info">
            <div className="info-header">
              <div className="info-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <div className="chat-bubble">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
              </div>
              <h3>DATOS DE CONTACTO</h3>
            </div>

            <div className="info-item">
              <div className="info-item-icon phone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="info-content">
                <p className="info-label">Llámanos Ahora</p>
                <p className="info-value">(591-3) 3228881</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-item-icon email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="info-content">
                <p className="info-label">Soporte Email</p>
                <p className="info-value">info@stc.com.bo</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-item-icon location">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="info-content">
                <p className="info-label">Dirección</p>
                <p className="info-value">Calle Cupesí Nro. 9035 Km 9, Carretera al Norte</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contacto-form">
            <h2>Contáctanos</h2>
            <p className="form-description">
              ¡Nos encantaría saber de ti! Si tienes preguntas, comentarios o necesitas asistencia, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte. Puedes comunicarte con nosotros llenando el siguiente formulario:
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="nombreCompleto"
                  placeholder="Nombre Completo (*)"
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Email (*)"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                >
                  <option value="">Departamento de Ventas</option>
                  <option value="ventas">Ventas</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="marketing">Marketing</option>
                  <option value="administracion">Administración</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                >
                  <option value="">Ciudad</option>
                  <option value="santa-cruz">Santa Cruz</option>
                  <option value="la-paz">La Paz</option>
                  <option value="cochabamba">Cochabamba</option>
                  <option value="sucre">Sucre</option>
                  <option value="potosi">Potosí</option>
                  <option value="tarija">Tarija</option>
                  <option value="oruro">Oruro</option>
                  <option value="beni">Beni</option>
                  <option value="pando">Pando</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="mensaje"
                  placeholder="Tu Mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </section>

    
    </>
  )
}