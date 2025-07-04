import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Lavandina from './pages/Lavandina'
import LavandinaLavanda from './pages/LavandinaLavanda'
import LavandinaGel from './pages/LavandinaGel'
import Piscina from './pages/Piscina'
import Quimicos from './pages/Quimicos'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

export default createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/lavandina', element: <Lavandina /> },
  { path: '/lavandina-lavanda', element: <LavandinaLavanda /> },
  { path: '/lavandina-gel', element: <LavandinaGel /> },
  { path: '/productos-para-piscina', element: <Piscina /> },
  { path: '/quimicos-industriales', element: <Quimicos /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contacto', element: <Contacto /> }
])
