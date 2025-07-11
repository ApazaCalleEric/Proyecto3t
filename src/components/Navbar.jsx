import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ padding: '8px 0', minHeight: '60px' }}>
      <div className="logo-container" style={{ height: '80px' }}>
        <img src="/mrcloro.png" alt="Mr Cloro Logo" style={{ height: '100%', width: 'auto' }} />
      </div>

      <ul className="menu-principal">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Inicio
          </NavLink>
        </li>

        <li className="menu-item-desinfectantes">
          <span>Desinfectantes</span>
          <ul className="submenu-desinfectantes">
            <li><NavLink to="/lavandina">Lavandina</NavLink></li>
            <li><NavLink to="/lavandina-lavanda">Lavandina Lavanda</NavLink></li>
            <li><NavLink to="/lavandina-gel">Lavandina Gel</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink to="/productos-para-piscina">Productos para piscina</NavLink>
        </li>

        <li 
          className="menu-item-mas"
          onMouseEnter={() => setShowMoreMenu(true)}
          onClick={() => setShowMoreMenu(!showMoreMenu)}
        >
          &#8230;
          <ul className="submenu-mas" style={{ display: showMoreMenu ? 'block' : 'none' }}>
            <li><NavLink to="/quimicos-industriales" onClick={() => setShowMoreMenu(false)}>Químicos industriales</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setShowMoreMenu(false)}>Blog</NavLink></li>
            <li><NavLink to="/contacto" onClick={() => setShowMoreMenu(false)}>Contacto</NavLink></li>
          </ul>
        </li>

        <li>
          <button className="btn-mrcloro" onClick={() => navigate('/login')}>
            Iniciar sesion
          </button>
        </li>
      </ul>
    </header>
  )
}