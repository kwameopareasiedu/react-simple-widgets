[Home](../../../README.md)

# ListView

This widget is a responsive table-like widget for rendering tabular information. It collapses the
view into cards on smaller displays to allow content to fit on screen. Options for list items
are displayed using a dialog thus you need a
[DialogProvider](../../../docs/api-reference/dialog-provider.md) as an ancestor in the widget tree

## Usage

```jsx
import { ListView } from "react-simple-widgets";

<ListView
    busy={busy}
    sort={sort}
    items={items}
    props={props}
    options={options}
    breakpoint={breakpoint}
    condensed={condensed}
    pagination={pagination}
    keyFn={skipIf}
/>;
```

-   `items: Array<any>`

    The items to display in the widget

-   `props: Array<[string, string | ((item: any, itemIndex?: number) => any)]>`

    The properties to display as columns for each list item. This is a two element array which
    of `[label, value property or function]`. The **label** is displayed as the column header

    -   If the second array item is a `string`, then for each item in `items` the widget will
        display the property matching this string and display that as the column value

    -   If the second array is a `function`, the widget will pass each item along with its index
        to this function, and it should return the value to be displayed in the column

-   `condensed?: boolean`

    Indicates whether or not to reduce the space used in the table cells

-   `busy?: boolean`

    Indicates whether item data is loading. When true, a busy animation is displayed in the widget

-   `pagination?: IListViewPagination`

    If specified, the pagination footer will be enabled for this widget. This has the structure
    of `{ page: number, total: number, pageSize: number, onPageChange: (page: number) => void }`.
    The pagination footer contain the links for traversing the pages.

    -   `page: number`

        The current page of the list being viewed. This is for paginated lists

    -   `total: number`

        The size of the item collection being viewed

    -   `pageSize: number`

        The size of each page of the list.

    -   `onPageChange: (page: number) => void`

        Called when the pagination/navigation buttons are clicked. The page number corresponding to
        the pagination/navigation button is passed to this function. This is used in conjunction
        with `page` to navigate the list

-   `breakpoint?: number = 768`

    The window width, below which items are rendered in cards to make them viewable on small screen
    devices

-   `sort?: IListViewSort`

    If specified, the sorting feature will be enabled. This displays the sorting icons on the
    column headers. The `sort` prop is an object whose properties are described below:

    -   `columns: Array<string>`

        The array of sortable column names

    -   `columnIndex: number`

        This is the index of `columns` which is the active sorted column

    -   `order: ListViewSortOrder`

        This is the sorting order. It can be `ListViewSortOrder.NONE`, `ListViewSortOrder.ASC` or
        `ListViewSortOrder.DESC`

    -   `onSort: (columnIndex: number, order: ListViewSortOrder) => void`

        Called when a column is sorted. It is called with the selected column index of `columns`
        and the sorting order

-   `options?: IListViewOptions`

    If specified, the options button is enabled for each list item. The options are provided by
    the [ConfirmDialog](../../widgets/confirm-dialog/usage.md) widget

    -   `busy?: (item: any, itemIndex?: number) => boolean`

        If specified and returns true, the options button for the item is disabled and a loading
        indicator is shown in its place. This is useful if some long-running operation is being
        carried out specific list items

    -   `builder: (item: any, itemIndex?: number) => Array<IListViewOptionItem>`

        The options builder function. For each list item, the item and its index are passed to it
        and it must return the list of options for the item. `IListViewOptionItem` represents an
        object whose properties are described below:

        -   `label: string`

            The label of the option

        -   `onClick: (item: any, itemIndex?: number) => void`

            Called when the options is clicked. It receives the item that was clicked and its index

        -   `confirmation?: [Confirmation, any]`

            This is a two-element array representing the confirmation type and the confirmation
            message to be show in the [ConfirmDialog](../../widgets/confirm-dialog/usage.md) widget.

            -   Element 1 - `Confirmation`

                See [ConfirmDialog docs](../../widgets/confirm-dialog/usage.md)

            -   Element 2 - `any`

                This is the confirmation message to be displayed in the dialog

            > If this prop is specified for an options item, the `ConfirmDialog` will popup when
            > that options is selected

-   `keyFn: (item: any, itemIndex?: number) => void`

    `ListView` renders its items as a list and in React, each item requires a unique key. This prop
    is a function which is passed the item and its index and should return a unique key for each
