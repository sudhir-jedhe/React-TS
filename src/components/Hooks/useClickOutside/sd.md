useOnClickOutside() hook in React
Posted on October 14, 2022 | by Prashant Yadav

Posted in Interview, Javascript, React | Tagged Hooks

There are times when we want to detect if the user has clicked outside the component or not. Let us see how can we create the useOnClickOutside() hook in React that will help us to detect it.

useOnClickOutside(ref, callback) will accept the component/element reference and the callback function and will invoke the callback function if clicked outside the reference.

All we have to do is listen to the mouse and touch event like mousedown, touchstart and on the event fire check if the event.target is not the descendant of the reference then invoke the callback.

Wrap this logic inside the useEffect() hook so that we can assign and remove listeners.