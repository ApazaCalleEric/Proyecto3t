import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LavandinaLavanda() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem' }}>
        <h1>Lavandina Lavanda</h1>
        <p>
          Nuestra lavandina con aroma a lavanda une la máxima desinfección con una fragancia agradable. Ideal para limpieza de baños, cocinas y superficies generales.
        </p>
        {/* IMAGEN_AQUI */}
      </main>
      <Footer />
    </>
  )
}
