// .tooltip-container {
//     position: relative;
//   }
  
//   .tooltip-box {
//     position: absolute;
//     background: rgba(0, 0, 0, 0.7);
//     color: #fff;
//     padding: 5px;
//     border-radius: 5px;
//     top: calc(100% + 5px);
//     display: none;
//   }
  
//   .tooltip-box.visible {
//     display: block;
//   }
  
//   .tooltip-arrow {
//     position: absolute;
//     top: -10px;
//     left: 50%;
//     border-width: 5px;
//     border-style: solid;
//     border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
//   }
  const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = React.useState(false);
  
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
          {text}
          <span className="tooltip-arrow" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Tooltip text="Simple tooltip">
      <button>Hover me!</button>
    </Tooltip>
  );