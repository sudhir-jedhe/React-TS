.collapse-button {
    display: block;
    width: 100%;
  }
  
  .collapse-content.collapsed {
    display: none;
  }
  
  .collapsed-content.expanded {
    display: block;
  }
  const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  
    return (
      <>
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? 'Show' : 'Hide'} content
        </button>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
      </>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Collapse>
      <h1>This is a collapse</h1>
      <p>Hello world!</p>
    </Collapse>
  );