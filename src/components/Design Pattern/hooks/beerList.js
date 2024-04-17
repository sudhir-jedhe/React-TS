import "./BeerList.css";
import useBeer from "./useBeer";

const BeerList = () => {
  const beers = useBeer();
  return beers.map((e) => (
    <div key={e.id} className="wrapper">
      <div className="hero-image">
        <img src={e.image_url} alt={e.name} title={e.name} />
      </div>
      <div className="details">
        <span>
          <strong>Name</strong>: {e.name}
        </span>
        <span>
          <strong>Tagline</strong>: {e.tagline}
        </span>
        <span>
          <strong>First Brewed on</strong>: {e.first_brewed}
        </span>
        <p>
          <strong>Description</strong>: {e.description}
        </p>
      </div>
    </div>
  ));
};

export default BeerList;
