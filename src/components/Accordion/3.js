.accordion-item.collapsed {
    display: none;
  }
  
  .accordion-item.expanded {
    display: block;
  }
  
  .accordion-button {
    display: block;
    width: 100%;
  }
  const AccordionItem = ({ label, isCollapsed, handleClick, children }) => {
    return (
      <>
        <button className="accordion-button" onClick={handleClick}>
          {label}
        </button>
        <div
          className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
      </>
    );
  };
  
  const Accordion = ({ defaultIndex, onItemClick, children }) => {
    const [bindIndex, setBindIndex] = React.useState(defaultIndex);
  
    const changeItem = itemIndex => {
      if (typeof onItemClick === 'function') onItemClick(itemIndex);
      if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    };
    const items = children.filter(item => item.type.name === 'AccordionItem');
  
    return (
      <>
        {items.map(({ props }) => (
          <AccordionItem
            isCollapsed={bindIndex !== props.index}
            label={props.label}
            handleClick={() => changeItem(props.index)}
            children={props.children}
          />
        ))}
      </>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Accordion defaultIndex="1" onItemClick={console.log}>
      <AccordionItem label="A" index="1">
        Lorem ipsum
      </AccordionItem>
      <AccordionItem label="B" index="2">
        Dolor sit amet
      </AccordionItem>
    </Accordion>
  );