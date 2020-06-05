[Home](../README.md)

# ObjectView

This widget renders properties of an object using a table

## API

### ListView

```jsx
<ObjectView object={object} props={props} splitRatio={splitRatio} />
```

-   `object: any`

    The object to render in the widget

-   `props: Array<[string, string | ((item: any, itemIndex?: number) => any)]>`

    The properties to display as columns for each list item. This is a two element array which
    of `[label, value property or function]`. The **label** is displayed as the column header

    -   If the second array item is a `string`, then for each item in `items` the widget will
        display the property matching this string and display that as the column value

    -   If the second array is a `function`, the widget will pass each item along with its index
        to this function, and it should return the value to be displayed in the column

    > For more information, see the [stories](../src/list/object-view/index.stories.tsx) for this
    > widget

-   `splitRatio?: number = 0.3`

    The width ratio of the label column to the value column. It ranges from 0 to 1

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/list/list-view/index.stories.tsx)
