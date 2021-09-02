[Home](../../../README.md)

# BusyButton

BusyButton is a button widget that displays a spinner when busy is true. Since it is intrinsically a button, it accepts all attributes of a `<button/>` tag

## Usage

```jsx
import { BusyButton } from "react-simple-widgets";

<BusyButton busy={busy} />
```

-   `busy?: boolean = false`

    If set to `true`, the button is disabled and a spinner icon is displayed within it
