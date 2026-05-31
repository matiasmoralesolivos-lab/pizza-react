import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex gap-2">

        <Link to="/" className="btn btn-dark border">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-dark border">
              👤 Profile
            </Link>

            <button
              className="btn btn-dark border"
              onClick={logout}
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-dark border">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-dark border">
              📝 Register
            </Link>
          </>
        )}
      </div>

      <Link
        to="/cart"
        className="btn btn-outline-info"
      >
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
};

export default Navbar;