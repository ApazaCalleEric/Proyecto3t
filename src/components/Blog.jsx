import { NavLink } from 'react-router-dom'

export default function Cta() {
  return (
    <section className="cta">
      <h2>¿Buscas la lavandina más efectiva? ¡La tenemos aquí!</h2>
      <p>Elige nuestra lavandina de calidad superior.</p>
      <NavLink to="/contacto" className="btn-contacto">
        Contáctanos Ahora
      </NavLink>
    </section>
  )
}
