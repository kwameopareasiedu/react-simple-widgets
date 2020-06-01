[Home](../README.md)

# ChangeLog

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
