import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/home/Home.jsx"
import Contato from "./pages/contato/contato"
import Sobre from "./pages/sobre/sobre"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path:"/sobre",
    element: <Sobre />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
