/**
 * Archivo: main.tsx
 * Sirve para: arrancar la app de React y montarla dentro del elemento #root del HTML.
 * Consejo: aprende bien este archivo porque aquí se conectan estilos globales y el componente principal.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
