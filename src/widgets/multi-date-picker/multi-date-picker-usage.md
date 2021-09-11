[Home](../../../README.md) / MultiDatePicker

# MultiDatePicker

This widget allows you to select multiple calendar dates. `MultiDatePicker` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { MultiDatePicker } from "react-simple-widgets"; 

<MultiDatePicker
    value={value}
    displayFormat={displayFormat}
    onChange={onDatesSelect}
/>
```

-   `value: Array<string>`

    The selected dates of the widget in the format `YYYY-MM-DD`.
    
-   `displayFormat?: string`

    The display format of the selected dates. Defaults to `ddd, Do MMM YYYY` (E.g. Thu, 9th Sep 2021)

-   `onChange: (dates: Array<string>) => void`

    This function is called with the selected dates when the save button is clicked. The dates are of the format `YYYY-MM-DD`
