[Home](../../../README.md) / InfiniteList

# InfiniteList

This widget that wraps an **infinite list** of items and provides a load-more mechanism. If the window scrolls to the load more button and the end of list hasn't been reached the widget triggers the load-more automatically. 

`InfiniteList` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { InfiniteList } from "react-simple-widgets/dist/infinite-list";

<InfiniteList error busy total count onLoadMore>
  {/* Infinite items here */}
</InfiniteList>;
```

- `busy: boolean`

  Set to `true` to indicate the list of items is being fetched

- `error?: boolean`

  Set to `true` if an error occurred during items fetch

- `count: number`

  The current number if items in the list. `InfiniteList` uses this together with `total` to determine whether or not to show the load-more button.

- `total: number`

  The total number if items to be loaded. `InfiniteList` uses this together with `count` to determine whether or not to show the load-more button.

- `onLoadMore: () => void`

  This function is called when the either of the following happens:

  - The load-more button is clicked
  - The load-more button is scrolled into view
