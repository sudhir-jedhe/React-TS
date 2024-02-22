import React from "react";
import {
  AccordionContext,
  useAccordionContext,
  useAccordionItemContext,
  AccordionItemContext,
} from "./AccordionContext";

const AccordionProgress = () => {
  const { activePanel, handlePanelClick, size } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const [width, setWidth] = React.useState(10);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (id === activePanel) {
        setWidth((prevWidth) => {
          if (prevWidth === 100) {
            handlePanelClick((activePanel + 1) % size);
            return 0;
          } else {
            return prevWidth + 10;
          }
        });
      } else {
        clearInterval(interval);
        setWidth(0);
      }
    }, 1000);
  }, []);
  return (
    <div className="progress-wrapper">
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};

const AccordionToggle = ({ children }) => {
  const { handlePanelClick, activePanel, collapsible } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const handleClick = () => {
    if (activePanel === id && collapsible) {
      handlePanelClick(null);
    } else {
      handlePanelClick(id);
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

const AccordionPanel = ({ children }) => {
  const { activePanel } = useAccordionContext();
  const { id } = useAccordionItemContext();

  if (activePanel != id) return null;
  return <div>{children}</div>;
};

const AccordionItem = ({ id, children }) => {
  const value = {
    id,
  };
  return (
    <AccordionItemContext.Provider value={value}>
      {children}
    </AccordionItemContext.Provider>
  );
};

const Accordion = ({ size, collapsible, defaultActive, children }) => {
  const [activePanel, setActivePanel] = React.useState(defaultActive);
  const value = {
    activePanel,
    handlePanelClick: setActivePanel,
    collapsible,
    size,
  };

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Toggle = AccordionToggle;
Accordion.Progress = AccordionProgress;

export default Accordion;
