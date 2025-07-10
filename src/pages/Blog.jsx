import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Blog.css'

export default function Blog() {
  return (
    <>
     
      
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1>BLOG</h1>
          <nav className="breadcrumb">
            <span className="breadcrumb-home">🏠</span>
            <span className="breadcrumb-separator"></span>
            <span className="breadcrumb-current">Blog</span>
          </nav>
        </div>
      </section>

      {/* Blog Content */}
      <main className="blog-container">
        <div className="blog-grid">
          
          {/* Article 1 */}
          <article className="blog-card">
            <div className="blog-image">
              <img src="/cloro11.jpeg" alt="Limpieza de pisos con Mr. Cloro" />
            </div>
            <div className="blog-content">
              <h2>Recomendaciones para la limpieza de tus pisos con Mr. Cloro</h2>
              <p className="blog-date">16 de octubre de 2023</p>
              <p className="blog-excerpt">
                1.- Dilución adecuada: Para un uso óptimo, mezcla 6,67 ml de Mr. Cloro en 2 litros de agua.
2.- Ventilación adecuada: Al utilizar Mr. Cloro en espacios cerrados, asegurase de tener una buena ventilación. Abre ventanas y puertas para permitir la circulación de aire fresco.
3.- Protección Personal: Usa guantes de goma resistentes al manipular la lavandina para proteger tus manos. Si es necesario, usa gafas de protección para evitar que salpiquen tus ojos.
              </p>
            </div>
          </article>

          {/* Article 2 */}
          <article className="blog-card">
            <div className="blog-image">
              <img src="/cloro12.jpeg" alt="Consejos para uso seguro de Mr. Cloro" />
            </div>
            <div className="blog-content">
              <h2>Consejos para el uso seguro y efectivo de Mr. cloro</h2>
              <p className="blog-date">16 de octubre de 2023</p>
              <p className="blog-excerpt">
                1.- Almacenamiento seguro: Mantén tu Mr. Cloro fuera del alcance de los niños y guarda en un lugar fresco y oscuro.
2.- No mezclar Mr. Cloro con otros productos: Nunca mezcles Mr. Cloro con otros productos químicos ya que pueden producir gases tóxicos.
3.- Lavado de manos: Lávate bien las manos después de manipular el producto o superficies tratadas con él. 
              </p>
            </div>
          </article>

          {/* Article 3 */}
          <article className="blog-card">
            <div className="blog-image">
              <img src="/cloro13.jpg" alt="Brillo en la cocina con Mr. Cloro" />
            </div>
            <div className="blog-content">
              <h2>Descubre el brillo que tu cocina merece</h2>
              <p className="blog-date">16 de octubre de 2023</p>
              <p className="blog-excerpt">
                Encuentra nuestro producto en los mercados más cercanos, supermercados y tiendas del hogar de tu ciudad.
              </p>
            </div>
          </article>

          {/* Article 4 */}
          <article className="blog-card">
            <div className="blog-image">
              <img src="/cloro14.jpg" alt="Baños relucientes con Mr. Cloro" />
            </div>
            <div className="blog-content">
              <h2>Baños más relucientes y protegidos</h2>
              <p className="blog-date">16 de octubre de 2023</p>
              <p className="blog-excerpt">
                Nuestra fórmula efectiva garantiza baños más blancos que la nieve y desinfectados al más alto nivel. Disfruta de la tranquilidad de un baño verdaderamente limpio y fresco con Mr. Cloro.
              </p>
            </div>
          </article>

        </div>
      </main>

      
    </>
  )
}