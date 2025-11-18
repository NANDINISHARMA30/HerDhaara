import { BrowserRouter, Routes, Route } from "react-router-dom";
import HerDhara from "./pages/landing.jsx";

function App() {
  document.documentElement.classList.add("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HerDhara />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
