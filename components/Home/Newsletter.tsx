export default function Newsletter() {
  return (
    <section className="newsletter section" id="newsletter">
      <div className="newsletter__container bd-grid">
        <div className="">
          <h3 className="newsletter__title">
            Subscribe And Get <br />
            10% OFF
          </h3>
          <p className="newsletter__description">
            Get 10% Discount for all products
          </p>
        </div>
        <form action="" className="newsletter__subscribe">
          <input
            type="email"
            placeholder="Enter Your Email"
            name=""
            className="newsletter__input"
            id=""
          />
          <a href="#" className="button">
            Subscribe
          </a>
        </form>
      </div>
    </section>
  );
}
