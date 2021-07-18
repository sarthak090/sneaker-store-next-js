const collectionData = [
  {
    img: "/assets/img/collection1.png",
    title: "Nike",
  },
  {
    img: "/assets/img/collection2.png",
    title: "Adidas",
  },
];
export default function Collections() {
  return (
    <section className="collection section" id="collection">
      <div className="collection__container bd-grid">
        {collectionData.map((coll) => (
          <>
            <div className="collection__card">
              <div className="collection__data">
                <h3 className="collection__name">{coll.title}</h3>
                <p className="collection__description">New Collection 2021</p>
                <a href="#" className="button-light">
                  Buy Now <i className="bx bxs-right-arrow-alt button-icon"></i>
                </a>
              </div>

              <img src={coll.img} alt="" className="collection__img" />
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
