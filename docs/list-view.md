[Home](../README.md)

# ListView

This widget is a responsive table-like widget for rendering tabular information. It collapses the
view into cards on smaller displays to allow content to fit on screen. By default, options for
items are shown as a dialog thus you need a [DialogProvider](dialog-provider.md) as an ancestor in
the widget tree

## API

### ListView

```jsx
<ListView items={items} props={props} page={page} total={total} pageSize={pageSize} sort={sort} busy={busy} options={options} breakpoint={breakpoint} onPageChange={onPageChange} onOptionsClick={onOptionsClick} onSort={onSort} skipIf={skipIf} />
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

-   `page: number`

    The current page of the list being viewed. This is for paginated lists

-   `total: number`

    The size of the item collection being viewed

-   `pageSize: number`

    The size of each page of the list.

    > `page`, `total` and `pageSize` are used to setup the pagination links

-   `busy: boolean`

    Indicates whether item data is loading. When true, a busy animation is displayed in the widget

-   `breakpoint?: number = 768`

    The window width, below which items are rendered in cards to make them viewable on small screen
    devices

-   `sort?: [label: string, order: ListViewSortOrder]`

    The sorting data of this widget. This is a two-element array containing the column being sorted
    and the sorting order. The order can be one of `ListViewSortOrder.NONE`,
    `ListViewSortOrder.ASC` or `ListViewSortOrder.DESC`

-   `options?: Array<[string, (item: any, optionIndex: number) => void]>`

    An optional list of options to display for each item. This is a two-element array consisting
    of the option message string and the function to call when it is clicked. The item and the
    option's index is passed to this function

-   `onPageChange: (page: number) => void`

    Called when the pagination/navigation buttons are clicked. The page number corresponding to the
    pagination/navigation button is passed to this function. This is used in conjunction with
    `page` to navigate the list

-   `onOptionsClick?: (item: any, itemIndex?: number)`

    Called when the options button on an item is clicked. It is passed the item whose options
    button was clicked and its index.

    > Specifying this will prevent default handling of the options and ignore `options` prop.
    > As such, the responsibility of handling the options dialog will now belong to your
    > application

-   `onSort?: (label: string, order: ListViewSortOrder) => void`

    If specified, the column sorting buttons are enabled and sorting a column will call this
    function with the column name (as specified by `props`) and the sorting order. The sorting
    order can be one of `ListViewSortOrder.NONE`, `ListViewSortOrder.ASC` or
    `ListViewSortOrder.DESC`

    > `ListView` does not store soring data internally and you'll need to update the `sort` prop
    > to make the widget aware of the sorting update.

-   `skipIf?: (item: any) => boolean`

    Determines if an item is skipped during rendering. It is passed the item under iteration and
    should return `true` to skip it or `false` otherwise 

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/list/list-view/index.stories.tsx)