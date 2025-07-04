import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LavandinaGel() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem' }}>
        <h1>Lavandina en Gel</h1>
        <p>
          Poder desinfectante concentrado en formato gel. No gotea, se adhiere mejor a las superficies y permite una limpieza más profunda.
        </p>
        {/* IMAGEN_AQUI */}
      </main>
      <Footer />
    </>
  )
}
