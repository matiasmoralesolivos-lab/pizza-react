import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error(error));
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100"
              alt={pizza.name}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-capitalize">
                {pizza.name}
              </h2>

              <p>{pizza.desc}</p>

              <h4>
                Precio: $
                {pizza.price.toLocaleString("es-CL")}
              </h4>

              <p className="mt-3">
                <strong>Ingredientes:</strong>
              </p>

              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>

              <button className="btn btn-dark mt-3">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;