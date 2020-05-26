[Home](../README.md)

# CustomField

This widget is a form field wrapper for a component whose value is to be included in a form.

## API

### CustomField

This widget is the wrapper which provides properties and functions to integrate with the form

```jsx
<CustomField name={name} errorTransformer={errorTransformer}>
    {children} // Children is required
</CustomField>
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik holder 
    and you can return a custom error message

-   `children: ICustomFieldBuilder`

    The child of a `CustomField` is a function that returns the component to include in the form. 
    Its signature is:
    
    ```jsx
    ({ value, touched, error, setValue, setTouched, setError }): any => {
            // Return custom component
    }
    ```
    
    -   `value: any`
    
        The value of the widget
        
    -   `touched: boolean`
        
        Determines if the component has received focus previously. This can be used to provide a 
        specific styling
            
    -   `error: any`
        
        The error of this component. This is usually provided by the validation schema of the form
        
    -   `setValue: (value: any) => void`
        
        Sets the value of the widget
        
    -   `setTouched: (touched: boolean) => void`
        
        Sets the touched state of the widget
            
    -   `setError: (error: any) => void`
        
        Sets the error of the widget within the form holder. A widget with an error will prevent
        the form from submitting
        

## Usage

This widget is used to build the other form widgets provided in this library. You can view each 
widget's stories to see how this widget is used

-   [TextField](text-field.md)
-   [DropdownField](dropdown-field.md)
-   [SelectField](select-field.md)
-   [FileField](file-field.md)
