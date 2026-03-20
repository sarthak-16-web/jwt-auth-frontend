import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

const Navbar = () => {
  const { accessToken, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      logout();
      navigate("/login");
    } catch (error) {
      console.error(error);
      logout();
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        {!accessToken && <Link to="/register">Register</Link>}
        {!accessToken && <Link to="/login">Login</Link>}
        {accessToken && <Link to="/profile">Profile</Link>}
      </div>

      <div className="nav-right">
        {accessToken && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;