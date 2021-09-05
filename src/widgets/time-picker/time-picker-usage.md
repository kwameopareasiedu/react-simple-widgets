[Home](../../../README.md)

# TimePicker

This widget allows you to select a time. TimePicker is intrinsically a `<div/>` element and accepts all of its attributes.

## Usage

```jsx
import { TimePicker } from "react-simple-widgets"; 

<TimePicker
    time={date}
    onChange={onTimeChange}
/>
```

-   `time: string`

    The selected date of the widget in the format `HH:mm`.
    
-   `onChange: (time: string) => void`

    This function is called with the selected time when the time changes. The time is in the format `HH:mm`.

