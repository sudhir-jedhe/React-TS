Track the component’s visibility can be really handy in multiple cases, especially for performance, when you want to load to the media like image, video, audio, etc. only when the component is in the viewport or is visible.

Another case is when you want to track the user activity like when the user is a starring a product (product is in the viewport) so that you can use this data for recommendations.

For this, we can create a useOnScreen() hook that will return a boolean value if the component or HTML element is the viewport or not in Reactjs.

There are two ways to implement it.
1. Using Intersection Observer.
2. Using getBoundingClientRect().

Using Intersection Observer
With useRef() we will create a reference to the DOM element which we want to track, and then pass this to the useOnScreen() hook.

useOnScreen() hook will set up the observation for the ref when the component will be mounted. This is will be done in the useEffect() and then create an instance of IntersectionObserver and if the entry is interacting, update the state to true which means it visible, otherwise false.

Disconnect the observation when the component is about to unmount inside the useEffect().