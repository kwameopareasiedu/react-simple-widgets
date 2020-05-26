[Home](../README.md)

# FieldDecoration

This widget provides a label and and an error component for its child. It also handles the
decoration of its child components with three preconfigured styles

## API

### FieldDecoration

This widget is the wrapper which provides properties and functions to integrate with the form

```jsx
<FieldDecoration decoration={decoration} label={label} error={error} hasValue={hasValue}>
    {children} // Children is required
</FieldDecoration>
```

-   `decoration: FieldDecoration`

    This controls the decoration applied to the widget and its children. It can be one of
    `FieldDecorationType.NONE`, `FieldDecorationType.FLAT`, `FieldDecorationType.UNDERLINE` or
    `FieldDecorationType.FLOATING_LABEL`

    -   `FieldDecorationType.NONE`

        Applies no styling to the children. You should use this if you want to customize the
        decoration yourself

    -   `FieldDecorationType.FLAT`

        Applies a flat decoration to the widget. This includes a border around the wrapped
        component which changes color to the primary theme color when the wrapped component receives
        focus

    -   `FieldDecorationType.UNDERLINE`

        Applies a bottom border to the wrapped component. When the wrapped component receives
        focus, the border fills with the primary theme color from left to right

    -   `FieldDecorationType.FLOATING_LABEL`

        Applied a floating label decoration to the wrapped component. This transitions the label
        from a placeholder position to the top of the widget and gives the border the primary theme
        color when the wrapped component receives focus

-   `label?: string`

    The label text to display for the widget

-   `error?: string`

    The error text to display below the widget

-   `hasValue?: boolean = false`

    This value indicates whether the wrapped component has a value or not. In the case of the
    `FieldDecorationType.FLOATING_LABEL` decoration, this applies the transition effect on the
    label when the wrapped component receives focus

-   `children: IFieldDecorationBuilder`

    The child of a `FieldDecoration` is a function that returns the component to be rendered. Its
    signature is:

    ```jsx
    ({ onFieldFocus, onFieldBlur }): any => {
        // Return custom component
    };
    ```

    -   `onFieldFocus: () => void`

        This should be called by the custom component when it receives focus. This will make the
        widget apply the focus styling

    -   `onFieldBlur: () => void`

        This should be called by the custom component when it loses focus. This will make the widget
        remove the focus styling

## Usage

This widget is used to style the other form widgets provided in this library. You can view each
widget's source code to see how this widget is used

-   [TextField](../src/form/text-field/index.tsx)
-   [DropdownField](../src/form/dropdown-field/index.tsx)
-   [SelectField](../src/form/select-field/index.tsx)
-   [FileField](../src/form/file-field/index.tsx)
