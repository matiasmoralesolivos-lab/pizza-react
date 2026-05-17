import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404</h1>

      <h3>Página no encontrada</h3>

      <p>
        La ruta que intentas visitar no existe.
      </p>

      <Link to="/" className="btn btn-dark mt-3">
        Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;