import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Quimicos() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem' }}>
        <h1>Químicos Industriales</h1>
        <p>
          Soluciones químicas para la industria con calidad certificada. Proveemos productos a empresas, talleres, y plantas de producción.
        </p>
        {/* IMAGEN_AQUI */}
      </main>
      <Footer />
    </>
  )
}
