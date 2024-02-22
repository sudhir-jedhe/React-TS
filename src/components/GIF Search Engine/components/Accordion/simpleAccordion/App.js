import { accordionData } from "./data/data";
import Accordion from "./components/Accordion";
export default function App() {
  return (
    <main>
      {accordionData.map((accordElem, index) => (
        <Accordion content={accordElem} key={index} />
      ))}
    </main>
  );
}
