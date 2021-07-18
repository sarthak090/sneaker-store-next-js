import { useContext, useEffect, useState } from "react";
import CartContext from "../context/cart.context";
import products from "../data/products.json";
import StripeCheckout from "react-stripe-checkout";
import { Token } from "../types/stripe";
import Product from "../components/Shop/Product";
const key = process.env.NEXT_PUBLIC_STRIPE_KEY;

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const [userCart, setUserCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const getCartDetails = () => {
    if (cart.length > 0) {
      var filteredArray: any = products.filter(function (array_el) {
        return (
          cart.filter(function (anotherOne_el: { id: string }) {
            return anotherOne_el.id == array_el.id;
          }).length !== 0
        );
      });
      setUserCart(() => filteredArray);
    }
  };
  const calculateSubTotal = () => {
    if (userCart.length > 0) {
      const totalPrices = userCart.map((prd: any) => prd.price);
      const total = totalPrices.reduce((acc, red) => acc + red, 0);
      setSubTotal(total);
      return total;
    }
  };
  useEffect(() => {
    getCartDetails();
  }, [cart]);

  useEffect(() => {
    calculateSubTotal();
  }, [userCart]);
  const onToken = (token: Token) => {
    fetch("/api/stripe/checkout", {
      method: "POST",
      body: JSON.stringify({ ...token, productsCost: calculateSubTotal() }),
    });
  };
  return (
    <main className="l-main">
      <section className="featured section" id="shop">
        <h2 className="section-title">Your Cart</h2>

        <div className="featured__container bd-grid">
          {userCart.length > 0 &&
            userCart.map(
              (shoe: {
                id: string;
                img: string;
                price: number;
                title: string;
              }) => <Product key={shoe.id} {...shoe} />
            )}
        </div>
        <div className="p_cont">
          <div className="price_container">
            <span id="total"> Total price: ${subTotal} </span>
            <StripeCheckout
              name="Sneaker Store"
              description="Get Your Favourite Sneakers Here!!!!"
              amount={subTotal * 100}
              token={onToken}
              currency="USD"
              email={"testing@gmail.com"}
              billingAddress={true}
              stripeKey={key ? key : ""}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
