import "./BeerList.css";

const BeerList = ({ beers }) => {
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



This is a presentational component that will receive the data as a prop and render it.

The complete focus of this component will be on the layout, styling, and rendering of the view.

Presentational components are pure components that do not mutate the input data; their sole focus is on rendering the data they have received, so they can also be reused