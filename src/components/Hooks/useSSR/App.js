import useSSR from "./useSSR";

export default function App() {
  const { isBrowser, isServer, isNative } = useSSR();

  let currentEnvironment = "N/A";

  if (isBrowser) {
    currentEnvironment = "Browser";
  } else if (isServer) {
    currentEnvironment = "Server";
  } else if (isNative) {
    currentEnvironment = "Native";
  }

  return (
    <main>
      <p>Current Environment: {currentEnvironment}</p>
    </main>
  );
}
