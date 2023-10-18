import LabelComponent from "./LabelComponent";
import ValueConatainer from "./ValueConatainer";
export default function LabelContainer(props) {
  const { value } = props;
  return (
    <div className="labelContainer">
      <LabelComponent />
      <ValueConatainer value={value} />
    </div>
  );
}
