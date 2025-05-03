import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import MoodDiary from "./pages/MoodDiary.tsx";
import "./index.css";

function App() {
  return (
    <>
      <div className="font-display">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<MoodDiary />} />
        </Routes>
      </div>
    </>
  );
}

export default App
