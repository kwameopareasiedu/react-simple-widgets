[Home](../../../README.md) / Pagination

# Pagination

This widget shows pagination data from a list meta. The pagination data include the **page number**, the **total number of items in the list**, and the **number of items per page (page size)**.

`Pagination` is usually used in conjunction with [TableView](../table-view/table-view-usage.md) widget to navigate the list of data being viewed. `Pagination` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { Pagination } from "react-simple-widgets";

<Pagination 
    page={page}
    total={total}
    pageSize={pageSize}
    onChange={onChange}
/>
```

- `page: number`

  The current page number. This is a 1-based index field (I.e. It should start from 1)

- `total: number`

  The total number of **items** in the list

- `pageSize: number`

  The number of items per page of the list

- `onChange: (page: number) => void`

  A callback which is invoked when a new page button is clicked. This is passed the page number of the button clicked.
