import * as React from 'react';

export const useScrollbarWidth = () => {
  const didCompute = React.useRef(false);
  const widthRef = React.useRef(0);

  if (didCompute.current) return widthRef.current;

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  didCompute.current = true;
  widthRef.current = scrollbarWidth;

  return scrollbarWidth;
};


// In essence the custom hook just renders a hidden scrollbar into the project, measures it, and removes it again. Afterward it returns the result.

// As alternative, if you would want to have the height instead of the width of the scrollbar in case of a horizontal scroll container, then just replace the width properties with height properties.

// Personally I never ran into this problem myself, however, when we tested an application on a client's machine, there are certain cases where the scrollbar has no overlay and takes up space. Often that's just okay, however, we ran into use cases where we had to have the scrollbar's size for resolving issues regarding the layout of the application.