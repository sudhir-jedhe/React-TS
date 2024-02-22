const useSSR = () => {
  return {
    isBrowser: false,
    isServer: false,
    isNative: false,
  };
};

export default useSSR;


/************************ */

const useSSR = () => {
    const isBrowser = typeof window !== 'undefined';
    const isServer = !isBrowser;
    const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
  
    return { isBrowser, isServer, isNative };
  };
  
  export default useSSR;
  