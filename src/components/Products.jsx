import './Products.css'

export default function Products() {
  const cards = [
    {
      title: 'Lavandina',
      desc: 'Calidad y concentración de cloro ideal.',
      img: '/icon1.png' // reemplaza
    },
    {
      title: 'Promociones',
      desc: 'Descubre nuestras increíbles novedades.',
      img: '/icon2.png' // reemplaza
    },
    {
      title: 'Contacto',
      desc: 'Estamos aquí para ayudarte.',
      img: '/icon3.png' // reemplaza
    }
  ]

  return (
    <section id="inicio-contenido" className="productos">
      {cards.map(card => (
        <article className="producto-card" key={card.title}>
          <img src={card.img} alt={card.title} />
          <div className="producto-info">
            <h3>{card.title.toUpperCase()}</h3>
            <p>{card.desc}</p>
          </div>
        </article>
      ))}
    </section>
  )
}