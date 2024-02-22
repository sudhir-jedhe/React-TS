import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Home from "./components/home/home";
import { homeProps, trendingProps, randomProps } from "./utils";
import "./style.css";

const tabs = [
  {
    id: "home",
    label: "Home",
    child: (props = {}) => <Home {...props} label="home" enableSearch />,
    childProps: { ...homeProps },
  },
  {
    id: "trending",
    label: "Trending",
    child: (props = {}) => <Home {...props} label="trending" />,
    childProps: { ...trendingProps },
  },
  {
    id: "random",
    label: "Random",
    child: (props = {}) => <Home {...props} label="random" isRandom />,
    childProps: { ...randomProps },
  },
];

export default function App() {
  return (
    <div className="App">
      <Header title="GIFs in a jiffy!" />
      <Tabs tabs={tabs} />
    </div>
  );
}
