import Link from "next/link";
export default function Footer() {
  const navLinks = [
    { href: "/#home", label: "home" },
    { href: "/#featured", label: "featured" },
    { href: "/new-sneakers", label: "new" },
    { href: "/#women", label: "women" },
    { href: "/shop", label: "shop" },
  ];
  const navLinks2 = [
    { href: "/#", label: "Product help" },
    { href: "/#", label: " Customer Care" },
    { href: "/#", label: " Authorized Service" },
  ];
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <div className="footer__box">
          <h3 className="footer__title"> SNEAKER STORE</h3>
          <p className="footer__description">New Collection of shoes 2021</p>
        </div>

        <div className="footer__box">
          <h3 className="footer__title">EXPLORE</h3>
          <ul>
            {navLinks.map((l, i) => (
              <li key={i}>
                <Link href={l.href}>
                  <a href={l.href} className="footer__link">
                    {l.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__box">
          <h3 className="footer__title">SUPPORT</h3>
          <ul>
            {navLinks2.map((l, i) => (
              <li key={i}>
                <Link href={l.href}>
                  <a href={l.href} className="footer__link">
                    {l.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__box">
          <a href="" className="footer__social">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" className="footer__social">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="" className="footer__social">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="" className="footer__social">
            <i className="bx bxl-google"></i>
          </a>
        </div>
      </div>
      <p
        className="footer__copy"
        dangerouslySetInnerHTML={{
          __html: "  &#169; 2021 Sarthak Kaushik.All Right Reserved",
        }}
      ></p>
    </footer>
  );
}
