import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-fushia text-xl flex text-white justify-around p-3 rounded-full ml-25 mr-25 mt-5">
      <p onClick={() => navigate(`/activities`)}>Animations</p>
      <p onClick={() => navigate(`/mood`)}>Mood Diary</p>
    </nav>
  );
};

export default Navbar;
