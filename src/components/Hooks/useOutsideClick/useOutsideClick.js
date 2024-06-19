const useOutsideClick = (callback) => {
    const ref = React.useRef();
  
    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
  
      document.addEventListener('click', handleClick, true);
  
      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [ref]);
  
    return ref;
  };


  const useClickOutside = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    React.useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  };
  
  /***************************************************** */
  const ClickBox = ({ onClickOutside }) => {
    const clickRef = React.useRef();
    useClickOutside(clickRef, onClickOutside);
    return (
      <div
        className="click-box"
        ref={clickRef}
        style={{
          border: '2px dashed orangered',
          height: 200,
          width: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>Click out of this element</p>
      </div>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <ClickBox onClickOutside={() => alert('click outside')} />
  );