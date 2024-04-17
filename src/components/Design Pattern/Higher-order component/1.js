We can create a product component that will receive the list of the products as props and will display it.

const ProductsList = ({ data }) => {
  return data.map((e) => (
    <div key={e.id} className="product-item">
      <h2>Item: {e.title}</h2>
    </div>
  ));
};Copy
Assuming that we have a uniform response for all the API’s for every category, we can create a higher-order component that will take the API URL and the products list component input and will fetch the data and pass it to the products list to display.

This higher-order component will maintain the loading and the error state logic abstracting everything making the product list independent to just show the list without worrying about anything.

To create an HOC we follow a naming convention starting the function name with with keyword like withFetchData().

This is a functional component that will take an argument and return another function from it forming a closure.

const withFetchData = (Element, url) => {
   return (props) => {
     //your logic goes here
  }
}Copy
Now we can add all our logic inside it to make the API calls.

const withFetchData = (Element, url) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
      const makeApiCall = async () => {
        setIsLoading(true);
        try {
          let res = await fetch(url);
          if (res.ok) {
            res = await res.json();
            setData(res);
          } else {
            setError(true);
          }
        } catch (e) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };

      makeApiCall();
    }, []);

    if (isLoading) {
      return <div>....Loading</div>;
    }

    if (error) {
      return <div>Something went wrong!...</div>;
    }

    return <Element data={data} {...props} />;
  };
};Copy
Note – Here we have added additional check to throw error if we did not receive 200 in the response status code as fetch does not throws error on 4XX.

As this is a function that returns another function, to invoke the HOC we have to store the returned value in the variable and then use it is as a component if you are not exporting the HOC.

import { withFetchData } from ‘./hoc’;

export default function App() {
  const Todos = withFetchData(
	ProductsList,
	"https://jsonplaceholder.typicode.com/todos"
  );

  return (
	<div className="App">
  	  <Todos />
	</div>
  );
}Copy
Otherwise you can export the HOC and then can use it as a component.

// todos.jsx

export default withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/todos"
);Copy
import TodosProductList from 'todos'

export default function App() {
  return (
    <div className="App">
      <TodosProductList />
    </div>
  );
};Copy
With this we can define the reusable logic multiple times.

// products.jsx
const Todos = withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/todos"
);

const Photos = withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/photos"
);

const Albums = withFetchData(
  ProductsList,
  "https://jsonplaceholder.typicode.com/albums"
);

export {
  Todos,
  Photos,
  Albums
};Copy
And then we can use it.

import {Todos, Photos, Albums} from 'products'

export default function App() {
  return (
    <div className="App">
      <Todos />
      <Photos />
      <Albums />
    </div>
  );
};Copy
The good thing about the HOC’s are that we can compose multiple HOCs together.

For example, let’s say we have another HOC that helps to style the product list as a card.

We will create another HOC function withStyles() that will handle all the styles logic.

// hoc.js
const withStyles = (Element) => {
  return (props) => {
    const cardStyle = { flex: "1 33%" };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <Element style={cardStyle} {...props} />
      </div>
    );
  };
};Copy
This will display the items in a 3 column layout, we have to pass the style prop to the product items and then compose the HOC’s to make it work.

import { withFetchData, withStyles } from "./hoc";

const ProductsList = ({ data, style }) => {
  return data.map((e) => (
    <div key={e.id} className="product-item" style={style}>
      <h2>Item: {e.title}</h2>
    </div>
  ));
};

const Todos = withFetchData(
  withStyles(ProductsList),
  "https://jsonplaceholder.typicode.com/todos"
);

const Photos = withFetchData(
  withStyles(ProductsList),
  "https://jsonplaceholder.typicode.com/photos"
);

const Albums = withFetchData(
  withStyles(ProductsList),
  "https://jsonplaceholder.typicode.com/albums"
);

export { Todos, Photos, Albums };Copy



Advantages of using Higher-order components in React
Reusability – Same logic can be reused for multiple components.
Uniformity – Components can be used for a single purpose making them easy to manage.
Abstraction – Single source of truth, helps to trace errors.
Disadvantages of using Higher-order components in React
Too much nesting – Composing the components with the multiple HOC’s increases the nesting.
Performance issues – Props drill down makes unnecessary re-renders even though the middle components may not be utilizing the props.
To mitigate the issues of higher-order components we can use the hooks, which also helps to abstract logic, but it prevents the nesting of components.