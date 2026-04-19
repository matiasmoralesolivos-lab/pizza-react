import Header from "./Header";
import CardPizza from "./CardPizza";



const Home = () => {
  return (
    <div className="container">
      <Header />

      <div className="row mt-4">

        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEnaKgWXXuezmC5YWaM63HdLhrdEdpDBqXA&s"
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAybxOMltlloxK2ZDAWfH5TFrL8WqiQBfNwQ&s"
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s"
        />

      </div>
    </div>
  );
};

export default Home;