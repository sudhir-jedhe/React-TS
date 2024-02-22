import { useState } from "react";
import { FaRegHeart, FaHeart, FaShareAlt } from "react-icons/fa";

const GRAPHIC = "https://react.semantic-ui.com/images/avatar/large/matthew.png";

export default function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="card">
      <img src={GRAPHIC} alt="Person Image" />
      <div className="actions">
        <button
          className="action-button"
          onClick={() => setStatus((prv) => !prv)}
        >
          {status ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart className="hoverClass" />
          )}
        </button>
        <button className="action-button">
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
}
