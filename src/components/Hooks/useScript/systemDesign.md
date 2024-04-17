useScript() hook in React
Posted on October 8, 2022 | by Prashant Yadav

Posted in Interview, Javascript, React | Tagged Hooks

Keeping the main javascript bundle as small as possible drastically boosts the performance of the app as it is faster to load, process, & parse.

There are scripts that we don’t require on the initial load of our app, rather than in certain components or places.

For example, Google Adsense script, we can load it after once the application is ready and the component that will display the ads is mounted.

In such scenarios, we can use the useScript() hook to asynchronously inject scripts.

The idea is simple, pass the script source to the useScript() hook and it will check if any script with this source is already injected or not, if it is present, return 'ready' state. Else create a new script with the source and inject it at the end of the body.

Assign even listeners on this script tag, which will update the statuses. on successful load 'ready' and on error 'error'.