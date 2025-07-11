import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo a la izquierda */}
      <div className="logo-container">
        <img
          src="/mrcloro.png"
          alt="Mr Cloro Logo"
        />
      </div>

      {/* Menú y botón a la derecha */}
      <ul className="menu-principal">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Inicio
          </NavLink>
        </li>

        <li className="menu-item-desinfectantes">
          <span>Desinfectantes</span>
          <ul className="submenu-desinfectantes">
            <li>
              <NavLink to="/lavandina" className={({ isActive }) => (isActive ? 'active' : '')}>
                Lavandina
              </NavLink>
            </li>
            <li>
              <NavLink to="/lavandina-lavanda" className={({ isActive }) => (isActive ? 'active' : '')}>
                Lavandina Lavanda
              </NavLink>
            </li>
            <li>
              <NavLink to="/lavandina-gel" className={({ isActive }) => (isActive ? 'active' : '')}>
                Lavandina Gel
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/productos-para-piscina" className={({ isActive }) => (isActive ? 'active' : '')}>
            Productos para piscina
          </NavLink>
        </li>

        <li 
          className="menu-item-mas"
          onMouseEnter={() => setShowMoreMenu(true)}
          onClick={() => setShowMoreMenu(!showMoreMenu)}
        >
          &#8230;
          <ul className="submenu-mas" style={{ display: showMoreMenu ? 'block' : 'none' }}>
            <li>
              <NavLink 
                to="/quimicos-industriales" 
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setShowMoreMenu(false)}
              >
                Químicos industriales
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setShowMoreMenu(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contacto" 
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setShowMoreMenu(false)}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <button className="btn-mrcloro" onClick={handleLoginClick}>
            Iniciar sesion
          </button>
        </li>
      </ul>
    </header>
  )
}