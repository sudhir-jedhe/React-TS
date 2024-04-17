mplement an useCopy() hook in React that copies the given text to the clipboard.

The useCopy() method returns a method copy(text) which accepts the text as input and copies that text and the copied text.

To implement this function we will use the browser’s inbuilt method that allows copying things. navigator.clipboard

navigator.clipboard has two methods.

writeText(text) – Used to copy any given text.
readText() – Used to read the copied text.
Both operations are asynchronous and return promises. For our use, we will use the writeText(text) and wrap this inside the try…catch block.

We will also use the useState() hook to persist the copied text. If the promise is fulfilled then update the state with the text else set the state to null.

This operation will take place inside the copy() function that accepts the text as input and tries to copy that.