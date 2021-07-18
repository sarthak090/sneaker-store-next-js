import womenData from "../../data/women.json";
import Product from "../Shop/Product";

export default function WomenSection() {
  return (
    <section className="women section" id="women">
      <h2 className="section-title">WOMEN SNEAKERS</h2>
      <div className="women__container bd-grid">
        {womenData.map((data) => (
          <Product key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}
