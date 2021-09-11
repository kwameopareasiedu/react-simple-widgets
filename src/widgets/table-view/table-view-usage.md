[Home](../../../README.md) / TableView

# TableView

This widget is a responsive table widget. It collapses the view into cards on smaller displays to allow content to fit on screen. `TableView` it is intrinsically a `table` element and accepts all of its attributes.

## Usage

```jsx
import { TableView } from "react-simple-widgets";

<TableView
    items={items}
    props={props}
    headerRowBuilder={headerRowBuilder}
    bodyRowBuilder={bodyRowBuilder}
    footerRowBuilder={footerRowBuilder}
    captionBuilder={captionBuilder}
    optionsBuilder={optionsBuilder}
    onSort={onSort}
/>
```

- `items: Array<any>`

  The items to display as rows in the widget

- `props: Array<[string, TableViewCellResolver, string?]>`

  The properties to display as columns for each list item. This is a two or three element array which
  of is composed of `[label, Cell resolver, Sort key]`. 

  - The 1st element is the **label** which is displayed as the column header

  -   The 2nd element is the **cell resolver**. `TableView` uses this to display a cell value for a particular column of each item rendered. Cell resolver can be one of the following:
      -   **Simple String**: (E.g. `property`) For each item, the cell value is `item.property`.
      -   **Dot Separated String**: (E.g. `nested.value`) For each item, the cell value is `item.nested.value`.
      -   **Function**: (E.g. `(item, itemIndex) => JSX.Element`) For each item, the function is called with the item and it's index. The returned JSX is then rendered in the cell.
  -   The 3rd element is the sorting key for that columns. If specified, this key is passed as the active sort key to `onSort` when the table is sorted.

- `headerRowBuilder?: (columnNames: Array<string>) => JSX.Element`

  An optional function used to override rendering of the table `<thead>` row. This function must return a `<tr>` element.

-   `bodyRowBuilder?: (item: any, cellResolvers: Array<TableViewCellResolver>, itemIndex?: number) => JSX.Element`

    An optional function used to override rendering of the table `<tbody>` rows. This function must return a `<tr>` element.

-   `footerRowBuilder?: () => JSX.Element`

    An optional function used to override rendering of the table `<tfoot>` row. This function must return a `<tr>` element.

-   `captionBuilder?: () => JSX.Element`

    An optional function used to override rendering of the table `<caption>` element.

-   `optionsBuilder?: (item: any, itemIndex?: number) => JSX.Element`

    An optional function used to render options for each table `<tbody>` `<tr>` element. The function is passed the item and index of that `<tr>` and will be rendered as another `<td>` in the row.

-   `onSort?: (prop: string, direction: SortDirection) => void`

    An optional callback function which is called when the header sorting changes. It is passed the column sort key (`prop`)  and the direction of the sort. direction can be `SortDirection.NONE`, `SortDirection.ASC` or `SortDirection.DESC`.
