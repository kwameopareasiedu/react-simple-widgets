# react-simple-widgets

![](https://img.shields.io/badge/version-3.0.0-blue)
![](https://img.shields.io/badge/react-v16.13.1+-blue)
![](https://img.shields.io/badge/minified%20size-886.1%20kB-blue)
[![](https://img.shields.io/badge/github-star-lightgrey)](https://github.com/kwameopareasiedu/react-simple-widgets)

This is a collection of customizable widgets to help accelerate your React app development. These widgets perform
commonly needed tasks within your app such as dialogs, flash messages, lists and more.

To find out if this library is right for you, we've compiled the storybook samples of all widgets in this library. Click
[here](https://kwameopareasiedu.github.io/react-simple-widgets/) to test them out to seem if this library offers what
you want before committing to installing it in your project.

## Installing

```
yarn add -D react-simple-widgets
```

This libraries requires [formik](https://jaredpalmer.com/formik/), [react](https://reactjs.org/) and
[react-router-dom](https://reacttraining.com/react-router/web/) as peer dependencies, so you need to have these
installed in your application as well.

You can install these dependencies with `yarn add -D react react-router-dom formik` or
`npm i -D react react-router-dom formik`

## Migrating

**_See the [migration guide](MIGRATION-GUIDE-1-2.md) on how to upgrade from v1 to v2_**

**_See the [migration guide](MIGRATION-GUIDE-2-3.md) on how to upgrade from v2 to v3_**

## Providers

Providers wrap around you app and provide globally accessible functionality to all parts of your app

-   [DialogProvider](src/widgets/dialog-provider/usage.md) - Provides a simple dialog framework within your app
-   [ValueStoreProvider](src/widgets/local-storage-provider/local-storage-provider-usage.md) - Provides an in-memory value storage which can
    utilize the local storage API to persist data
-   [FlashProvider](src/widgets/flash-provider/flash-provider-usage.md) - Provides a flash message framework built using the dialog
    framework
-   [TransitionProvider](src/transition-provider/usage.md) - Provides a page transition framework for
    navigating between different pages of your app

## Form

These are customized form widgets for creating [Formik](https://jaredpalmer.com/formik/) forms

-   [FieldDecoration](src/form/field-decoration/usage.md) - A widget that provides a label and error component together
    with focus and blur styling to a wrapped component
-   [CustomField](src/form/custom-field/usage.md) - A widget that allows custom components to be integrated with a form
-   [TextField](src/form/text-field/usage.md) - A text field that doubles as a rich text editor
-   [PasswordField](src/form/password-field/usage.md) - A text field whose `type` is **password**
-   [DropdownField](src/form/dropdown-field/usage.md) - A widget that allows selection from a dropdown
-   [SelectField](src/form/select-field/usage.md) - A widget that allows binary, single or multi selection from a list
    of options
-   [FileField](src/form/file-field/usage.md) - A form wrapper widget for the [FilePicker](src/form/file-picker/usage.md)
-   [DateField](src/form/date-field/usage.md) - A form wrapper widget for the [DatePicker](src/form/date-picker/usage.md)
-   [TimeField](src/form/time-field/usage.md) - A form wrapper widget for the [TimePicker](src/form/time-picker/usage.md)

## Pickers

Pickers allow you to select some complex data type

-   [FilePicker](src/form/file-picker/usage.md) - A simple file picker which supports drag-and-drop feature
-   [DatePicker](src/form/date-picker/usage.md) - A date picker which supports single and multiple date selection as
    well as month selection
-   [TimePicker](src/form/time-picker/usage.md) - A 12-hour time picker

## List

Widgets here operate on list data

-   [ListView](src/widgets/table-view/table-view-usage.md) - A widget that displays a list of items in a responsive tabular form
-   [ObjectView](src/widgets/object-view/object-view-usage.md) - A widget that renders an object's data in a tabular form

## Misc

Widgets under this category are for convenience

-   [Loader](src/widgets/loader/loader-usage.md) - A widget that displays a spinner
-   [BusyButton](src/widgets/busy-button/busy-button-usage.md) - A button widget that displays a loading indicator if busy
-   [ConfirmDialog](src/widgets/confirm-button/confirm-button-usage.md) - A widget which displays a confirmation dialog before calling
    an action
-   [Breadcrumbs](src/widgets/breadcrumbs/breadcrumbs-usage.md) - A breadcrumb link container widget
-   [PageActions](src/widgets/action-bar/action-bar-usage.md) - A `div` that displays a row of spaced buttons or nothing if no
    children are specified

## Hooks

-   [useQueryParams](src/hooks/use-query-params/usage.md) - A hook that returns a object containing the URL search
    string parameters
-   [useLoadMore](src/hooks/use-load-more/usage.md) - A hook that provides methods and state variables to implement a
    load-more-items feature for a list of items that cannot be displayed in a ListView
-   [useCountdown](src/hooks/use-countdown/usage.md) - A hook which provides numeric countdown functionality
-   [useWindowBreakpoints](src/hooks/use-window-breakpoints/usage.md) - A hook which provides the window width category
    data according to [Bootstrap's breakpoints](https://getbootstrap.com/docs/4.0/layout/grid/)

## Utils

-   [debounce](src/misc/debounce/usage.md) - Creates a debounced function which is invoked after a specified delay after
    a caller has called it

## Theming

The colors used by the widgets are controlled by CSS variables and you can customize them to suit your application's
theme

| CSS variable                  | Description                                              | Default value |
| ----------------------------- | -------------------------------------------------------- | ------------- |
| `--rsw-label-color`           | Controls the label color of field decorator              | `#777777`     |
| `--rsw-error-color`           | Controls the error color of components indicating errors | `#ff5555`     |
| `--rsw-primary-theme-color`   | Controls the primary color used by all widgets           | `#209d58`     |
| `--rsw-secondary-theme-color` | Controls the secondary color used by all widgets         | `#b3b3b3`     |
| `--rsw-transition-duration`   | Controls the duration of transitions used by all widgets | `0.3s`        |

The following variables are widget specific

| CSS variable                            | Description                                                                                         | Default value |
| --------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------- |
| `--rsw-date-picker-header-bg-color`     | Controls the background color of the day label display in the `DatePicker` widget                   | `#209d5811`   |
| `--rsw-field-decoration-label-bg-color` | Controls the background color of the label component of the `FieldDecoration` widget                | `white`       |
| `--rsw-select-field-indicator-size`     | Controls the width and height of options in the `SelectField` widget                                | `1.5rem`      |
| `--rsw-dialog-view-vertical-margin`     | Controls the top and bottom margins of dialogs created by the `DialogProvider` widget               | `1.2rem`      |
| `--rsw-flash-view-error-theme-color`    | Controls the theme color of error flash message dialogs created by the `FlashProvider` widget       | `#ff5555`     |
| `--rsw-flash-view-warning-theme-color`  | Controls the theme color of warning flash message dialogs created by the `FlashProvider` widget     | `#ffdd55`     |
| `--rsw-flash-view-info-theme-color`     | Controls the theme color of information flash message dialogs created by the `FlashProvider` widget | `#55ddff`     |
| `--rsw-flash-view-success-theme-color`  | Controls the theme color of success flash message dialogs created by the `FlashProvider` widget     | `#7fff2a`     |

## Storybook samples

This library is built with [Storybook](https://storybook.js.org/) and each widget has its own set of stories
demonstrating use cases of the widget. When executed, Storybook will open a web page containing all the stories for
you to interact with.

To execute the storybook, follow these steps:

1.  Clone the project from [Github](https://github.com/kwameopareasiedu/react-simple-widgets)
2.  Run `npm install` to install the project dependencies
3.  Run `npm run storybook`

## Maintainers

-   [Kwame Opare Asiedu](https://github.com/kwameopareasiedu/)

## Support

If you'd like to support this project, you can do so by becoming a patreon on
[Patreon](https://www.patreon.com/kwameopareasiedu)

It would be really helpful if you can star the project on
[Github](https://github.com/kwameopareasiedu/react-simple-widgets)

## Changelog

[View changelog](CHANGELOG.md)
