const CardPizza = ({ pizza }) => {
  return (
    <div className="card h-100 shadow-sm">
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

        <button className="btn btn-dark mt-2">
          Añadir
        </button>
      </div>
    </div>
  );
};

export default CardPizza;