import Header from "../components/Header";
import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";


const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="col-12 col-sm-6 col-md-4 mb-4"
          >
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;