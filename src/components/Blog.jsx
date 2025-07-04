import './Blog.css'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Consejos para una limpieza efectiva",
      description: "Descubre técnicas y consejos profesionales para mantener tu hogar impecable con Mr. Cloro",
      image: "/cloro11.jpeg",
      category: "Tips"
    },
    {
      id: 2,
      title: "3 Consejos para el uso seguro y efectivo",
      description: "Aprende a usar nuestros productos de manera segura y obtén los mejores resultados",
      image: "/cloro12.jpeg",
      category: "Consejos"
    },
    {
      id: 3,
      title: "Descubre el brillo que tu cocina merece",
      description: "Tips especializados para mantener tu cocina reluciente y libre de bacterias",
      image: "/cloro13.jpg",
      category: "Promociones"
    },
    {
      id: 4,
      title: "Baños más relucientes y protegidos",
      description: "Guía completa para la desinfección y limpieza profunda de baños",
      image: "/cloro14.jpg",
      category: "Noticias"
    }
  ]

  return (
    <section className="blog">
      <div className="blog-header">
        <p className="blog-subtitle">BLOG MR. CLORO</p>
        <h2 className="blog-title">Promociones / Tips / Noticias</h2>
      </div>
      <div className="blog-container">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-category">{post.category}</div>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button className="blog-read-more">Leer más</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}