Learn how to load component with lazy loading in react.

For example suppose you are visiting an e-commerce website where there are many list of items, It does not makes any sense to load all the items at once, instead it is better to fetch more items after user has seen the previous items.

Often we pre-fetch say 20 items and then fetch more items once the user has seen them by either scrolling down to end or with pagination.

The no of items that needs to fetched depend upon the UI/UX and how many items we want user to see at once.

I have already created the pagination component in react, this time I am going to do the lazy loading.

In this you can determine when do you want to lazy load the items, I will be doing it after user has scrolled to the end vertically.

Lazy loading in react.
There are few extra packages which we will be utilizing for our development.

classnames: This helps us to use CSS classes as javascript objects, we just have to name our CSS file as filename.module.css.
lodash: Set of helpful utility function.
Following is the folder structure of our component.