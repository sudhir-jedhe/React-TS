import { useEffect, useState } from "react";

const useBeer = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .then((res) => res.json())
      .then((res) => setBeer(res));
  }, []);

  return beer;
};

export default useBeer;
