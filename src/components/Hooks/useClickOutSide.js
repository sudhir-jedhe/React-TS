import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;

/********************************* */

import useOnClickOutside from "./useOnClickOutside";


// App.js
useOnClickOutside(ref, () => setShowModal(false));
{showModal ? (
	{/* Showing a modal if showModal is true */}
    <div ref={ref}>
	<p>
		Hello from my modal! You can click anywhere inside of this modal and
		it won't close. Click outside, and it'll close!
	</p>
</div>
) : (
	{/* Showing a button if showModal is false */}
  <button onClick={() => setShowModal(true)}>Show modal</button>
)}