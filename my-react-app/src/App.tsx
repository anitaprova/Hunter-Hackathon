import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import MoodDiary from "./pages/MoodDiary.tsx";
import "./index.css";
import Activities from "./pages/Activities.tsx";
import Profile from "./pages/Profile.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import ForgetPassword from "./pages/ForgetPassword.tsx";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App
