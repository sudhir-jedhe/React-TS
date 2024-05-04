function App() {
    const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
    useTimeout(() => {
      setHasTimeElapsed(true);
    }, 5000);
    return (
      <p>
        {hasTimeElapsed
          ? '5 seconds has passed!'
          : 'The timer is running…'}
      </p>
    )
  }


 //  You can cancel the timeout by changing the delay property to null:

JSX
function App() {
  const [abortTimeout, setAbortTimeout] = React.useState(false);
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
  useTimeout(() => {
    setHasTimeElapsed(true);
  }, abortTimeout ? null : 5000);
  return (
    <p>
      {hasTimeElapsed && 'Boom!'}
      <button onClick={() => setAbortTimeout(true)}>
        Diffuse Bomb
      </button>
    </p>
  )
}