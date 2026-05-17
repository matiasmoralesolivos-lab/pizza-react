import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex gap-2">

        <Link to="/" className="btn btn-dark border">
          🍕 Home
        </Link>

        <Link to="/login" className="btn btn-dark border">
          🔐 Login
        </Link>

        <Link to="/register" className="btn btn-dark border">
          🔐 Register
        </Link>

        <Link to="/profile" className="btn btn-dark border">
          👤 Profile
        </Link>
      </div>

      <Link to="/cart" className="btn btn-outline-info">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  );
};

export default Navbar;