[Home](../../../README.md) / ObjectView

# ObjectView

This widget renders properties of an object in a table. `ObjectView` is intrinsically a `table` and it accepts all of its attributes.

## Usage

```jsx
import { ObjectView } from "react-simple-widgets";

<ObjectView 
    object={object} 
    props={props} 
    split={split}
/>
```

-   `object: any`

    The object to render in the widget

- `props: Array<[string, ObjectViewCellResolver]>`

  The properties to display as columns for each list item. This is a two or three element array which
  of is composed of `[label, Cell resolver]`. 

  - The 1st element is the **label** which is displayed as the column header

  - The 2nd element is the **cell resolver**. `ObjectView` uses this to display a cell value for a particular column of each item rendered. Cell resolver can be one of the following:
    -   **Simple String**: (E.g. `property`) For each item, the cell value is `item.property`.
    -   **Dot Separated String**: (E.g. `nested.value`) For each item, the cell value is `item.nested.value`.
    -   **Function**: (E.g. `(item, itemIndex) => JSX.Element`) For each item, the function is called with the item and it's index. The returned JSX is then rendered in the cell.

-   `split?: number = 0.35`

    The width ratio of the label column to the value column. It ranges from 0 to 1
