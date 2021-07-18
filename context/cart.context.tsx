export interface AppContextInterface {
  cart: {
    id: string;
    quantity: number;
  }[];
  getCart: () => any;
  addToCartContext: () => void;
  removeFromCart: () => void;
}
interface IUserCart {
  cart: {
    id: string;
    quantity: number;
  }[];
}

import { createContext, useState, useEffect } from "react";
import { removeItemFromCart, addToCart } from "../utils/cart-helper";
const CartContext = createContext<AppContextInterface | any>(null);

export const CartProvider = (props: any) => {
  const [cart, setcart] = useState<{ id: string; quantity: number }[]>([]);
  const getCart = (): any => {
    const jCart = window.localStorage.getItem("userCart");
    const userCart = JSON.parse(jCart ? jCart : "null");

    if (userCart !== null && userCart.cart !== undefined) {
      const validCart: {
        id: string;
        quantity: number;
      }[] = userCart.cart;
      setcart(() => userCart.cart);
      return validCart;
    } else {
      const userCart = JSON.stringify({ cart: [] });
      window.localStorage.setItem("userCart", userCart);

      return [];
    }
  };

  const addToCartContext = (productId: string, qty?: number) => {
    addToCart(productId, qty ? qty : 1);
    getCart();
  };
  const removeFromCart = (productId: string) => {
    removeItemFromCart(productId);
    getCart();
  };
  useEffect(() => {
    getCart();
  }, []);
  return (
    <CartContext.Provider
      value={{
        // getCart,
        // createCartForUser,
        // addProductToCart,
        cart,
        // currentCartItems,
        addToCartContext,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
