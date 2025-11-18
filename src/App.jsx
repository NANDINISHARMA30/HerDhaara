import { BrowserRouter, Routes, Route } from "react-router-dom";
import HerDhara from "./pages/landing.jsx";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard.jsx";
=======
import Signup from "./pages/signuppage.jsx";
import Catalog from "./pages/catalog.jsx";
import TeacherProfile from "./pages/TeachingProfile.jsx";
import LiveClassPage from "./pages/Live session.jsx";
import Dashboard from "./pages/counselling.jsx";

>>>>>>> 909a593e176d3899ea227a753d03aa491894cc23

function App() {
  document.documentElement.classList.add("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HerDhara />} />
<<<<<<< HEAD
        <Route path="/Dashboard" element={<Dashboard/>}/>
=======

        <Route path="/signup" element={<Signup/>} />
        <Route path="/teacher" element={<TeacherProfile/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/class" element={<LiveClassPage/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>

>>>>>>> 909a593e176d3899ea227a753d03aa491894cc23
      </Routes>
    </BrowserRouter>
  );
}

export default App;
