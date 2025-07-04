import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '4rem' }}>
        <h1>Blog Mr. Cloro</h1>
        <ul>
          <li>Recomendaciones para la limpieza de tus pisos con Mr. Cloro</li>
          <li>Consejos para el uso seguro y efectivo de Mr. Cloro</li>
          <li>Descubre el brillo que tu cocina merece</li>
          <li>Baños más relucientes y protegidos</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
