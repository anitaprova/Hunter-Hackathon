import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-fushia text-xl flex text-white justify-around p-3 rounded-full ml-25 mr-25 mt-5">
      <p className="hover:cursor-pointer" onClick={() => navigate(`/`)}>
        Home
      </p>

      <p className="hover:cursor-pointer" onClick={() => navigate(`/activities`)}>
        Animations
      </p>
      <p className="hover:cursor-pointer" onClick={() => navigate(`/mood`)}>
        Mood Diary
      </p>
    </nav>
  );
};

export default Navbar;
