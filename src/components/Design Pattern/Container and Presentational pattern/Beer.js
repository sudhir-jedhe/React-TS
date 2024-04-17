import { useEffect, useState } from "react";
import BeerList from "./BeerList";

const Beer = () => {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      let response = await fetch(
        "https://api.punkapi.com/v2/beers?page=1&per_page=10"
      );
      response = await response.json();
      setBeers(response);
    } catch (e) {
      console.error("Error while fetching beers list", e);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return <BeerList beers={beers} />;
};

export default Beer;



This is a container component that will contain the application logic to fetch the beer list through an API and store the data in the local state.

Thes data will be then passed to the presentational component that will render the data.

This component doesn’t have to worry about the styling or layout because the presentational component will render the data.