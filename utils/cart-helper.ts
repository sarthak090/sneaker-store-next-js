export const addToCart = (productId: string, qty: number) => {
  //CHECK CART AVAIlable

  if (getCart() !== null) {
    // check product is in cart if have in increase qty
    //add new product to cart
    const { inCart, productIndex } = hasProductInCart(
      productId,
      getCart().cart
    );

    if (inCart) {
      //increase qty
      if (qty) {
        changeQty(productIndex, qty);
        return;
      }
      increseQty(productIndex);
    } else {
      //add new product to cart
      addNewProductToCart(productId);
    }
  } else {
    //create new cart and add the product
    createCart(productId);
  }

  return;
};

export const getCart = () => {
  if (window) {
    const userCart = window.localStorage.getItem("userCart");
    return JSON.parse(userCart ? userCart : "null");
  } else {
    return null;
  }
};
const increseQty = (productIndex: number) => {
  let userCart = getCart();
  const product = userCart.cart[productIndex];
  const newProductData = {
    ...product,
    quantity: parseInt(product.quantity) + 1,
  };
  userCart.cart[productIndex] = newProductData;
  console.log(userCart);
  return setUserCart(userCart);
};

const changeQty = (productIndex: number, qty: number) => {
  let userCart = getCart();
  const product = userCart.cart[productIndex];
  const newProductData = {
    ...product,
    quantity: qty,
  };
  userCart.cart[productIndex] = newProductData;
  console.log(userCart);
  return setUserCart(userCart);
};

export const hasProductInCart = (
  id: string,
  cart: { id: string; quantity: number }[]
) => {
  const productIndex = cart.findIndex((item) => item.id == id);
  if (productIndex > -1) {
    return {
      inCart: true,
      productIndex,
    };
  } else {
    return {
      inCart: false,
      productIndex,
    };
  }
};
const addNewProductToCart = (productId: string) => {
  let userCart = getCart();
  let newProductData = {
    id: productId,
    quantity: 1,
  };
  userCart.cart.push(newProductData);
  setUserCart(userCart);
};
//{"cart":[{"id":71,"quantity":3}]}
interface IUserCart {
  cart: {
    id: string;
    quantity: number;
  }[];
}
const setUserCart = (userCart: IUserCart) => {
  window.localStorage.setItem("userCart", JSON.stringify(userCart));
  return true;
};

const setLoacalStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
  return true;
};

export const removeItemFromCart = (productId: string) => {
  let userCart = getCart();
  const { inCart, productIndex } = hasProductInCart(productId, userCart.cart);
  if (inCart) {
    userCart.cart.splice(productIndex, 1);
    setUserCart(userCart);
  }
};
export const createCart = (productId: string) => {
  if (getCart() == null) {
    const userCart = JSON.stringify({ cart: [{ id: productId, quantity: 1 }] });
    window.localStorage.setItem("userCart", userCart);

    return {
      success: true,
      msg: `Cart Created`,
    };
  } else {
    return {
      success: false,
      msg: `Cart Already Available`,
    };
  }
};
