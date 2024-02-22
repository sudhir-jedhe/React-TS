import { useState } from "react";
const useScript = (scriptURL) => {
  const [state, setState] = useState("idle");
  let scriptEle = document.createElement("script");
  scriptEle.src = scriptURL;
  document.body.appendChild(scriptEle);
  scriptEle.onerror = () => {
    setState("error");
  };
  scriptEle.onload = function (e) {
    console.log(e, "script-loaded");
    setState("ready");
  };
  return {
    status: state,
    error: null,
  };
};

export default useScript;


/***************************** */
import { useState, useEffect } from 'react';

const useScript = (scriptUrl) => {
  const [status, setStatus] = useState('idle'); 
  const [error, setError] = useState(null); 
  
  
  useEffect(() => {
    
    let element = document.createEment('script');
     element.scc = `${scriptUrl}`;
     element.type="text/javascript";
     element.async = true;
     element.onload = () => {
      setStatus('ready');
    };
    
    element.onError = (error) => {
      serError(error);
    }
    
    document.head.appendChild(element);
  }, [scriptUrl])
  
  return {
    status: status,
    error: error
  };
};

export default useScript;



/****************************** */
import { useState, useEffect } from 'react';

const useScript = (scriptUrl) => {
  const [status, setStatus] = useState('idle'); 
  const [error, setError] = useState(null); 
  
  
  useEffect(() => {
    
     let element = document.createElement('script');
     element.src = `${scriptUrl}`;
     element.type="text/javascript";
     element.async = true;
     element.onload = () => {
      setStatus('ready');
    };
    
    element.onError = (error) => {
      setError(error);
    }
    
    document.head.appendChild(element);
  }, [])
  
  return {
    status: status,
    error: error
  };
};

export default useScript;
