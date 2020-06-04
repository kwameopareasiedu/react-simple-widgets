[Home](../README.md)

# Changelog

-   `1.4.1`

    -   Added overflow styling to [DatePicker](date-picker.md) and [FilePicker](file-picker.md)
        widgets
    -   Increased `z-index` of [DialogProvider](dialog-provider.md) dialog container div to 999999

-   `1.4.0`

    -   Added `onClick` prop to [ListView](list-view.md) widget
    -   Added `theme` prop to [ConfirmDialog](confirm-dialog.md) widget
    -   Adjusted label font size of [FieldDecoration](field-decoration.md) to 87.5%
    -   Adjusted [FieldDecoration](field-decoration.md) labels to be single lines

-   `1.3.7`

    -   Added focus indicator to [SelectField](select-field.md) options
    -   Modified [useQueryParams](use-query-params.md) to update `qp` state object if the whole
        location object changes instead of just `location.search`

-   `1.3.6`

    -   Added 100% width and height and auto overflow styling to
        [PageTransitionView](src/provider/page-transition-provider/page-transition-view.tsx) widget

-   `1.3.5`

    -   Added the `clear` function to the [ValueStoreProvider](docs/value-store-provider.md) which
        deletes all values in the store and removes them from the local storage if they are
        persisted

-   `1.3.4`

    -   Modified [ListView](docs/list-view.md) to limit styling to immediate children and not
        affect content within the cells

-   `1.3.3`

    -   Replaced `query-string` with a simpler algorithm for query string to query parameter
        resolution in [useQueryParams](docs/use-query-params.md)

-   `1.3.2`

    -   [useQueryParams](use-query-params.md) now returns and empty object if no query parameter
        are present in the URL
    -   Modified [DatePicker](date-picker.md) with `DatePickerMode.MULTI` to clear text selection
        when shift key is pressed while a date is selected
    -   Modified [DatePicker](date-picker.md) with `DatePickerMode.MULTI` to return null date when
        no date is selected instead of an empty array which makes is function the same as
        `DatePickerMode.SINGLE` and `DatePickerMode.MONTH` when no dates are selected

-   `1.3.1`

    -   Modified [ValueStoreProvider](value-store-provider.md) to store null values as-is instead
        of an empty string

-   `1.3.0`

    -   Added `del` feature to [ValueStoreProvider](value-store-provider.md) to remove values from
        the provider

-   `1.2.4`

    -   Modified [PageTransitionProvider](page-transition-provider.md) to ignore redirect if target
        URL is same as current URL
    -   Modified [PageTransitionProvider](page-transition-provider.md) to ignore redirect if target
        URL is empty
    -   Forwarded the `name` prop of [TextField](text-field.md) and
        [DropdownField](dropdown-field.md) to `input` and `select` components respectively to
        trigger browser added feature (such as auto-completion)

-   `1.2.3`

    -   Removed `placeholder` prop from [DatePicker](date-picker.md) because `label` already covers
        its function

-   `1.2.2`

    -   Added a "No items to display" message to [ListView](list-view.md) if list is empty
    -   Added `options.busy` prop to [ListView](list-view.md) to determine if a busy indicator
        should be displayed beside and item

-   `1.2.1`

    -   Fixed bug in [ValueStoreProvider](value-store-provider.md) making simultaneous value
        updates persist
    -   Added `placeholder` prop to [DatePicker](date-picker.md)

-   `1.2.0`

    -   Grouped props of [ListView](list-view.md). This puts related props in similar objects which
        are enabled when specified or disabled when not
    -   Made `message` parameter of flash functions in [FlashProvider](flash-provider.md) optional

-   `1.1.0`

    -   Added [useQueryParams hook](use-query-params.md)
    -   Added the [Loader](loader.md) widget
    -   Added the `bind` prop to [DialogProvider](dialog-provider.md) to allow binding of
        properties from the host component to the dialog component
