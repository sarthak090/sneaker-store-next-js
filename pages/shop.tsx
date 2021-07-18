import products from "../data/products.json";
import Product from "../components/Shop/Product";
export default function shop() {
  return (
    <main className="l-main">
      <section className="featured section" id="shop">
        <h2 className="section-title">All Products</h2>

        <div className="featured__container bd-grid">
          {products.map((shoe) => (
            <Product key={shoe.id} {...shoe} />
          ))}
        </div>
        <div className="sneaker__pages bd-grid">
          <div className="">
            <span className="sneaker__pag">1</span>
            <span className="sneaker__pag">2</span>
            <span className="sneaker__pag">3</span>
            <span className="sneaker__pag">4</span>
            <span className="sneaker__pag">&#8594;</span>
          </div>
        </div>
      </section>
    </main>
  );
}
