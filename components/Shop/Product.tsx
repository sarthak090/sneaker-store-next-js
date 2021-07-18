import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart.context";
import Image from "next/image";
import { hasProductInCart } from "../../utils/cart-helper";
interface IProps {
  id: string;
  title: string;
  price: number;
  img: string;
  sale?: boolean;
}

export default function Product(shoe: IProps) {
  const { addToCartContext, cart, removeFromCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const { inCart } = hasProductInCart(shoe.id, cart);
    setIsInCart(inCart);
  }, [cart]);
  const toggleCart = () => {
    if (isInCart) {
      removeFromCart(shoe.id);
    } else {
      addToCartContext(shoe.id, 1);
    }
  };
  return (
    <article className="sneaker" key={shoe.id}>
      {shoe.sale && <div className="senaker__sale">Sale</div>}

      <Image
        width={220}
        height={250}
        // layout="intrinsic"
        src={shoe.img}
        alt="shoe img"
        className="sneaker__img"
      />
      <span className="sneaker__name">{shoe.title}</span>
      <span className="sneaker__price">${shoe.price}</span>
      <button className="button-lighter" onClick={toggleCart}>
        {isInCart ? (
          <>
            Remove From Cart
            <i className="bx bx bxs-cart button-icon"></i>
          </>
        ) : (
          <>
            Add To Cart <i className="bx bxs-right-arrow-alt button-icon"></i>
          </>
        )}
      </button>
    </article>
  );
}
