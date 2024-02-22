import useAsync from "./useAsync";

import { fakeApi } from "./utils";

export default function App() {
  const { value, status, error, execute } = useAsync(fakeApi);

  return (
    <main>
      <div>
        {status === "idle" && (
          <div>Start your journey by clicking a button</div>
        )}
        {status === "success" && <div>{value}</div>}
        {status === "error" && <div>{error.message}</div>}
        <button onClick={execute} disabled={status === "pending"}>
          {status !== "pending" ? "Click me" : "Loading..."}
        </button>
      </div>
    </main>
  );
}
