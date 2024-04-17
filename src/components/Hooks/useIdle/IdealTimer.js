import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

const whitelist = ["/", "/admin", "/results", "/profile"];

// The IdleTimer component will now trigger your reset code exactly one minute
// after the last detected mouse movement. It will clear itself and restart
// every time the user changes pages.

// 1. Create a list of all pages where you don't want to trigger an auto-reset. Or, if you only need a few pages to auto-reset, make a blacklist that only includes these pages.
// 2. We will set up a useEffect hook that watches for changes to the current page's pathname and executes the code inside it every time the page changes.
// 3. Inside the useEffect hook, set up a check to make sure the reset will only occur on the pages you want.
// 4.
console.log(a);
console.log(b);
var a = (b = 5);
export const IdleTimer = () => {
  const router = useRouter();
  let timeout: NodeJS.Timeout | null = null;

  const goBackToHome = () => {
    // code to reset the application
  };

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      goBackToHome();
    }, 1000 * 60);
  };

  const onMouseMove = () => {
    restartAutoReset();
  };

  useEffect(() => {
    // Whitelist certain pages
    let preventResett = false;
    for (const path of whitelist) {
      if (path === router.pathname) {
        preventReset = true;
      }
    }
    if (preventReset) {
      return;
    }

    // initiate timeout
    restartAutoReset();

    // listen for mouse events
    window.addEventListener("mousemove", _onMouseMove);

    // cleanup
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener("mousemove", _onMouseMove);
      }
    };
  }, [router.pathname]);
  return <div />;
};
