import React, {useState, useEffect, useMemo, useRef} from 'react';
import classnames from 'classnames'

const Shape = ({data})=>{
  const boxes= useMemo(()=>data.flat(Infinity),[data])
  const[selected, setSelected] = useState(new Set());
  const [deselect, setDeselect] = useState(false);
  const timerRef = useRef(null);

  const countofVisibleBoxes = useMemo(()=>{
    return boxes.reduce((acc,box)=>{
      if(box === 1){
        acc+=1;
      }
      return acc
    },0)
  },[boxes])

  const handleClick=(e)=>{
    //get the index & status of the box
    //order od interaction needs to be stored in some data structure
    //obj can maintain order on the basis of insertion but not reliable 100% 
    //quick lookup : set, or map
    const {target} =e;
    const index = target.getAttribute('data-index');
    const status = target.getAttribute('data-status');

    if(!index || status === 'hidden' || deselect || selected.has(index)){
      return 
    }
    setSelected(prev => 
     new Set(prev.add(index)))
  }

  const deselectHandler =()=>{
    setDeselect(true);
    const keys = Array.from(selected.keys());
    const removeNextKey =()=>{
      if(keys.length){
        const currentKey = keys.shift();
        setSelected(prev =>{
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        })
        timerRef.current = setTimeout(removeNextKey,500)
      }else{
        setDeselect(false);
        clearTimeout(timerRef.current)
      }
    }
    timerRef.current = setTimeout(removeNextKey, 100)
  }

  useEffect(()=>{
    if(selected.size>=countofVisibleBoxes){
       //deselect
      deselectHandler();
    }
  },[selected])

return (
  //event bubbling will reduce the memory usage
  <div className ="boxes" onClick={handleClick}>
    {
      boxes.map((box, index)=>{
        const status = box === 1 ? 'visible' : 'hidden';
        const isSelected = selected.has(index.toString())
        return (
          <div key ={`${box}-${index}`}
          className={
            classnames(
              'box',status,
              isSelected && 'selected'
            )
          }
         data-index={index}
         data-status={status} 
          />
        )
      })
    }
  </div>
)
}

export default Shape;