[Home](../../../README.md)

# GrowableItemsContainer

This is a widget that wraps a **growing list** of items and provides a load-more mechanism. If the window scrolls to the load more button and the end of list hasn't been reached the widget triggers the load-more automatically. Since it is intrinsically a div element, it accepts all attributes of a `<div/>` tag.

## Usage

```jsx
import { GrowableItemsContainer } from "react-simple-widgets";

<GrowableItemsContainer
    error={error}
    busy={fetching}
    total={items.total}
    itemCount={items.results.length}
    onLoadMore={fetchItems}>
    {/* Growing List of Items Here */}
</GrowableItemsContainer>
```

-   `busy: boolea`

    Set to `true` to indicate the list of items is being fetched

-   `error?: boolean`

    Set to `true` if an error occurred during items fetch

-   `itemCount: number`

    The current number if items in the list. `GrowableItemsContainer` uses this together with `total` to determine whether or not to show the load-more button.
    
-   `total: number`

    The total number if items to be loaded. `GrowableItemsContainer` uses this together with `itemCount` to determine whether or not to show the load-more button.
    
-   `onLoadMore(resetBeforeLoad?: boolean) => void`

    This function is called when the either of the following happens:
    
    - The load-more button is clicked
    - The load-more button is scrolled into view
