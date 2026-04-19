

import headerImg from "../assets/Header.jpg";

const Header = () => {
  return (
    <div
      className="text-center p-5 rounded"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      <h1>Pizzería Mamma Mia 🍕</h1>
      <p>¡Las mejores pizzas de la ciudad!</p>
      <hr />
    </div>
  );
};


export default Header;