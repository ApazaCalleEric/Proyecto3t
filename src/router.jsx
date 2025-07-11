// router.js
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lavandina from './pages/Lavandina'
import LavandinaLavanda from './pages/LavandinaLavanda'
import LavandinaGel from './pages/LavandinaGel'
import Piscina from './pages/Piscina'
import Quimicos from './pages/Quimicos'
import BlogPage from './pages/Blog'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'lavandina',
        element: <Lavandina />
      },
      {
        path: 'lavandina-lavanda',
        element: <LavandinaLavanda />
      },
      {
        path: 'lavandina-gel',
        element: <LavandinaGel />
      },
      {
        path: 'productos-para-piscina',
        element: <Piscina />
      },
      {
        path: 'quimicos-industriales',
        element: <Quimicos />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'contacto',
        element: <Contacto />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  // Rutas del código antiguo (mantenidas como alternativas)
  { path: '/lavandina', element: <Lavandina /> },
  { path: '/lavandina-lavanda', element: <LavandinaLavanda /> },
  { path: '/lavandina-gel', element: <LavandinaGel /> },
  { path: '/productos-para-piscina', element: <Piscina /> },
  { path: '/quimicos-industriales', element: <Quimicos /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contacto', element: <Contacto /> }
])

export default router