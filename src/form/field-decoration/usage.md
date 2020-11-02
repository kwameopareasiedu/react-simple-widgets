[Home](../../../README.md)

# FieldDecoration

This widget decorates its child with a label, leading, trailing and an error component. It also
handles the decoration of its child components with three preconfigured styles.

## Usage

```jsx
import { FieldDecoration } from "react-simple-widgets";
import { FieldDecorationType } from "react-simple-widgets/dist/constants";

<FieldDecoration
    label={label}
    error={error}
    leading={leading}
    trailing={trailing}
    decoration={decoration}
    stickyFloatingLabel={stickyFloatingLabel}
    disabled={disabled}>
    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
        <input
            type="text"
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            onChange={e => onFieldChange(!!e.target.value)}
        />
    )}
</FieldDecoration>;
```

```jsx
<FieldDecoration
    decoration={decoration}
    label={label}
    leading={leading}
    trailing={trailing}
    error={error}
    stickyFloatingLabel={stickyFloatingLabel}
    disabled={disabled}>
    {({ onFieldFocus, onFieldBlur, onFieldChange }) => (
        <select type="text" onFocus={onFieldFocus} onBlur={onFieldBlur} onChange={e => onFieldChange(!!e.target.value)}>
            <option value="A">A</option>
            <option value="B">B</option>
        </select>
    )}
</FieldDecoration>
```

-   `label?: any`

    The label text to display for the widget

-   `error?: any`

    The error text to display below the widget

-   `leading?: any`

    A component to render to the left of the wrapped component. You can use this to perhaps add an
    icon before the component.

-   `trailing?: any`

    A component to render to the right of the wrapped component. You can use this to perhaps add an
    icon after the component.

-   `decoration: FieldDecoration`

    This controls the decoration applied to the widget and its children. It can be one of
    `FieldDecorationType.UNDERLINE` or `FieldDecorationType.FLOATING_LABEL`

    -   `FieldDecorationType.UNDERLINE`

        Applies a bottom border to the wrapped component. When the wrapped component receives
        focus, the border fills with the primary theme color from left to right

    -   `FieldDecorationType.FLOATING_LABEL`

        Applied a floating label decoration to the wrapped component. This transitions the label
        from a placeholder position to the top of the widget and gives the border the primary theme
        color when the wrapped component receives focus

-   `disabled?: boolean = false`

    This value indicates whether the widget is disabled or not. If `true`, the widget ignores
    pointer events and reduces opacity to half.

-   `stickyFloatingLabel?: boolean = false`

    This value indicates whether the wrapped component has a value or not. This props is only used
    if the `mode` is `FieldDecorationType.FLOATING_LABEL`. If `true`, calls to `onFieldFocus()` and
    `onFieldBlur()` will be ignored and the label will be permanently floated

-   `onFieldFocus: () => void`

    This should be called by the custom component when when receives focus. This will make the
    widget apply the focus styling.

-   `onFieldBlur: () => void`

    This should be called by the custom component when when loses focus. This will make the widget
    remove the focus styling.

-   `onFieldChange: (hasValue: boolean) => void`

    This should be called by the custom component to indicate that it has a value. This is used by
    the `FieldDecoration.FLOATING_LABEL` to keep the label floated if a value is present but the
    field has lost focus.
