// Visualizing the difference between useEffect and useLayoutEffect.

// The main difference is that

// 1. With useEffect, the content is "painted" on the screen, and the effects run in parallel in a non-blocking/async fashion.

// 2. With useLayoutEffect, first the effects run, and later the updated DOM is "painted" on the browser.

// When to use each of these?

// 1. If you require DOM manipulation, such as height adjustment, animations, or something to avoid flickers, use the useLayoutEffect hook.

// a. The important thing here is that it will block content rendering if it takes some time.

// 2. If effects can run independently, such as API calls or other async operations, useEffect is the best option.

// I have earlier visually explained how each of these works under the hood.

// 1. Visualizing the internals of useEffect: https://lnkd.in/dwpZ_iJx

// 2. Visualizing the internals of useLayoutEffect: https://lnkd.in/dyYJHryp

// I do a deep dive into foundational concepts & how things work under the hood. You can consider connecting with or following me, Ali Raza, to get along with the journey.
