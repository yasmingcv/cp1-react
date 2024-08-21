import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/navbar/navbar'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
