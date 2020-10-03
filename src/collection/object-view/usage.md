[Home](../../../README.md)

# ObjectView

This widget renders properties of an object using a table

## Usage

```jsx
import { ObjectView } from "react-simple-widgets";

<ObjectView object={object} props={props} splitRatio={splitRatio} condensed={condensed} />
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

-   `splitRatio?: number = 0.35`

    The width ratio of the label column to the value column. It ranges from 0 to 1

-   `condensed?: boolean`

    Indicates whether or not to reduce the space used in the table cells
