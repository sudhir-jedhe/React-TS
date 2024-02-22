const GRAPHIC_URL =
  "https://ik.imagekit.io/devtoolstech/devtools-tech-banner_QuoILF3fK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643016588956";

import React from "react";

export default function App() {
  const [curr, setCurr] = React.useState(0);

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      if (curr == 100) {
        clearInterval(myInterval);
      } else {
        setCurr((prevCurr) => prevCurr + 1);
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [curr]);

  return (
    <main>
      <p>{100 - curr} Seconds</p>
      <progress id="progress" value={curr} max={100} />
    </main>
  );
}
