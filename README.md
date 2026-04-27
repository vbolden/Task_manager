## Overview

Build a Task Management application that demonstrates dynamic list rendering, proper key usage, and conditional rendering.

### Useful resources

- React dev (https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- React dev (https://react.dev/reference/react/useState)
- MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)


#### Built with

- CSS custom properties
- [React] - TypeScript

## Reflection

1. By using the id number as the key, which won't change even if the task is deleted or updated.

2. I noticed in the example that the filters weren't really working together so in the code I added a function to combine the filters instead of one filter replacing the other. 

3. Instead of modifying the existing tasks array directly, I created a new array using the map() method and updated only the task that matched the given id. I also, passed the onStatusChange function as a prop to the TaskItem.tsx component to keep the state centralized in the parent component.

4. One challenge I faced was handling empty states correctly. I had to add a condition to check when the filtered list was empty and display a message instead. This required making sure the condition was applied after filtering so the Ui accurately reflected the selected filters. 