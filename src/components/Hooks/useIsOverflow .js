import * as React from 'react';

export const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = React.useState(undefined);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      if ('ResizeObserver' in window) {
        new ResizeObserver(trigger).observe(current);
      }

      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};



/******************************** */
onst App = () => {
    const ref = React.useRef();

    // const isOverflow = useIsOverflow(ref);

    // console.log(isOverflow);
    const isOverflow = useIsOverflow(ref, (isOverflowFromCallback) => {
      console.log(isOverflowFromCallback);
      // true
    });
  
    console.log(isOverflow);
    // true
  
    return (
      <div style={{ overflow: 'auto', height: '100px' }} ref={ref}>
        <div style={{ height: '200px' }}>Hello React</div>
      </div>
    );
  };