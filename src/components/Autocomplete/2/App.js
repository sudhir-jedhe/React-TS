import AutoComplete from "./AutoComplete";
import Button from "./Button";

const Image = ({ src, alt = "" }) => {
  return (
    <div className="img_container">
      <img src={src} alt={alt} />
    </div>
  );
};

// keyboard shortcut is not implemented :(

export default function App() {
  return (
    <div className="payment_container">
      <Image src="https://uploads.codesandbox.io/uploads/user/db72b415-e33f-48d9-ba47-160088dc6c79/78ab-payment-graphic.png" />
      <AutoComplete />
      <Button>Pay Now</Button>
    </div>
  );
}
