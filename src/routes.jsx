import { createBrowserRouter} from "react-router-dom";
import Sobre from "./pages/sobre/sobre";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/contato";

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
    path:"/",
    element: <Sobre />
  },

  {
    path:"/sobre",
    element: <Sobre />
  },
])

export default router;
