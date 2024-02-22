import React, { useState } from "react";

function useDidUpdate(fn, deps) {
  const [cached, setCached] = useState([]);
  if (cached.length === 0) {
    setCached([...deps]);
    return;
  } else {
    let changed = false;
    for (let i = 0; i < cached.length; i++) {
      if (cached[i] !== deps[i]) {
        changed = true;
      }
    }
    if (changed) {
      fn();
    }
  }
}

export default useDidUpdate;


/***************************************** */
import React, {useRef, useEffect} from 'react';

function useDidUpdate(cb,deps) {
  // write your solution below
  const didMount = useRef(false);
  
  useEffect(()=>{
    if(didMount.current){
      cb();
    }else{
      didMount.current = true;
    }
    
  }, deps)
}

export default useDidUpdate;


/************************************ */
import React from 'react';
let prevDepArr = null;
function useDidUpdate(cb,depArr) {
  // write your solution below
  if(prevDepArr === null) {
    // initial render
    // update depArr but don't call cb
    prevDepArr = [...depArr];
  }
  
  
  let isDepChanged = false;
for (var i = 0; i < depArr.length; i++) {
 if(depArr[i] !== prevDepArr[i]) {
   isDepChanged = true;
   break;
 }
}
  if(isDepChanged) {
    cb();
    prevDepArr = [...depArr];
  }
  
}

export default useDidUpdate;