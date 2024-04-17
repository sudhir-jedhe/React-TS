import { useRef } from "react";

const useWhyDidYouUpdate = (componentName, props) => {
  const prevProps = useRef(props);

  for (const [key, value] of Object.entries(props)) {
    if (value !== prevProps.current[key]) {
      console.log(`${componentName} re-rendered. ${key} changed`);
    }
  }
};

export default useWhyDidYouUpdate;


/********************** */
import React, {useState} from 'react';

const useWhyDidYouUpdate = (componentName, props) => {
  const [data, setData] = useState({})
  
  const areObjectsSimilar = (obj1, obj2) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    
    if (keys1.length !== keys2.length) {
      return true
    }
    
    for (let key of keys1) {
      if (obj1[key] !== obj2[key])
        return true
    }
    
    return false;
  }
  
  const checkDiff = (componentNameData, props) => {
    const keys = Object.keys(props)
    
    for (let key of keys) {
      if (typeof props[key] === 'object' && areObjectsSimilar(componentNameData, props)) {
        console.log(key)
      } else {
        if (props[key] !== componentNameData[key])
          console.log(key)
      }
    }
  }
  
  if (!data[componentName]) {
    data[componentName] = props;
  } else {
    checkDiff(data[componentName], props);
  }
};

export default useWhyDidYouUpdate;


/****************************************** */
import { useRef, useEffect } from 'react';
const useWhyDidYouUpdate = (componentName, props) => {
  const previousPropsRef = useRef();
  useEffect(() => {
    if (!previousPropsRef.current) {
      previousPropsRef.current = props;
      return;
    }
    const previousPropKeys = Object.keys(previousPropsRef.current);
    const presentPropKeys = Object.keys(props);
    for (let key in presentPropKeys) {
      if (props[key] !== previousPropsRef.current[key]) {
        console.log(key);
      }
    }
  }, []);
};

export default useWhyDidYouUpdate;
