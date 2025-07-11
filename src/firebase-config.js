// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8msxmJd2Yer2ckqblsb__9P87B3uA4PY",
  authDomain: "proyecto3t-aa6d2.firebaseapp.com",
  projectId: "proyecto3t-aa6d2",
  storageBucket: "proyecto3t-aa6d2.firebasestorage.app",
  messagingSenderId: "677018526016",
  appId: "1:677018526016:web:d67af133d15c333db1daa5",
  measurementId: "G-V8003VMBCW"
};

// Initialize Firebase
let app;
let analytics;
let auth;
let db;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
  db = getFirestore(app);

  // Configuración para desarrollo local (emuladores)
  if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
    console.log("Modo desarrollo: Conectado a emuladores de Firebase");
  }

  console.log("Firebase inicializado correctamente");
} catch (error) {
  console.error("Error al inicializar Firebase:", error);
  throw new Error("Error de configuración de Firebase. Verifica tu conexión y configuración.");
}

// Exporta los servicios
export { auth, db, analytics };

// Exporta la app por si acaso
export default app;