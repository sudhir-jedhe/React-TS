const useIsomorphicEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const MyApp = () => {
  useIsomorphicEffect(() => {
    window.console.log('Hello');
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp />
);