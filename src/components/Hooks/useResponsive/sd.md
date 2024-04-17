DOM parsing and painting is a very expensive operation and should be avoided as much as possible for faster loading of application.

Generating the DOM and hiding it with the CSS for different screen sizes is still costly, rather than using CSS with React you can dynamically render the components.

Using useResponsive() hook we can determine the device screen size and accordingly render the components.

For this, we are listening to the window resize event using a debounce call and updating the state if the size changes.