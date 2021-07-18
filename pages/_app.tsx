import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { CartProvider } from "../context/cart.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}
export default MyApp;
