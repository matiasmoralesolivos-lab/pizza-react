const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav>
  <div className="container bg-dark text-white d-flex justify-content-between align-items-center py-2 rounded">

    <div className="d-flex align-items-center gap-3">
      <h5 className="mb-0">Pizzeria mamma mia!!!!</h5>

      <div>
        <button className="btn btn-outline-light me-2">🍕 Home</button>
        <button className="btn btn-outline-light me-2">🔐 Login</button>
        <button className="btn btn-outline-light me-2">🔐 Register</button>
      </div>
    </div>

    <button className="btn btn-success">
      🛒 Total: ${total.toLocaleString("es-CL")}
    </button>

  </div>
</nav>
  );
};

export default Navbar;