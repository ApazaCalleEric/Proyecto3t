import React, { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase-config'
import router from './router'

// Contexto para manejar el estado de autenticación
export const AuthContext = React.createContext()

export default function App() {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listener para cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user)
        
        // Obtener el tipo de usuario desde Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid))
          if (userDoc.exists()) {
            setUserType(userDoc.data().userType)
          }
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error)
        }
      } else {
        setUser(null)
        setUserType('')
      }
      setLoading(false)
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Cargando...
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, userType, loading }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}