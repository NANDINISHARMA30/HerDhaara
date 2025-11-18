import { BrowserRouter, Routes, Route } from "react-router-dom";
import HerDhara from "./pages/landing.jsx";
import Signup from "./pages/signuppage.jsx";
import Catalog from "./pages/catalog.jsx";
import TeacherProfile from "./pages/TeachingProfile.jsx";
import LiveClassPage from "./pages/Live session.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserManagement from "./pages/Admin/UserManagement.jsx";
import Onboarding from "./pages/Onboarding.jsx";



function App() {
  document.documentElement.classList.add("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HerDhara />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>\

        <Route path="/signup" element={<Signup/>} />
        <Route path="/teacher" element={<TeacherProfile/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/class" element={<LiveClassPage/>} />
        <Route path="/onboarding" element={<Onboarding/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
