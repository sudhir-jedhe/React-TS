import Accordion from "./Accordion";
import data from "./data.js";

export default function App() {
  const props = {
    collapsible: true,
    size: data.length,
  };
  return (
    <div className="wrapper">
      <Accordion defaultActive="1" {...props}>
        {data.map((data) => (
          <Accordion.Item id={data.key} key={data.key}>
            <Accordion.Toggle>{data.title}</Accordion.Toggle>
            <Accordion.Panel>
              <Accordion.Progress />
              <p>{data.body}</p>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
