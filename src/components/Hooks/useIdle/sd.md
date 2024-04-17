Let us see how to create a useIdle() hook in React that will return the boolean value depending upon the active or inactive state of the user after a defined amount of time.

In the last article, we had seen how to detect an idle state in React, we will be using the same approach but consolidate the logic in a hook so that it can be resued.

A user is considered to be inactive or idle if he is not performing any sort of action using interaction hardware like a mouse, or keyboard for desktops and laptops and touch on mobile and tablets.

For this, there are a set of events that we can listen to like mousemove, mousedown, keypress, DOMMouseScroll, mousewheel, touchmove, MSPointerMove.

Also, we need to handle edge cases where the window or tab is out of focus, for which we will listen to the focus and blur events.

If any of these events are triggered then set the user to be Active else if none of them have happened for a given amount of time then set the user to be Idle or Inactive.

We will take duration as input for useIdle(delay) for which if the user is not performing any action then he will be considered as Idle.

The logic to implement is straightforward, we will use a useState to monitor the user’s active status and useEffect to assign the event listeners on the window object as well as document and later remove the listeners during cleanup.

Using useRef we will track a setTimeout that will change status if the user has not performed any action for the duration received as input, else clear the timer and start a fresh timeout.