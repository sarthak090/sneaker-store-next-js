interface Iprops {
  img: string;
  name: string;
  range: number;
  items: {
    img: string;
    price: number;
  }[];
}
export default function New(collection: Iprops) {
  return (
    <section className="new section" id="new">
      <h2 className="section-title">NEW COLLECTION</h2>
      <div className="new__container bd-grid">
        <div className="new__mens">
          <img src="/assets/img/new1.png" alt="" className="new__mens-img" />
          <h3 className="new__title">{collection.name}</h3>
          <span className="new__price">From ${collection.range}</span>
          <a href="#" className="button-light">
            View Collection{" "}
            <i className="bx bxs-right-arrow-alt button-icon"></i>
          </a>
        </div>
        {collection.items.map((shoe, i) => (
          <div className="new__sneaker" key={i}>
            <div className="new__sneaker-card">
              <img src={shoe.img} alt="" className="new__sneaker-img" />
              <div className="new__sneaker-overlay">
                <div className="button">Add To Cart</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
