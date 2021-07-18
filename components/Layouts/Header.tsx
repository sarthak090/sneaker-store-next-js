import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart.context";
export default function Header() {
  const { cart } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      const navLink = document.querySelectorAll(".nav__link"),
        navMenu = document.getElementById("nav-menu");
      const linkAction = () => {
        if (navMenu !== null) {
          navMenu.classList.remove("show");
        }
      };
      navLink.forEach((el) => el.addEventListener("click", linkAction));
    }
  }, []);
  const toggleNav = () => {
    setIsActive(!isActive);
  };
  const navLinks = [
    { href: "/#home", label: "home" },
    { href: "/#featured", label: "featured" },
    { href: "/new-sneakers", label: "new" },
    { href: "/#women", label: "women" },
    { href: "/shop", label: "shop" },
  ];
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <header className="l-header" id="header">
        <nav className="nav bd-grid">
          <div className="nav__toggle " onClick={toggleNav} id="nav-toggle">
            <i className="bx bxs-grid bx-rotate-90"></i>
          </div>
          <Link href="/">SNEAKER STORE</Link>

          <div className={`nav__menu ${isActive && "show"}`} id="nav-menu">
            <ul className="nav__list ">
              {navLinks.map((l, i) => (
                <li className="nav__item" key={i}>
                  <Link href={l.href}>
                    <a href={l.href} className="nav__link">
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__shop">
            <Link href="/cart">
              <a>
                <i className="bx bxs-cart cart__icon"></i>
                <span className="cart__counter">{cart.length}</span>
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
