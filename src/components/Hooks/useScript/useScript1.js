function useScript(src) {
  // keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(() => {
    // if no url provided, set the state to be idle
    if (!src) {
      setStatus("idle");
      return;
    }

    // get the script to check if it is already sourced or not
    let script = document.querySelector(`script[src="${src}"]`);

    if (script) {
      // if script is already loaded, get its status and update.
      setStatus(script.getAttribute("data-status"));
    } else {
      // create script
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");

      // inject the script at the end of the body
      document.body.appendChild(script);

      // set the script status in a custom attribute
      const setAttributeFromEvent = (event) => {
        script.setAttribute(
          "data-status",
          event.type === "load" ? "ready" : "error"
        );
      };

      // assign the event listeners to monitor if script is loaded properly
      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    }

    // helper function to update the script status
    const setStateFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };

    // setup
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);

    // clean up
    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [src]);

  return status;
}

const Dummy = () => {
  const status = useScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
  );

  console.log(status);
  return <></>;
};

export default Dummy;
