// @keyframes leave {
//     0% { opacity: 1 }
//     100% { opacity: 0 }
//   }
  
//   .alert {
//     padding: 0.75rem 0.5rem;
//     margin-bottom: 0.5rem;
//     text-align: left;
//     padding-right: 40px;
//     border-radius: 4px;
//     font-size: 16px;
//     position: relative;
//   }
  
//   .alert.warning {
//     color: #856404;
//     background-color: #fff3cd;
//     border-color: #ffeeba;
//   }
  
//   .alert.error {
//     color: #721c24;
//     background-color: #f8d7da;
//     border-color: #f5c6cb;
//   }
  
//   .alert.leaving {
//     animation: leave 0.5s forwards;
//   }
  
//   .alert .close {
//     position: absolute;
//     top: 0;
//     right: 0;
//     padding: 0 0.75rem;
//     color: #333;
//     border: 0;
//     height: 100%;
//     cursor: pointer;
//     background: none;
//     font-weight: 600;
//     font-size: 16px;
//   }
  
//   .alert .close::after {
//     content: 'x';
//   }
  const Alert = ({ isDefaultShown = false, timeout = 250, type, message }) => {
    const [isShown, setIsShown] = React.useState(isDefaultShown);
    const [isLeaving, setIsLeaving] = React.useState(false);
  
    let timeoutId = null;
  
    React.useEffect(() => {
      setIsShown(true);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [isDefaultShown, timeout, timeoutId]);
  
    const closeAlert = () => {
      setIsLeaving(true);
      timeoutId = setTimeout(() => {
        setIsLeaving(false);
        setIsShown(false);
      }, timeout);
    };
  
    return (
      isShown && (
        <div
          className={`alert ${type} ${isLeaving ? 'leaving' : ''}`}
          role="alert"
        >
          <button className="close" onClick={closeAlert} />
          {message}
        </div>
      )
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Alert type="info" message="This is info" />
  );