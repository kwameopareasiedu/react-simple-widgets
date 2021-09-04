[Home](../../../README.md)

# MultiDatePicker

This widget allows you to select multiple calendar date. Since it is intrinsically a div element, it accepts all attributes of the `<div/>` tag.

## Usage

```jsx
import { MultiDatePicker } from "react-simple-widgets"; 

<MultiDatePicker
    dates={dates}
    onDatesSelect={onDatesSelect}
/>
```

-   `dates: Array<string>`

    The selected dates of the widget in the format `YYYY-MM-DD`.
    
-   `onDatesSelect: (dates: Array<string>) => void`

    This function is called with the selected dates when the save button is clicked.
