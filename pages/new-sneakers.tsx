import newSneakers from "../data/newShoes.json";
import Product from "../components/Shop/Product";
export default function newShoes() {
  return (
    <div>
      <section className="section">
        <h2 className="section-title">NEW SNEAKERS</h2>
        <div className="container bd-grid">
          {newSneakers.map((data) => (
            <Product key={data.id} {...data} />
          ))}
        </div>
      </section>
    </div>
  );
}

// export const getStaticProps = async () => {};
