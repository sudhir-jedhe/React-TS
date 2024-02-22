import useScript from "./useScript";
// import { SCRIPT_URL } from "./constants";

export const SCRIPT_URL =
  "https://ik.imagekit.io/devtoolstech/assets/use-script_jGydpxBCH.js?ik-sdk-version=javascript-1.4.3&updatedAt=1670601458700";

export default function App() {
  const { status, error } = useScript(SCRIPT_URL);

  return (
    <main>
      <p>Script Status: {status}</p>
      {status === "ready" ? USE_SCRIPT_TEST.print() : null}
      {status === "error" && error ? <p>{error.message}</p> : null}
    </main>
  );
}
