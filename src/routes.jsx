import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./pages/contato/contato";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contato />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
