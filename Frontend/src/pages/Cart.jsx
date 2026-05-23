import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useContext(CartContext);

  return (
    <div
      className="container mt-4"
      style={{ maxWidth: "700px" }}
    >
      <h2>Detalles del pedido</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          {/* izquierda */}
          <div className="d-flex align-items-center gap-2">
            <img
              src={pizza.img}
              alt={pizza.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            <span className="text-capitalize">
              {pizza.name}
            </span>
          </div>

          {/* precio */}
          <span>
            $
            {pizza.price.toLocaleString("es-CL")}
          </span>

          {/* controles */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() =>
                decreaseQuantity(pizza.id)
              }
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() =>
                increaseQuantity(pizza.id)
              }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-4">
        Total: $
        {total.toLocaleString("es-CL")}
      </h3>

      <button className="btn btn-dark mt-3">
        Pagar
      </button>
    </div>
  );
};

export default Cart;