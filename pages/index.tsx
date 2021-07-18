import Featured from "../components/Home/Featured";
import Collections from "../components/Home/Collections";
import Women from "../components/Home/Women";
import New from "../components/Home/New";
import Newsletter from "../components/Home/Newsletter";
import Hero from "../components/Home/Hero";
import newShoes from "../data/newShoes.json";
const collectionsData = [
  {
    name: "Mens Shoes",
    img: "/assets/img/new1.png",
    range: 79.99,
    items: newShoes.slice(0, 5),
  },
];
export default function Home() {
  return (
    <main className="l-main">
      <Hero />

      <Featured />

      <Collections />

      <Women />
      {/* <!--===== OFFER =====--> */}
      <section className="offer" id="offer">
        <div className="offer__container bd-grid">
          <div className="offer__data">
            <h3 className="offer__title">50% OFF</h3>
            <p className="offer__description">In Adidas Superstar sneakers</p>
            <a href="#" className="button">
              Shop Now
            </a>
          </div>
          <img src="/assets/img/offert.png" alt="" className="offer__img" />
        </div>
      </section>

      {collectionsData.map((data) => (
        <New key={Math.random()} {...data} />
      ))}

      <Newsletter />
    </main>
  );
}
