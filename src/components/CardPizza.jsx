const CardPizza = ({ pizza }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />

      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>

        <p><strong>Ingredientes:</strong></p>
        <ul>
          {pizza.ingredients.map((ingrediente, index) => (
            <li key={index}>🍕 {ingrediente}</li>
          ))}
        </ul>

        <h4 className="text-center">
          ${pizza.price.toLocaleString()}
        </h4>
      </div>
    </div>
  );
};

export default CardPizza;