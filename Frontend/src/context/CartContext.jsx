import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // AGREGAR PRODUCTO
  const addToCart = (pizza) => {
    const pizzaExist = cart.find(
      (item) => item.id === pizza.id
    );

    if (pizzaExist) {
      const updatedCart = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, count: item.count + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...pizza,
          count: 1,
        },
      ]);
    }
  };

  // AUMENTAR
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, count: item.count + 1 }
        : item
    );

    setCart(updatedCart);
  };

  // DISMINUIR
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    setCart(updatedCart);
  };

  // TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;