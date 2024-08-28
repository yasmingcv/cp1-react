import { createBrowserRouter} from "react-router-dom";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contato />
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
