𝟭. 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗥𝗲𝗮𝗰𝘁'𝘀 𝗰𝗼𝗻𝘁𝗲𝘅𝘁 𝗔𝗣𝗜, 𝗮𝗻𝗱 𝘄𝗵𝗲𝗻 𝘀𝗵𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝘂𝘀𝗲 𝗶𝘁?

𝗔𝗻𝘀𝘄𝗲𝗿: Context API provides a way to pass data through the component tree without having to pass props down manually at every level. 

It's useful when you need to pass data deeply through the component tree, especially when many components need access to the same data.

𝟮. 𝗘𝘅𝗽𝗹𝗮𝗶𝗻 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲𝘀 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝗮𝗻𝗱 𝘂𝘀𝗲𝗟𝗮𝘆𝗼𝘂𝘁𝗘𝗳𝗳𝗲𝗰𝘁?

𝗔𝗻𝘀𝘄𝗲𝗿: useEffect is used for side effects that don't block the browser's painting process, such as fetching data, setting up subscriptions, and manually changing the DOM. 

It runs after the render is committed to the screen. 

useLayoutEffect, on the other hand, runs synchronously after all DOM mutations but before the browser has painted. 

It helps to prevent the flickering of UI content and other visual inconsistencies.

𝟯. 𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝗲𝗿𝗿𝗼𝗿 𝗯𝗼𝘂𝗻𝗱𝗮𝗿𝗶𝗲𝘀 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁, 𝗮𝗻𝗱 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝘂𝘀𝗲 𝘁𝗵𝗲𝗺?

𝗔𝗻𝘀𝘄𝗲𝗿: Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. 

They are created using the componentDidCatch and getDerivedStateFromError methods in class components.

If we want to achieve the same in functional components, then we can use the react-error-boundary npm package.

𝟰. 𝗛𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗵𝗮𝗻𝗱𝗹𝗲 𝘀𝗶𝗱𝗲 𝗲𝗳𝗳𝗲𝗰𝘁𝘀 𝗶𝗻 𝗮 𝗥𝗲𝗱𝘂𝘅 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻?

𝗔𝗻𝘀𝘄𝗲𝗿: Side effects in a Redux application can be handled using middleware like Redux Thunk.

Redux Thunk allows you to write action creators that return a function instead of an action object, enabling you to perform asynchronous operations like API calls. 