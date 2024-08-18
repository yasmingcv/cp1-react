import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import NavBar from './components/navbar/navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <AppRoutes />
  </StrictMode>,
)
