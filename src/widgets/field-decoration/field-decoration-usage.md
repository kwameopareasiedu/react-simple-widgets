[Home](../../../README.md) / FieldDecoration

# FieldDecoration

This widget wraps its child and decorates it with the following:

- Label text header
- Leading widget
- Trailing widget
- Error text footer
- Helper text footer

## Usage

```jsx
import { FieldDecoration } from "react-simple-widgets";

<FieldDecoration
    label="Flat field"
    leading={<i className="fa fa-user me-2" />}
    trailing={
        <button className="btn bt-light btn-sm">
            <i className="fa fa-redo" />
        </button>
    }
    error="This is a test error"
    helper="Max length: 10 chars">
    {({ onFieldFocus, onFieldBlur }) => (
        <input
            type="text"
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            placeholder="Enter name here"
		/>
    )}
</FieldDecoration>
```

-   `label?: any`

    The label text

- `error?: any`

  The error text to display at the left footer

-   `helper?: any`

    A helper text to display at the right footer

-   `leading?: JSX.Element`

    A component to render to the left of the wrapped component. You can use this to perhaps add an icon before the component.
    
-   `trailing?: JSX.Element`

    A component to render to the right of the wrapped component. You can use this to perhaps add an icon after the component.
    
-   `onFieldFocus: () => void`

    This should be called by the custom component when when receives focus. This will make `FieldDecoration` apply the focus styling.
    
-   `onFieldBlur: () => void`

    This should be called by the custom component when when loses focus. This will make `FieldDecoration` remove the focus styling.
