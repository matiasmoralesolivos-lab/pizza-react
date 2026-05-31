import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card shadow-sm">
      <img
        src={pizza.img}
        className="card-img-top p-2"
        alt={pizza.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "contain",
          backgroundColor: "#fff",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">
          {pizza.name}
        </h5>

        <p>
          <strong>Ingredientes:</strong>
        </p>

        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <h4 className="mt-auto text-center">
          ${pizza.price.toLocaleString("es-CL")}
        </h4>

        <button
          className="btn btn-dark mt-2"
          onClick={() => addToCart(pizza)}
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default CardPizza;