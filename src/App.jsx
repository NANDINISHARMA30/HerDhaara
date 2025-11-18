import { BrowserRouter, Routes, Route } from "react-router-dom";
import HerDhara from "./pages/landing.jsx";
import Signup from "./pages/signuppage.jsx";
import Catalog from "./pages/catalog.jsx";
import TeacherProfile from "./pages/TeachingProfile.jsx";
import LiveClassPage from "./pages/Live session.jsx";


function App() {
  document.documentElement.classList.add("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HerDhara />} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/teacher" element={<TeacherProfile/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/class" element={<LiveClassPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
