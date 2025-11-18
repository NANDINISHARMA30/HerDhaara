import { BrowserRouter, Routes, Route } from "react-router-dom";
import HerDhara from "./pages/landing.jsx";
import Signup from "./pages/signuppage.jsx";
import Catalog from "./pages/catalog.jsx";


function App() {
  document.documentElement.classList.add("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HerDhara />} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/catalog" element={<Catalog/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
