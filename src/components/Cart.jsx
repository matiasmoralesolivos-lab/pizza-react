import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
    setCart(updatedCart);
  };

  const disminuir = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item,
      )
      .filter((item) => item.count > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <h4 className="mb-4">Detalles del pedido:</h4>

      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex align-items-center mb-3">
          <div
            className="d-flex align-items-center gap-2"
            style={{ width: "200px" }}
          >
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
            <span className="text-capitalize">{pizza.name}</span>
          </div>

          <div
            style={{
              width: "120px",
              textAlign: "right",
            }}
          >
            ${pizza.price.toLocaleString("es-CL")}
          </div>

          <div
            className="d-flex align-items-center gap-2 justify-content-end"
            style={{ width: "140px" }}
          >
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => disminuir(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-4">Total: ${total.toLocaleString("es-CL")}</h3>

      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
