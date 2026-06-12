import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useContext(CartContext);

  const { token } = useContext(UserContext);

  const [successMessage, setSuccessMessage] =
    useState("");

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/checkouts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart,
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage(
          "¡Compra realizada con éxito!"
        );
      } else {
        alert("Error al realizar la compra");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }
  };

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

          <span>
            ${pizza.price.toLocaleString("es-CL")}
          </span>

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
        Total: ${total.toLocaleString("es-CL")}
      </h3>

      <button
        className="btn btn-dark mt-3"
        disabled={!token}
        onClick={handleCheckout}
      >
        Pagar
      </button>

      {successMessage && (
        <div
          className="alert alert-success mt-3"
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Cart;