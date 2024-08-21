import { createBrowserRouter} from "react-router-dom";
import Contato from "./pages/contato/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contato />
  },
  {
    path: "/contato",
    element: <Contato />
  },
])

export default router;
