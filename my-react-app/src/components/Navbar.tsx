import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-fushia text-xl flex text-white justify-around p-3 rounded-full ml-25 mr-25 mt-5">
      <div
        className="flex items-center gap-2 hover:cursor-pointer hover:animate-bounce"
        onClick={() => navigate(`/`)}
      >
        <img src="/cloud.png" alt="Home" className="w-9 h-6" />
        <span>Home</span>
      </div>

      <div
        className="flex items-center gap-2 hover:cursor-pointer hover:animate-bounce"
        onClick={() => navigate(`/activities`)}
      >
        <img src="/unwind.png" alt="Unwind" className="w-6 h-6" />
        <span>Unwind</span>
      </div>

      <div
        className="flex items-center gap-2 hover:cursor-pointer hover:animate-bounce"
        onClick={() => navigate(`/mood`)}
      >
        <img src="diary.png" alt="Mood Diary" className="w-6 h-6" />
        <span>Mood Diary</span>
      </div>

      <div
        className="hover:cursor-pointer hover:cursor-pointer hover:animate-bounce"
        onClick={() => navigate(`/profile`)}
      >
        <AccountCircleIcon fontSize="large" />
      </div>
    </nav>
  );
};

export default Navbar;
