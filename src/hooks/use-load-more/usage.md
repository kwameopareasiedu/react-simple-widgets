[Home](../../../README.md)

# useLoadMore

useLoadMore is a React [hook](https://reactjs.org/docs/hooks-intro.html) that provides methods and
state variables to implement a load-more-items feature for a list of items that cannot be displayed
in a ListView

## Usage

```jsx
import { useLoadMore } from "react-simple-widgets";

export function LoadMoreUsage() {
    const { page, items, endOfItems, loadTriggered, loadMore, onLoadMoreSuccess, onLoadMoreFailed } = useLoadMore();

    return null;
}
```

-   `page: number`

    This is the current page number of the list

-   `items: Array<any>`

    This is the list of loaded items

-   `endOfItems: boolean`

    Indicates whether the source of the items has reached its end. You can use this to show/hide
    your button to load more items

-   `loadTriggered: number`

    This is updated anytime `onLoadMore()` is called. You should connect this to the effect that
    loads the items from your API service

-   `loadMore(resetBeforeLoad?: boolean) => void`

    When this function is called, `page` is incremented and `loadTriggered` is updated to trigger
    any connected effect to run. Within that effect, `page` will have the new incremented value

    -   `resetBeforeLoad?: boolean`

        When set to true, the `page` is reset to 1 before updating `shouldLoadMore` to trigger any
        associated effect

-   `onLoadMoreSuccess(newItems: Array<any>, total: number) => void`

    This should be called when the API successfully returns the specified page of items

    -   `newItems: Array<any>`

        The list of items on the specified page

    -   `total: number`

        The total number of items in the collection, as specified by the API

-   `onLoadMoreFailed: () => void`

    This should be called when the API could not fetch the specified page of items. It decrements
    the `page` to make the next request have the correct page number
