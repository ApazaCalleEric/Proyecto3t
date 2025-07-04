import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Lavandina from './pages/Lavandina'
import LavandinaLavanda from './pages/LavandinaLavanda'
import LavandinaGel from './pages/LavandinaGel'
import Piscina from './pages/Piscina'
import Quimicos from './pages/Quimicos'
import BlogPage from './pages/Blog'
import Contacto from './pages/Contacto'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lavandina" element={<Lavandina />} />
      <Route path="/lavandina-lavanda" element={<LavandinaLavanda />} />
      <Route path="/lavandina-gel" element={<LavandinaGel />} />
      <Route path="/productos-para-piscina" element={<Piscina />} />
      <Route path="/quimicos-industriales" element={<Quimicos />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
