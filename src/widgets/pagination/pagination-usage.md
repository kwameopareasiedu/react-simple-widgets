[Home](../../../README.md)

# Pagination

Pagination is a widget that shows pagination data from a list meta. The pagination data include the **page number**, the **total number of items in the list**, and the **number of items per page (page size)**.

This widget is usually used in conjunction with [TableView](../table-view/table-view-usage.md) widget to display pagination data of the list being viewed.

## Usage

```jsx
import { Pagination } from "react-simple-widgets";

<Pagination 
    page={page}
    total={total}
    pageSize={pageSize}
    onPageChanged={onPageChanged}
/>;
```

- `page: number`

  The current page number. This is a 1-based index field (I.e. It should start from 1)

- `total: number`

  The total number of **items** in the list

- `pageSize: number`

  The number of items per page of the list

- `onPageChanged: (page: number) => void`

  A callback which is invoked when a new page button is clicked. This is passed the page number of the button clicked.