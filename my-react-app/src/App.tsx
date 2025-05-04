import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import MoodDiary from "./pages/MoodDiary.tsx";
import "./index.css";
import Activities from "./pages/Activities.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <>
      <div className="font-display">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<MoodDiary />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App
