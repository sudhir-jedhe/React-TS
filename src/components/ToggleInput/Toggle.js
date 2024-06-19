// .toggle input[type="checkbox"] {
//     display: none;
//   }
  
//   .toggle.on {
//     background-color: green;
//   }
  
//   .toggle.off {
//     background-color: red;
//   }
  const Toggle = ({ defaultToggled = false }) => {
    const [isToggleOn, setIsToggleOn] = React.useState(defaultToggled);
  
    return (
      <label className={isToggleOn ? 'toggle on' : 'toggle off'}>
        <input
          type="checkbox"
          checked={isToggleOn}
          onChange={() => setIsToggleOn(!isToggleOn)}
        />
        {isToggleOn ? 'ON' : 'OFF'}
      </label>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Toggle />
  );