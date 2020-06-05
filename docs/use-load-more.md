[Home](../README.md)

# useLoadMore

useLoadMore is a React [hook](https://reactjs.org/docs/hooks-intro.html) that provides methods and
state variables to implement a load-more-items feature for a list of items that cannot be displayed
in a ListView

## API

### useQueryParams

```jsx
const { page, items, canLoadMore, shouldLoadMore, onLoadMore, onLoadMoreSuccess, onLoadMoreFailed } = useLoadMore();
```

-   `page: number`

    This is the current page number of the list

-   `items: Array<any>`

    This is the list of loaded items

-   `canLoadMore: boolean`

    This indicates whether your load-more button should be enabled/visible. When the items length
    reaches the total number of items, this is false

-   `shouldLoadMore: number`

    This is updated anytime `onLoadMore()` is called. You should connect this to the effect that
    loads the items from your API service

-   `onLoadMore(resetBeforeLoad?: boolean) => void`

    When this function is called, `page` is incremented and `shouldLoadMore` is updated to trigger 
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

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/misc/use-query-params/index.stories.tsx)
