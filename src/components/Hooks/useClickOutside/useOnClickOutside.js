function useOnClickOutside(ref, callback) {
  useEffect(
    () => {
      const listener = (event) => {
        // if the referenece is not present
        // or the target is descendant of the refefence
        // return
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        // invoke the callback
        callback(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },

    // add ref and callback to effect dependencies
    [ref, callback]
  );
}

Input: function Example() {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    console.log("Clicked");
  });

  return (
    <div>
      <p>Outside Click me!</p>
      <p ref={ref}>Click me!</p>
    </div>
  );
}

Output: "Clicked"; // when clicked on Outside Click me!
