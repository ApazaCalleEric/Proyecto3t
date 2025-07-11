import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('administrador');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loadDemoCredentials = () => {
    setEmail('lisandro@gmail.com');
    setPassword('admin1234');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Iniciar sesión
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Verificar el tipo de usuario en Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('Usuario logueado:', userData.userType);
          redirectBasedOnUserType(userData.userType);
        } else {
          setError('Usuario no encontrado en la base de datos');
        }
      } else {
        // Registrar nuevo usuario
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Guardar información del usuario en Firestore
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          userType: userType,
          createdAt: new Date().toISOString()
        });
        
        console.log('Usuario registrado como:', userType);
        redirectBasedOnUserType(userType);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const redirectBasedOnUserType = (type) => {
    // Implementa aquí tu lógica de redirección
    switch (type) {
      case 'administrador':
        console.log('Redirigiendo a panel de administrador');
        // Redirige al inicio después de autenticarse
        navigate('/');
        break;
      case 'encargado-inventario':
        console.log('Redirigiendo a panel de inventario');
        // Redirige al inicio después de autenticarse
        navigate('/');
        break;
      case 'encargado-producto':
        console.log('Redirigiendo a panel de productos');
        // Redirige al inicio después de autenticarse
        navigate('/');
        break;
      default:
        console.log('Tipo de usuario no reconocido');
        // Redirige al inicio por defecto
        navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
          <p>Accede a tu cuenta según tu rol</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@correo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="userType">Tipo de Usuario</label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="administrador">Administrador</option>
                <option value="encargado-inventario">Encargado de Inventario</option>
                <option value="encargado-producto">Encargado de Producto</option>
              </select>
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Procesando...' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
          </button>

          {isLogin && (
            <button 
              type="button" 
              className="demo-button" 
              onClick={loadDemoCredentials}
            >
              Usar credenciales de demo
            </button>
          )}
        </form>

        <div className="login-footer">
          <p>
            {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
            <button
              type="button"
              className="toggle-button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Registrarse' : 'Iniciar Sesión'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;