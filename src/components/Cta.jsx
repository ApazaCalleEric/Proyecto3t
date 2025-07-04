import { NavLink } from 'react-router-dom'

// src/components/Cta.jsx
export default function Cta() {
  return (
    <section style={{
      background: 'white',
      margin: '60px auto',
      padding: '40px 60px',
      borderRadius: '50px',
      maxWidth: '1100px',
      textAlign: 'left',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1
    }}>
      <h2 style={{ color: '#0f5e12', fontSize: '2rem', marginBottom: '10px' }}>
        ¿Buscas la lavandina más efectiva? ¡La tenemos aquí!
      </h2>
      <p style={{ color: '#999', fontSize: '1.1rem', marginBottom: '20px' }}>
        Elige nuestra lavandina de calidad superior
      </p>
      <a href="/contacto" style={{
        display: 'inline-block',
        backgroundColor: '#0f5e12',
        color: 'white',
        padding: '12px 25px',
        borderRadius: '999px',
        fontWeight: '700',
        textDecoration: 'none'
      }}>
        📅 Contáctanos Ahora
      </a>
    </section>
  )
}

