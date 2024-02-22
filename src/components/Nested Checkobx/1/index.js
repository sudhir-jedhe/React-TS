import Checkbox from "./Checkbox";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Checkbox label={"1"}>
        <Checkbox label={"1.1"}>
          <Checkbox label={"1.1.1"}>
            <Checkbox label={"1.1.1.1"} />
            <Checkbox label={"1.1.1.2"} />
          </Checkbox>
          <Checkbox label={"1.1.2"} />
          <Checkbox label={"1.1.3"} />
        </Checkbox>
        <Checkbox label={"1.2"} />
        <Checkbox label={"1.3"} />
      </Checkbox>
    </div>
  );
}
