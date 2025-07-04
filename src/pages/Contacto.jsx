import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem' }}>
        <h1>Contáctanos</h1>
        <p>
          Dirección: Calle Cupesí Nro. 9035 Km 9, Carretera al Norte Santa Cruz – Bolivia<br />
          Teléfono: (591-3) 3228881<br />
          Celular: (591) 71027340<br />
          Email: info@stc.com.bo
        </p>
        {/* IMAGEN_AQUI */}
      </main>
      <Footer />
    </>
  )
}
