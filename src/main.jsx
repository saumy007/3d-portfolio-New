import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useGLTF } from '@react-three/drei'
import './index.css'
import App from './App.jsx'

// Tell drei's useGLTF where to find the Draco decoder WASM (served from /draco/)
useGLTF.setDecoderPath(import.meta.env.BASE_URL + 'draco/')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
