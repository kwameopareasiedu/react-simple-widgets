[Home](../README.md)

# ListView

This widget is a responsive table-like widget for rendering tabular information. It collapses the
view into cards on smaller displays to allow content to fit on screen. By default, options for
items are shown as a dialog thus you need a [DialogProvider](dialog-provider.md) as an ancestor in
the widget tree

## API

### ListView

```jsx
<ListView busy={busy} items={items} props={props} pagination={pagination} sort={sort} options={options} breakpoint={breakpoint} skipIf={skipIf} />
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

    > For more information, see the [stories](../src/list/list-view/index.stories.tsx) for this
    > widget

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
    column headers. The has the structure of `{ column: string, order: ListViewSortOrder, onSort: (column: string, order: ListViewSortOrder) => void }`

    -   `column: string`

        This is the column being sorted. This should be the same as the first items in the `props`

    -   `order: ListViewSortOrder`

        This is the sorting order. It can be `ListViewSortOrder.NONE`, `ListViewSortOrder.ASC` or
        `ListViewSortOrder.DESC`

    -   `onSort: (label: string, order: ListViewSortOrder) => void`

        Called when a column is sorted. It is called with the column name (as specified by `props`)
        and the sorting order

-   `options?: IListViewOptions`

    If specified, the options button is enabled for each list item

    -   `busy?: (item: any, itemIndex?: number) => boolean`

        If specified and returns true, the options button for the item is disabled and a loading
        indicator is shown in its place. This is useful if some long-running operation is being
        carried out on the item

    -   `items?: Array<[string, (item: any, itemIndex?: number) => void, IListViewOptionsConfirmation | boolean]>`

        If specified, the widget handles the dialog display, item listing and calls the associated
        provider to handle the click

        Each item is a three-element array consisting of the option label, the function to call
        when it is clicked and a confirmation object. The item and its index are passed to this
        function

        _The third element of each array is an object with the signature
        `{ label: string, theme?: ConfirmDialogTheme }`. Specify this object if the option needs to
        be confirmed after it is clicked. The `label` is displayed as the confirmation message and
        the `theme` controls the appearance of the [confirmation dialog](confirm-dialog.md#api)_

        _If no confirmation is required for the option, set the third element to `false`_

    -   `handleOptions?: (item: any) => void`

        This is specified when you want to handle what happens when the options of each item is
        clicked. It is passed the item on which the options is clicked

    > If both `items` and `handleOptions` are specified, the widget will call the `handleOptions`, ignoring `items`

-   `onClick?: (item: any, itemIndex?: number) => void`

    If specified the click handler is enabled for each item. The item and its index are passed to
    this function. When specified, hovering on an item will highlight it and the cursor will be a
    pointer

-   `skipIf?: (item: any) => boolean`

    Determines if an item is skipped during rendering. It is passed the item under iteration and
    should return `true` to skip it or `false` otherwise

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/list/list-view/index.stories.tsx)
