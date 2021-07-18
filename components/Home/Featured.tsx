import featuredProducts from "../../data/featured.json";
import Product from "../Shop/Product";
export default function Featured() {
  return (
    <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED</h2>

      <div className="featured__container bd-grid">
        {featuredProducts.map((prd) => (
          <Product key={prd.id} {...prd} sale={true} />
        ))}
      </div>
    </section>
  );
}
