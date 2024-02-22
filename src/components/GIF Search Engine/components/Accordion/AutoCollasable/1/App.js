import React from "react";
import list from "./test-list";
import Accordion from "./Accordion.js";

const App = (props) => {
  const timeLimit = 5000;
  const defaultActive = props.defaultActive
    ? list[props.defaultActive].key
    : null;

  const [open, setOpen] = React.useState(defaultActive);
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const onClickAccordionTitle = React.useCallback((index) => {
    const key = list[index].key;
    setTimeElapsed(0);
    setOpen(key === open ? null : key);
  });

  React.useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        setTimeElapsed(timeElapsed + 100);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [open, timeElapsed]);

  React.useEffect(() => {
    if (timeElapsed === timeLimit) {
      const openIndex = list.map(({ key }) => key).indexOf(open);
      const nextOpen = list[(openIndex + 1) % list.length].key;
      setTimeElapsed(0);
      setOpen(nextOpen);
    }
  }, [open, timeElapsed]);

  // The rendered styling isn't that pretty... Forgive me :)
  return (
    <Accordion>
      <Accordion.ProgressBar timeElapsed={timeElapsed} timeLimit={timeLimit} />
      {list.map((item, index) => (
        <Accordion.Item>
          <Accordion.Toggle
            open={open === item.key}
            onClick={() => onClickAccordionTitle(index)}
          >
            {item.title}
          </Accordion.Toggle>
          <Accordion.Panel open={open === item.key}>
            {item.body}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default App;
