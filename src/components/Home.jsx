import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../pizzas"


const Home = () => {
  return (
    <div className="container mt-4 d-flex flex-wrap gap-3 justify-content-center">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;