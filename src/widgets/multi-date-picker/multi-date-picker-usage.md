[Home](../../../README.md)

# MultiDatePicker

This widget allows you to select multiple calendar dates. MultiDatePicker is intrinsically a `<div/>` element and accepts all of its attributes..

## Usage

```jsx
import { MultiDatePicker } from "react-simple-widgets"; 

<MultiDatePicker
    dates={dates}
    onChange={onDatesSelect}
/>
```

-   `dates: Array<string>`

    The selected dates of the widget in the format `YYYY-MM-DD`.
    
-   `onChange: (dates: Array<string>) => void`

    This function is called with the selected dates when the save button is clicked. The dates are of the format `YYYY-MM-DD`
