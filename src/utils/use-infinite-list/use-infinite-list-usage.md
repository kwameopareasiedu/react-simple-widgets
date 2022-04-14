[Home](../../../README.md) / useInfiniteList

# useInfiniteList

This [hook](https://reactjs.org/docs/hooks-intro.html) manages the state of an infinite list. This can be paired with the [InfiniteList](../../widgets/infinite-list/infinite-list-usage.md) to provide a load-more mechanism for a particular list. The managed state are in the order:

- List of items (`Array`)
- Current page (`number`)
- Max items count (`number`)
- Trigger load more items (`Function`)
- Load more items success callback (`Function`)
- Load more items error callback (`Function`)

## Usage

```jsx
import { useInfiniteList, InfiniteList } from "react-simple-widgets";

export function CountdownUsage() {
  const [items, page, total, triggered, loadMore, onLoadMoreSuccess, onLoadMoreFailed] = useInfiniteList();

  return (
    <InfiniteList
      error={error}
      busy={fetching}
      total={total}
      count={items.length}
      onLoadMore={() => loadMore(resetPage)}>
      /* Render infinite list here */
    </InfiniteList>
  );
}
```

- `items: Array<any>`

  The infinite list of items

- `page: number`

  The current page of items

- `total: number`

  The total number of items to be expected from the data source

- `triggered: boolean`

  When a load-more is triggered, this state variable changes. _Use this in a `useEffect` to trigger a fetch_

- `loadMore: (resetPage?: boolean) => void`

  Call this function to trigger a load more. If you want to reset the page number of the data fetch, set `resetPage=true`

- `onLoadMoreSuccess: (newItems: Array<any>, totalItems: number) => void`

  Call this function with the `newItems` list returned from the data source as well as the `totalItems` count

- `onLoadMoreFailed: () => void`

  Call this function if the app failed to fetch the new items from the data source
