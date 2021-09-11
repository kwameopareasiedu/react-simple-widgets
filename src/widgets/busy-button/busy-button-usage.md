[Home](../../../README.md) / BusyButton

# BusyButton

This widget is a button that displays a spinner when busy is true. `BusyButton` is intrinsically a `button` element and accepts all of its attributes.

## Usage

```jsx
import { BusyButton } from "react-simple-widgets";

<BusyButton busy={busy}>Click Me!</BusyButton>
```

-   `busy?: boolean = false`

    If set to `true`, the button is disabled and a spinner icon is displayed within it

-   `invert?: boolean = false`

    If set to `true`, the loader will use an inverted color scheme
