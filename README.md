# react-simple-widgets

This is a collection of widgets to help accelerate your React app development.
It provides customizable widgets that perform commonly needed tasks within your app.

![](https://img.shields.io/badge/react-v16.13.1+-blue)
![](https://img.shields.io/badge/minified%20size-904.9%20kB-blue)
[![](https://img.shields.io/badge/github-star-lightgrey)](https://github.com/kwameopareasiedu/react-simple-widgets)

### Installing

```
npm i -D react-simple-widgets
```

This libraries requires [formik](https://jaredpalmer.com/formik/), [react](https://reactjs.org/) and
[react-router-dom](https://reacttraining.com/react-router/web) as peer dependencies, so you need to
have these installed in your application as well.

You can install these dependencies with `npm i -D react react-router-dom formik`

### Widgets

#### Providers

Providers wrap around you app and provide globally accessible functionality to all pages of your app

-   [DialogProvider](docs/dialog-provider.md) - Provides a simple dialog framework within your app
-   [ValueStoreProvider](docs/value-store-provider.md) - Provides a global value storage which can
    utilize the local storage API to persist data
-   [FlashProvider](docs/flash-provider.md) - Provides a flash message framework built using the
    dialog framework
-   [PageTransitionProvider](docs/page-transition-provider.md) - Provides a page transition
    framework for navigating between different pages of your app

#### Form

These are customized form widgets for creating [Formik](https://jaredpalmer.com/formik/) forms

-   [FieldDecoration](docs/field-decoration.md) - A widget that provides a label and error component
    together with focus and blur styling to a wrapped component
-   [CustomField](docs/custom-field.md) - A widget that allows custom components to be integrated
    with a form
-   [TextField](docs/text-field.md) - A text field that doubles as a rich text editor
-   [DropdownField](docs/dropdown-field.md) - A widget that allows selection from a dropdown
-   [SelectField](docs/select-field.md) - A widget that allows binary, single or multi selection
    from a list of options
-   [FileField](docs/file-field.md) - A form wrapper widget for the
    [FilePicker](docs/file-picker.md)
-   [DateField](docs/date-field.md) - A form wrapper widget for the
    [DatePicker](docs/date-picker.md)

#### Pickers

Pickers allow you to select some complex data type

-   [FilePicker](docs/file-picker.md) - A simple file picker which supports drag-and-drop feature
-   [DatePicker](docs/date-picker.md) - A date picker which supports single and multiple date
    selection as well as month selection

#### List

Widgets here operate on list data

-   [ListView](docs/list-view.md) - A widget that provides responsive display of tabular data
-   [ObjectView](docs/object-view.md) - A widget that renders an object's data in a tabular form

#### Misc

Widgets under this category are for convenience

-   [BusyButton](docs/busy-button.md) - A button widget that displays a loading indicator if busy
-   [ConfirmDialog](docs/confirm-dialog.md) - A widget which displays a confirmation dialog before
    calling an action
-   [Breadcrumbs](docs/breadcrumbs.md) - A breadcrumb link container widget
-   [Loader](docs/loader.md) - A widget that displays a spinner
-   [useQueryParams](docs/use-query-params.md) - A hook that returns a object containing the URL
    search string parameters
-   [useLoadMore](docs/use-load-more.md) - A hook that provides methods and state variables to
    implement a load-more-items feature for a list of items that cannot be displayed in a ListView

### Customization

#### Theming

The colors used by the widgets are controlled by CSS variables and you can customize them to suit
your application's theme

| CSS variable                | Description                                              | Default value |
| --------------------------- | -------------------------------------------------------- | ------------- |
| `--rsw-label-color`         | Controls the label color of field decorator              | `#777777`     |
| `--rsw-error-color`         | Controls the error color of components indicating errors | `#ff5555`     |
| `--rsw-primary-theme-color` | Controls the primary color used by all widgets           | `#209d58`     |
| `--rsw-primary-theme-color` | Controls the secondary color used by all widgets         | `#b3b3b3`     |
| `--rsw-transition-duration` | Controls the duration of transitions used by all widgets | `0.3s`        |

The following variables are widget specific

| CSS variable                            | Description                                                                                            | Default value |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------- |
| `--rsw-list-view-max-height`            | Controls the maximum height of the `ListView` widget. Scrolling of items is enabled beyond this height | `550px`       |
| `--rsw-date-picker-header-bg-color`     | Controls the background color of the day label display in the `DatePicker` widget                      | `#209d5811`   |
| `--rsw-field-decoration-label-bg-color` | Controls the background color of the label component of the `FieldDecoration` widget                   | `white`       |
| `--rsw-select-field-indicator-size`     | Controls the width and height of options in the `SelectField` widget                                   | `1.5rem`      |
| `--rsw-dialog-view-vertical-margin`     | Controls the top and bottom margins of dialogs created by the `DialogProvider` widget                  | `1.2rem`      |
| `--rsw-flash-view-default-theme-color`  | Controls the default theme color of flash message dialogs created by the `FlashProvider` widget        | `#e3e3e3`     |
| `--rsw-flash-view-error-theme-color`    | Controls the theme color of error flash message dialogs created by the `FlashProvider` widget          | `#ff5555`     |
| `--rsw-flash-view-warning-theme-color`  | Controls the theme color of warning flash message dialogs created by the `FlashProvider` widget        | `#ffdd55`     |
| `--rsw-flash-view-info-theme-color`     | Controls the theme color of information flash message dialogs created by the `FlashProvider` widget    | `#55ddff`     |
| `--rsw-flash-view-success-theme-color`  | Controls the theme color of success flash message dialogs created by the `FlashProvider` widget        | `#7fff2a`     |

### Storybook samples

This library is built with [Storybook](https://storybook.js.org/) and each widget has its own set
of stories demonstrating use cases of the widget. When executed, Storybook will open a web page
containing all the stories for you to interact with.

To execute the storybook, follow these steps:

1.  Clone the project from [Github](https://github.com/kwameopareasiedu/react-simple-widgets)
2.  Run `npm install` to install the project dependencies
3.  Run `npm run storybook`

### Maintainers

-   [Kwame Opare Asiedu](https://github.com/kwameopareasiedu/)

### Support

If you'd like to support this project, you can do so by becoming a patreon on
[Patreon](https://www.patreon.com/kwameopareasiedu)

It would be really helpful if you can star the project on
[Github](https://github.com/kwameopareasiedu/react-simple-widgets)

### Changelog

[View changelog](docs/changelog.md)
