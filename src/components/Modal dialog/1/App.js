import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>
        {show ? "hide" : "show"} modal
      </button>
      <Modal show={show} onClose={() => setShow(false)} title="Modal">
        <h1>Learnersbucket</h1>
      </Modal>
    </div>
  );
};

<div className={`modal-wrapper ${show ? "active" : ""}`}></div>;
